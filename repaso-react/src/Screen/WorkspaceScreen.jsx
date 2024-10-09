import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const WorkspaceScreen = () => {
    const { workspace_id, channel_id } = useParams()
    const navigate = useNavigate()

    /* useEffect( () => {
        if(!channel_id){
            navigate(`/workspace/${workspace_id}/${0}`)
        }
    }, []) */

    const workspaces = [
        {
            name: 'Workspace UTN',
            channel: [
                {
                    name: 'General',
                    id: 0,
                    messages: [
                        {
                            text: 'Hola a todos',
                            id: 0,
                            user: 'pepe',
                            date: '2022-01-01'
                        },
                        {
                            text: 'Que tal?',
                            id: 1,
                            user: 'juan',
                            date: '2022-01-01'
                        },
                        {
                            text: 'No se que es slack',
                            id: 2,
                            user: 'fiora',
                            date: '2022-01-02'
                        }
                    ]
                },
                {
                    name: 'Consultas',
                    id: 1,
                    messages: [
                        {
                            text: 'isNaN es una funcion rara o normal?',
                            id: 0,
                            user: 'pepe',
                            date: '2022-01-05'
                        },
                        {
                            text: 'No se ni que es isNaN, solo se css',
                            id: 1,
                            user: 'pedrito',
                            date: '2022-01-06'
                        },
                        {
                            text: 'isNaN es una funcion para saber si un valor es NaN, no se igual que es NaN',
                            id: 2,
                            user: 'fiora',
                            date: '2022-01-08'
                        }
                    ]
                }
            ],
            id: 0
        },
        {
            name: 'Clases de Next.js',
            id: 1,
            channel: [
                {
                    name: 'Novedades',
                    id: 0,
                    messages: [
                        {
                            text: 'Hola a todos',
                            id: 0,
                            user: 'pepe',
                            date: '2022-01-01'
                        },
                        {
                            text: 'Que tal?',
                            id: 1,
                            user: 'juan',
                            date: '2022-01-01'
                        },
                        {
                            text: 'No se que es slack',
                            id: 2,
                            user: 'fiora',
                            date: '2022-01-02'
                        }
                    ]
                },
                {
                    name: 'Tareas',
                    id: 1,
                    messages: [
                        {
                            text: 'Hola a todos',
                            id: 0,
                            user: 'pepe',
                            date: '2022-01-01'
                        },
                        {
                            text: 'Que tal?',
                            id: 1,
                            user: 'juan',
                            date: '2022-01-01'
                        },
                        {
                            text: 'No se que es slack',
                            id: 2,
                            user: 'fiora',
                            date: '2022-01-02'
                        }
                    ]
                }
            ],
        },
        {
            name: 'Clases de piano',
            id: 2,
            channel: [
                {
                    name: 'General',
                    id: 0,
                    messages: [
                        {
                            text: 'Hola a todos',
                            id: 0,
                            user: 'pepe',
                            date: '2022-01-01'
                        },
                        {
                            text: 'Que tal?',
                            id: 1,
                            user: 'juan',
                            date: '2022-01-01'
                        },
                        {
                            text: 'No se que es slack',
                            id: 2,
                            user: 'fiora',
                            date: '2022-01-02'
                        }
                    ]
                }
            ],
        },
        {
            name: 'Juegos',
            id: 3,
            channel: [
                {
                    name: 'General',
                    id: 0,
                    messages: [
                        {
                            text: 'Hola a todos',
                            id: 0,
                            user: 'pepe',
                            date: '2022-01-01'
                        },
                        {
                            text: 'Que tal?',
                            id: 1,
                            user: 'juan',
                            date: '2022-01-01'
                        },
                        {
                            text: 'No se que es slack',
                            id: 2,
                            user: 'fiora',
                            date: '2022-01-02'
                        }
                    ]
                }
            ],
        }
    ]
    const workspace_seleccionado = workspaces.find(workspace => workspace.id === Number(workspace_id))

    const channel_seleccionado = workspace_seleccionado.channel.find(canal => canal.id === Number(channel_id))
    const [openNewChannelForm, setOpenNewChannelForm] = useState(false)
    const toggleNewChannelForm = ( ) => {
        setOpenNewChannelForm(!openNewChannelForm)
    }
    return (
        <div>
            <h1>{workspace_seleccionado.name}</h1>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {workspace_seleccionado.channel.map(channel => {
                    return (
                        <Link key={channel.id} to={`/workspace/${workspace_id}/${channel.id}`}>{channel.name}</Link>
                    )
                })}
            </div>
            {
                openNewChannelForm
                    ? (
                        <form>
                            <div>
                                <label htmlFor='new_channel_name'>Nombre nuevo canal:</label>
                                <input name='new_channel_name' id='new_channel_name' />
                            </div>
                            <button type='submit'>Confirmar</button>
                            <button onClick={toggleNewChannelForm} type='button'>Cancelar</button>
                        </form>
                    )
                    : <button onClick={toggleNewChannelForm}>Crear canal</button>
            }

            <div>
                {
                    channel_seleccionado ?
                        channel_seleccionado.messages.map(mensaje => {
                            return (
                                <div key={mensaje.id}>
                                    <b>Fecha: {mensaje.date}</b>
                                    <p><b>{mensaje.user} dijo:</b> {mensaje.text}</p>
                                    <hr />
                                </div>
                            )
                        })
                        : <h2>No has seleccionado ningun canal</h2>
                }
            </div>
        </div>
    )
}

export default WorkspaceScreen