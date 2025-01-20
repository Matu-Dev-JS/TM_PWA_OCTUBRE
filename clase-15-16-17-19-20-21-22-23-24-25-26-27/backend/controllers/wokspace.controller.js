
import User from "../models/User.model.js"
import Workspace from "../models/Workspace.model.js"
import WorkspaceRepository from "../repository/workspaces.repository.js"
import UserRepository from "../repository/user.repository.js"
import { ServerError } from "../utils/errors.util.js"

export const createWorkspaceController = async (req, res) =>{
    try{
        const {name} = req.body
        const {id} = req.user
        const new_workspace = await WorkspaceRepository.createWorkspace(
            {
                name,
                id
            }
        )
        
        
        res.json({
            ok: true, 
            message: 'Workspace created',
            status: 201,
            data: {
                new_workspace
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

export const inviteUserToWorkspaceController = async (req, res) =>{
    try{
        const {id} = req.user
        const {workspace_id} = req.params
        const {email} = req.body

        //si el user_invited._id no esta en el workspace_selected.members
        
        const user_invited = await UserRepository.findUserByEmail(email)
        if(!user_invited){
            throw new ServerError('User not found', 404)
        }
        const workspace_modified = await WorkspaceRepository.addMemberToWorkspace(workspace_id, user_invited._id)
        return res.json({
            ok: true,
            status: 201,
            message:'User invited successfully',
            data: {
                workspace_selected: workspace_modified
            }
        })
    }
    catch(error){
        console.error(error)
        if(error.status){
            return res.json(
                {
                    ok: false,
                    message: error.message,
                    status: error.status
                }
            )
        }
        return res.json({
            ok:false,
            message: "Internal server error",
            status: 500,
        })
    }
}

export const getWorkspacesController = async (req, res) =>{
    try{
        console.log(req.user)
        const {id} = req.user

        const workspaces = await WorkspaceRepository.getAllWorkspacesByMemberId(id)

        res.json({
            status: 200,
            ok: true,
            message: 'Workspaces',
            data: {
                workspaces
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