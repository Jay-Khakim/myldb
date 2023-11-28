import express, {response} from 'express';
const router = express.Router();
import { getAuthors } from '../controllers/authorController.js';


router.route('/').get(getAuthors);
// router.route('/:id').get(getBookById);

export default router;