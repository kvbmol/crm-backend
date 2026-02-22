const Customer = require('../models/customer');

exports.getCustomers = async (req, res) => {
  const customers = await Customer.find().populate('userId', 'username');
  res.json(customers);
};

exports.createCustomer = async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.status(201).json(customer);
};

exports.updateCustomer = async (req, res) => {
  const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(customer);
};

// Add getCustomerById, deleteCustomer similarly
