import {Router} from 'express'
import {getLetters, getLetterById, createLetter, updateLetter, deleteLetter} from '../controllers/index.controller'
import {getGallery, createGalleryRecord, updateGalleryRecord, deleteGalleryRecord} from '../controllers/index.controller'

const router = Router()

router.get('/letters', getLetters)
router.get('/letters/:id', getLetterById)
router.post('/letters', createLetter)
router.put('/letters/:id', updateLetter)
router.delete('/letters/:id', deleteLetter)

router.get('/gallery', getGallery)
router.post('/gallery', createGalleryRecord)
router.put('/gallery/:id', updateGalleryRecord)
router.delete('/gallery/:id', deleteGalleryRecord)

export default router