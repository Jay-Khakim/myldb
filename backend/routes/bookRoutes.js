import express, {response} from 'express';
const router = express.Router();
import {protect} from "../middleware/authMiddleware.js"
import { getBooks, getBookById, addBook, deleteBook } from '../controllers/bookController.js';
import checkObjectId from '../middleware/checkObjectId.js';



router.route('/').get(getBooks).post(addBook);
router.route('/:id').get(getBookById).delete(deleteBook);

export default router;