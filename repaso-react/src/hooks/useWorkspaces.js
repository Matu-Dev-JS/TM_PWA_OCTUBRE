import { useEffect, useState } from "react"
import {v4 as uuidv4} from 'uuid'

export const useWorkspaces =() =>{
    const workspaces_intial_data = [
        {
            name: 'Workspace UTN',
            id: 0
        },
        {
            name: 'Clases de Next.js',
            id: 1
        },
        {
            name: 'Clases de piano',
            id: 2
        },
        {
            name: 'Juegos',
            id: 3
        }
    ]
    const storaged_workspaces = JSON.parse(localStorage.getItem('workspaces'))
    const workspace_initial_state = storaged_workspaces || workspaces_intial_data
    const [workspaces, setWorkspaces] = useState(workspace_initial_state)
    const [workspace_name, set_workspace_name] = useState('')
    const [errorWorkspaceRepeated, setErrorWorkspaceRepeated] = useState(false)

    const handleChangeWorkspaceName = (evento) => {
        set_workspace_name(evento.target.value)
    }

    const isInUseWorkspaceName = (workspace_name, workspaces) => {
        return workspaces.some(workspace => workspace.name === workspace_name)
    }

    const createWorkspace = (workspace_name) => {
        const new_workspace = {
            name: workspace_name,
            channel: [
                {
                    name: 'General',
                    id: uuidv4(),
                    messages: [],
                }
            ],
            id: uuidv4()
        }
        setWorkspaces((prevWorkspaces) => [...prevWorkspaces, new_workspace])
    }

    const handleSubmitWorkspace = (evento) => {
        evento.preventDefault()
        createWorkspace(workspace_name)
    }

    //Los efectos recargan funcionalidades
    useEffect(
        () => {
            //Esta es la accion que se recargara
            setErrorWorkspaceRepeated(isInUseWorkspaceName(workspace_name, workspaces))
        },
        [workspace_name]
    )

    useEffect(() => {

        localStorage.setItem('workspaces', JSON.stringify(workspaces))
    }, [workspaces])
    return {
        workspaces,
        workspace_name,
        errorWorkspaceRepeated,
        handleChangeWorkspaceName,
        handleSubmitWorkspace
    }
}