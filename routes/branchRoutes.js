import express from 'express';
const router = express.Router();
import {
  createBranch,
  getBranches,
  updateBranch
} from '../controllers/branchcontroller'

router.post('/', createBranch);
router.get('/', getBranches);
router.put('/:id', updateBranch);

export default router;