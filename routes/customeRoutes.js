import express from 'express';
const router = express.Router();
const {
  createCustomer,
  getCustomer,
  updateCustomer,
  deleteCustomer
} = require('../controllers/customerController');

router.post('/', createCustomer);
router.get('/:id', getCustomer);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

module.exports = router;