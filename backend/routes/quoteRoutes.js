import express, {response} from 'express';
const router = express.Router();
import { getQuotes, addQuote, deleteQuote } from '../controllers/quotesController.js';


router.route('/').get(getQuotes).post(addQuote);
router.route('/:id').delete(deleteQuote);

export default router;