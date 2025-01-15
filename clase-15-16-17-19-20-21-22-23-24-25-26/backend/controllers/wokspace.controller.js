import e from "cors"
import User from "../models/User.model.js"
import Workspace from "../models/Workspace.model.js"
import WorkspaceRepository from "../repository/workspaces.repository.js"

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

        const workspace_selected = await WorkspaceRepository.findWorkspaceById(workspace_id)
        if(!workspace_selected){
            return res.json({
                ok: false,
                message: 'Workspace not found',
                status: 404
            })
        }
        //Solo el dueño del workspace puede invitar a otros
        if(!workspace_selected.owner.equals(id)){
            return res.json({
                ok: false,
                message: 'Forbidden',
                status: 403
            })
        }
        const user_invited = await User.findOne({email})
        if(!user_invited){
            return res.json({
                status: 404,
                message: 'User not found',
                ok: false
            })
        }
        //si el user_invited._id no esta en el workspace_selected.members
        try{
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
            return res.json({
                ok: true,
                status: error.status,
                message: error.message
            })
        }
        
        
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

export const getWorkspacesController = async (req, res) =>{
    try{
        const {id} = req.user

        const workspaces = await Workspace.find({members: id})
        .populate('members', 'username email')
        .populate('owner', 'username')

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