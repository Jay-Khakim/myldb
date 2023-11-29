import express, {response} from 'express';
const router = express.Router();
import { getFinishedBooks } from '../controllers/finishedBookController.js';

router.route('/').get(getFinishedBooks);
// router.route('/:id').delete(deleteQuote);
export default router;