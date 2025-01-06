import mongoose from "mongoose";

const workspaceSchema =  new mongoose.Schema({
    name: {type: String, required: true},
    owner: { //El owner es el creador del workspace osea que conceptualmente es un USUARIO
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    members: [//Array de usuarios
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    createdAt: { 
        type: Date, 
        default: Date.now
    },
    modifiedAt:{
        type: Date
    }
})

const Workspace = mongoose.model('Workspace', workspaceSchema)

export default Workspace