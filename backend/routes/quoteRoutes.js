import express, {response} from 'express';
const router = express.Router();
import { getQuotes, addQuote } from '../controllers/quotesController.js';


router.route('/').get(getQuotes).post(addQuote);
// router.route('/:id').get(getBookById);

export default router;