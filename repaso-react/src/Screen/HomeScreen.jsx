import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
    //Los estados nos permiten recargar componentes
    //Cuando un estado cambia, el componente debe recargarse

    //Esto viene de la API
    //let nombreUsuario = 'pepe'
    //Crear un estado
    const [nombreUsuario, setNombreUsuario] = useState('pepe')

    /* 
    Cada vez que el usuario cambia algo en input deberia cambiar tambien el valor de mi estado
    */

    const handleChangeInputName = (evento) => {
        setNombreUsuario(evento.target.value)
    }

    const workspaces = [
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
    /* 
    Si el usuario escribe en el input workspace_name un valor igual al nombre de alguno de los workspaces existente, debemos mostrar un error en un span que diga, 'nombre en uso'
    */

    const [workspace_name, set_workspace_name] = useState('')
    const [errorWorkspaceRepeated, setErrorWorkspaceRepeated] = useState(false)
    const handleChangeWorkspaceName = (evento) => {
        set_workspace_name(evento.target.value)
    }

    const isInUseWorkspaceName = (workspace_name, workspaces) => {
        return workspaces.some(workspace => workspace.name === workspace_name)
    }


    //Los efectos recargan funcionalidades
    useEffect(
        () => {
            //Esta es la accion que se recargara
            setErrorWorkspaceRepeated(isInUseWorkspaceName(workspace_name, workspaces))
        },
        [workspace_name]
    )
    return (
        <>
            <h1>Afip</h1>
            <h2>Bienvenido {nombreUsuario}</h2>
            <form >
                <label htmlFor="nombre">Ingrese su nombre de usuario</label>
                <input id='nombre' name='nombre' value={nombreUsuario} onChange={handleChangeInputName} />
            </form>

            <form>
                <h2>Crear espacio de trabajo</h2>
                <div>
                    <label htmlFor="workspace_name">Ingrese el nombre del espacio</label>
                    <input
                        placeholder='EJ: workspace 1'
                        id='workspace_name'
                        name='workspace_name'
                        value={workspace_name}
                        onChange={handleChangeWorkspaceName}
                    />
                    {
                        errorWorkspaceRepeated
                            ? <span style={{ color: 'red' }}>Nombre en uso</span>
                            : (
                                workspace_name.length > 0
                                    ? <span style={{ color: 'green' }}>Nombre disponible</span>
                                    : null
                            )
                    }
                    <button type='submit' disabled={errorWorkspaceRepeated || workspace_name.length === 0}>Crear espacio</button>
                    {/* {
            !errorWorkspaceRepeated && workspace_name.length > 0 &&<button type='submit' >Crear espacio</button>
          } */}

                </div>

                <div>
                    {workspaces.map(workspace => {
                        return (
                            <Link key={workspace.id} to={`/workspace/${workspace.id}/0`}>
                                <h2>{workspace.name}</h2>
                            </Link>
                        )
                    })}
                </div>
            </form>
        </>
    )
}

export default HomeScreen