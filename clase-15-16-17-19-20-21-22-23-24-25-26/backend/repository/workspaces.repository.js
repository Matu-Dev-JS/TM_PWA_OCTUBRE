import Workspace from "../models/Workspace.model.js";

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
    async addMemberToWorkspace (workspace_id, user_id){
        const workspace = await this.findWorkspaceById(workspace_id)
        if(!workspace){
            throw new Error('Workspace not found')
        }
        if(workspace.members.includes(user_id)){
            throw new Error('User already is a member')
        }
        workspace.members.push(user_id)
        await workspace.save()
        return workspace
    }
}


export default new WorkspaceRepository()