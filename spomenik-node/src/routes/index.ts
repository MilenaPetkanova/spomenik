import {Router} from 'express'
import {getLetters, getLetterById, createLetter, updateLetter, deleteLetter} from '../controllers/index.controller'
import {getGallery, createGalleryRecord, updateGalleryRecord, deleteGalleryRecord} from '../controllers/index.controller'
import {register, login} from '../controllers/index.controller'
import {validateUser, authenticateJWT} from '../policies/AuthenticationControllerPolicy'

const router = Router()

router.get('/letters', authenticateJWT, getLetters)
router.get('/letters/:id', authenticateJWT, getLetterById)
router.post('/letters', authenticateJWT, createLetter)
router.put('/letters/:id', authenticateJWT, updateLetter)
router.delete('/letters/:id', authenticateJWT, deleteLetter)

router.get('/gallery', authenticateJWT, getGallery)
router.post('/gallery', authenticateJWT, createGalleryRecord)
router.put('/gallery/:id', authenticateJWT, updateGalleryRecord)
router.delete('/gallery/:id', authenticateJWT, deleteGalleryRecord)

router.post('/register', validateUser, register)
router.post('/login', login)

export default router
