import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useWorkspace } from '../hooks/useWorkspace'

const WorkspaceScreen = () => {
    const { workspace_id, channel_id } = useParams()
    const navigate = useNavigate()

    /* useEffect( () => {
        if(!channel_id){
            navigate(`/workspace/${workspace_id}/${0}`)
        }
    }, []) */

    const {
        workspace_seleccionado, 
        openNewChannelForm, 
        toggleNewChannelForm, 
        channel_seleccionado,
        crearChannel,
        crearMessage
    } =useWorkspace(workspace_id, channel_id)
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