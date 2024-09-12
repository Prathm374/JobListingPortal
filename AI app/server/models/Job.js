const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a job title'],
    trim: true,
    maxlength: [50, 'Job title cannot be more than 50 characters'],
  },
  company: {
    type: String,
    required: [true, 'Please add a company name'],
  },
  location: {
    type: String,
    required: [true, 'Please add a job location'],
  },
  description: {
    type: String,
    required: [true, 'Please add a job description'],
  },
  requirements: [String],
  salary: String,
  jobType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
    required: true,
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Job', jobSchema);