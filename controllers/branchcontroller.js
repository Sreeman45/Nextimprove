import  Branch from '../models/branch'
 import Customer from '../models/customer'

const createBranch = async (req, res) => {
  try {
    const customer = await Customer.findById(req.body.customer_id);
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    const branch = await Branch.create({
      branch_code: req.body.branch_code,
      location: req.body.location,
      customer_id: req.body.customer_id
    });
    res.status(201).json(branch);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBranches = async (req, res) => {
  try {
    const branches = await Branch.find({ customer_id: req.query.customerId });
    res.json(branches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!branch) return res.status(404).json({ error: 'Branch not found' });
    res.json(branch);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export {
  createBranch,
  getBranches,
  updateBranch
};