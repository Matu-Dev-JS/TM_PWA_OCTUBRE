import Workspace from "../models/Workspace.model.js";
import { ServerError } from "../utils/errors.util.js";

class WorkspaceRepository {
    async createWorkspace ({name, id}){
        return await Workspace.create({
            name,
            owner: id,
            members: [id] //Determino que el creador de el workspace sea miembro de el workspace
        })
    }
    
    async findWorkspaceById (workspace_id) {
        return await Workspace.findById(workspace_id)
    }

    async addMemberToWorkspace (workspace_id, user_id, user_invited_id){
        const workspace = await this.findWorkspaceById(workspace_id)
        if(!workspace.owner.equals(user_id)){
            throw new ServerError('User is not the owner', 403)
        }
        if(!workspace){
            throw new ServerError('Workspace not found', 404)
        }
        if(workspace.members.includes(user_invited_id)){
            throw new ServerError('User already is a member', 400)
        }
        workspace.members.push(user_invited_id)
        await workspace.save()
        return workspace
    }

    async getAllWorkspacesByMemberId(user_id){
        return await Workspace.find({members: user_id})
        .populate('members', 'username email')
        .populate('owner', 'username')
    }
}


export default new WorkspaceRepository()