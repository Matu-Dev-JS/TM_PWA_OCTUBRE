import Channel from "../models/Channel.model.js"
import Message from "../models/Message.model.js"
import Workspace from "../models/Workspace.model.js"
import ChannelRepository from "../repository/channel.repository.js"
import MessageRepository from "../repository/message.repository.js"

export const createChannelController = async (req, res) =>{
    try{
        const {id} = req.user
        const {workspace_id} = req.params
        const {name} = req.body


        const channel_created = await ChannelRepository.createChannel(id, {name, workspace_id})

        const channels = await ChannelRepository.getAllChannelsByWorkspaceId(workspace_id)
        return res.json(
            {
                status: 201,
                ok: true,
                message: 'Channel created successfully',
                data: {
                    new_channel: channel_created,
                    channels
                }
            }
        )
    }
    catch(error){
        console.error(error)
        return res.json({
            ok:false,
            message: "Internal server error",
            status: 500,
        })
    }
}

export const getChannelsListController = async (req, res) =>{
    try{
        const {id} = req.user
        const {workspace_id} = req.params
        const {workspace_selected} = req

        const channels = await ChannelRepository.getAllChannelsByWorkspaceId(workspace_id)

        return res.json({
            ok: true,
            status: 200,
            message: 'Channels list',
            data: {
                channels
            }
        })
    }
    catch(error){
        console.error(error)
        return res.json({
            ok:false,
            message: "Internal server error",
            status: 500,
        })
    }
}

export const sendMessageController = async (req, res) =>{
    try{
        const {channel_id, workspace_id} = req.params
        const {content} = req.body
        const {id} = req.user
        const channel_selected = ChannelRepository.getChannelById(channel_id)
        if(!channel_selected){
            return res.json({
                ok: false,
                message: 'Channel not found',
                status: 404
            })
        }
        //Si en el futuro desear que cada canal tenga miembros, entonces deben checkearlo aqui
        const new_message = await MessageRepository.createMessage({
            sender_user_id: id,
            content,
            channel_id
        })

        return res.json({
            ok: true,
            message: 'Was sent successfully',
            status: 201,
            data: {
                new_message
            }
        })
    }
    catch(error){
        console.error(error)
        return res.json({
            ok:false,
            message: "Internal server error",
            status: 500,
        })
    }

}


export const getMessagesFromChannelController = async (req, res) =>{
    try{
        const {channel_id, workspace_id} = req.params
        const channel_selected = await ChannelRepository.getChannelById(channel_id)
        if(!channel_selected){
            return res.json({
                ok: false,
                message: 'Channel not found',
                status: 404
            })
        }

        const messages = await MessageRepository.getAllMessagesFromChannel( channel_id )
        
        return res.json({
            ok:true,
            status: 200,
            message: 'Messages list',
            data: {
                messages
            }
        })
    }
    catch(error){
        console.error(error)
        return res.json({
            ok:false,
            message: "Internal server error",
            status: 500,
        })
    }
}
