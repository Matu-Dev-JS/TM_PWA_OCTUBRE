import express from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js'
import { createWorkspaceController, getWorkspacesController, inviteUserToWorkspaceController } from '../controllers/wokspace.controller.js'

const workspaceRouter = express.Router()

workspaceRouter.post("/", authMiddleware, createWorkspaceController)
workspaceRouter.post('/:workspace_id/invite', authMiddleware, inviteUserToWorkspaceController)
workspaceRouter.get('/', authMiddleware, getWorkspacesController)

export default workspaceRouter