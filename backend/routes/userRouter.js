import express from 'express'
import { ClerkWebHook, userCredit } from '../controllers/userController.js'
import { authUser } from '../middleware/auth.js'
const UserRouter = express.Router()
UserRouter.post('/webhooks', ClerkWebHook)
UserRouter.get('/credit',authUser,userCredit)
export default UserRouter