import express from 'express'
import { ClerkWebHook, userCredit } from '../controllers/userController.js'
const UserRouter = express.Router()
UserRouter.post('/webhooks', ClerkWebHook)
UserRouter.post('/credit',userCredit)
export default UserRouter