const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [50, 'Title can not be more than 50 characters']
  },
  company: {
    type: String,
    required: [true, 'Please add a company name'],
    trim: true,
    maxlength: [50, 'Company name can not be more than 50 characters']
  },
  location: {
    type: String,
    required: [true, 'Please add a location'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description can not be more than 500 characters']
  },
  requirements: {
    type: [String],
    required: [true, 'Please add at least one requirement']
  },
  salary: {
    type: String,
    required: [true, 'Please add a salary range']
  },
  jobType: {
    type: String,
    required: [true, 'Please add a job type'],
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship']
  },
  experienceLevel: {
    type: String,
    required: [true, 'Please add an experience level'],
    enum: ['Entry-level', 'Mid-level', 'Senior', 'Executive']
  },
  applicationDeadline: {
    type: Date,
    required: [true, 'Please add an application deadline']
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Job', JobSchema);