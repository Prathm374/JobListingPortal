const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.ObjectId,
    ref: 'Job',
    required: true
  },
  applicant: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Reviewed', 'Interviewed', 'Offered', 'Rejected'],
    default: 'Pending'
  },
  coverLetter: {
    type: String,
    required: [true, 'Please add a cover letter']
  },
  resume: {
    type: String,
    required: [true, 'Please add a resume']
  },
  appliedAt: {
    type: Date,
    default: Date.now
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  },
  notes: {
    type: String
  }
});

module.exports = mongoose.model('Application', ApplicationSchema);