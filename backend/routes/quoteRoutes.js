import express, {response} from 'express';
const router = express.Router();
import { getQuotes } from '../controllers/quotesController.js';


router.route('/').get(getQuotes);
// router.route('/:id').get(getBookById);

export default router;