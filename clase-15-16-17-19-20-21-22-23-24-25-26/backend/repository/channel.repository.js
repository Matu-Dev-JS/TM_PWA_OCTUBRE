import Channel from "../models/Channel.model.js";

class ChannelRepository{
    async createChannel(user_id, {name, workspace_id}){
        return await Channel.create({
            name,
            workspace: workspace_id,
            createdBy: user_id
        })
    }
    async getAllChannelsByWorkspaceId (workspace_id){
        return await Channel.find({workspace: workspace_id})
    }

    async getChannelById (channel_id) {
        return await Channel.findById(channel_id)
    }
}

export default new ChannelRepository()