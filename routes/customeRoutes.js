import express from 'express';
const router = express.Router();
import {
  createCustomer,
  getCustomer,
  updateCustomer,
  deleteCustomer
} from '../controllers/customerController.js';

router.post('/', createCustomer);
router.get('/:id', getCustomer);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

export default router;