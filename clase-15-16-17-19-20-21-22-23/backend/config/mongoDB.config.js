import mongoose from "mongoose";


mongoose.connect('mongodb://localhost:27017/TM_PWA_LUN_MIE_DIC')
.then(() =>{
    console.log('Conexion con mongoDB exitosa!')
})
.catch((error)=>{
    console.error('MONGODB CONNECTION ERROR:', error)
})

/* export const connectToMongoDB = async ()=>{
    try{
        return await mongoose.connect('mongodb://localhost:27017/TM_PWA_LUN_MIE_DIC')
    }
    catch(error){
        console.error('MONGODB CONNECTION ERROR:', error)
    }
} */

export default mongoose

/* 
async / await
.then : onResolved / .catch : onRejected
*/