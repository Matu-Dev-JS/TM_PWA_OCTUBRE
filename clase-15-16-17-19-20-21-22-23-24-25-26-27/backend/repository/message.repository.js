import Message from "../models/Message.model.js"

class MessageRepository{
    async createMessage ({sender_user_id, channel_id, content}){
        return await Message.create({
            content,
            sender: sender_user_id,
            channel: channel_id
        })
    }

    async getAllMessagesFromChannel (channel_id){
        return await Message.find({channel: channel_id})
        .populate('sender', 'username')
    }
}


export default new MessageRepository()