import pool from "../config/mysql.config.js"
import Message from "../models/Message.model.js"

class MessageRepository{
    async createMessage ({sender_user_id, channel_id, content}){
        const query = `INSERT INTO messages (sender,channel,content ) VALUE (?, ?, ?)`
        const [result] = await pool.execute(query, [sender_user_id, channel_id, content])
        return {
            _id: result.insertId,
            content,
            channel: channel_id
        }
    }

    async getAllMessagesFromChannel (channel_id){
        const query = `
            SELECT 
                messages._id,
                messages.content,
                messages.createdAt,
                USERS.username AS sender_username
            FROM messages
            JOIN USERS ON messages.sender = USERS._id
            WHERE messages.channel = ?
            ORDER BY messages.createdAt ASC
        `
        const [messages] = await pool.execute(query, [channel_id])
        const messagesAdapted = messages.map(message=> {
            return {
                _id: message._id,
                content: message.content,
                createdAt: message.createdAt,
                sender: {
                    username: message.sender_username
                }
            }
        })
        return messagesAdapted
    }
}


export default new MessageRepository()