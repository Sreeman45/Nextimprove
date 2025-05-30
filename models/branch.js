import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  branch_code: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  }
}, { timestamps: true });

const branchSchema = mongoose.model('Branch', Schema);
export default branchSchema;