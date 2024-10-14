const buscarWorkspacePorId = (workspace_id) => {
    let workspaces = localStorage.getItem('workspaces')
    workspaces = JSON.parse(workspaces)
    return workspaces.find(workspace => workspace.id === workspace_id)
}



const crearCanal = (workspace_id, name_new_channel) => {
    const workspace_seleccionado = buscarWorkspacePorId(workspace_id)
    const new_channel = {
        name: name_new_channel,
        messages: [],
        id: uuidv4()
    }
    workspace_seleccionado.channel.push(new_channel)
    localStorage.setItem('workspaces', JSON.stringify(workspace_seleccionado))
}

/* 
En tu funcion handler del onSubmit podes llamar a tu funcion asi
crearCanal(1, 'pepe')
*/


// useWorkspace() 
/* 
workspace_selected [Workspace] state
createChannel(new_name_channel) Crear un nuevo canal y actualizar el estado
createMessage('message') Crear un nuevo mensaje y actualizar el estado 
*/