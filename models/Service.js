const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

module.exports = mongoose.model('Service', ServiceSchema);
