const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: false  // ← Changed to false
  }
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);
