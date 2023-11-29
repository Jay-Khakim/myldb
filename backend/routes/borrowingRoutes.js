import express, {response} from 'express';
const router = express.Router();
import { getBorrowings } from '../controllers/borrowingsController.js';

router.route('/').get(getBorrowings);
// router.route('/:id').delete(deleteQuote);
export default router;