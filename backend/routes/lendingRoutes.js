import express, {response} from 'express';
const router = express.Router();
import { getLendings } from '../controllers/lendingsController.js';

router.route('/').get(getLendings);
// router.route('/:id').delete(deleteQuote);
export default router;