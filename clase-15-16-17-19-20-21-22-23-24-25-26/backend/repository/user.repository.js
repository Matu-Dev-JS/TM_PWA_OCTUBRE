import User from "../models/User.model.js";

class UserRepository{
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