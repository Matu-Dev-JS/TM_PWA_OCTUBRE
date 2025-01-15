import pool from "../config/mysql.config.js";
import User from "../models/User.model.js";

class UserRepository{
    /* 
    MONGO_DB
    async createUser ({username, email, password, verificationToken}){
        const nuevo_usuario = new User({
            username,
            email, 
            password,
            verificationToken,
            modifiedAt: null
        })
        return await nuevo_usuario.save()
    } 
    */
    //MYSQL
    async createUser({username, email, password, verificationToken}){
        const queryStr =  `
        INSERT INTO USERS (username, email, password, verificationToken)
        VALUES (?, ?, ?, ?)
        `
        const [result] = await pool.execute(
            queryStr,
            [username, email, password, verificationToken]
        )
        return {
            _id: result.insertId,
            username, 
            email
        }
    }
    async findUserByEmail (email){
        return await User.findOne({email: email})
    }
    async findById(id){
        return await User.findById(id)
    }
    async verifyUser( user_id ){
        const user = await this.findById(user_id)
        user.verified = true
        user.save()
    }
}

export default new UserRepository()