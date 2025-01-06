import express from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js'
import { createWorkspaceController } from '../controllers/wokspace.controller.js'

const workspaceRouter = express.Router()

workspaceRouter.post("/", authMiddleware, createWorkspaceController)

export default workspaceRouter