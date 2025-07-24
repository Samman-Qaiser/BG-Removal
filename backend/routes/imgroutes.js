import express from 'express'
import { ClerkWebHook, userCredit } from '../controllers/userController.js'
import { authUser } from '../middleware/auth.js'
import upload from '../middleware/multer.js'
import { removeImg } from '../controllers/imageController.js'
const imageRouter = express.Router()
imageRouter.post('/remove-bg',upload.single('image'),authUser,removeImg)
export default imageRouter