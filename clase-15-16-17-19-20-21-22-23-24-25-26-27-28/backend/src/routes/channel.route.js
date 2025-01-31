import express from 'express'
import {authMiddleware} from '../middlewares/auth.middleware.js'
import { createChannelController, getChannelsListController, getMessagesFromChannelController, sendMessageController } from '../controllers/channel.controller.js'
import isWorkspaceMemberMiddleware from '../middlewares/isWorkspaceMember.middleware.js'

const channelRouter = express.Router()

channelRouter.use(authMiddleware)

channelRouter.post('/:workspace_id',isWorkspaceMemberMiddleware, createChannelController)
channelRouter.get('/:workspace_id',isWorkspaceMemberMiddleware, getChannelsListController)
channelRouter.post('/:workspace_id/:channel_id/send-message', isWorkspaceMemberMiddleware, sendMessageController)
channelRouter.get('/:workspace_id/:channel_id', isWorkspaceMemberMiddleware, getMessagesFromChannelController )
export default channelRouter