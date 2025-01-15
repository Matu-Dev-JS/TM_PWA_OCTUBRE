import User from "../models/User.model.js";

class UserRepository{
    async findUserByEmail (email){
        return await User.findOne({email: email})
    }
}

export default new UserRepository()