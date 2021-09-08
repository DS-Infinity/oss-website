import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 255,
  },
  description: {
    type: String,
  },
  youtubeLink: {
    type: String,
    maxlength: 255,
  },
  githubLink: {
    type: String,
    maxlength: 255,
  },
  websiteLink: {
    type: String,
    maxlength: 255,
  },
  ossNumber: {
    type: Number,
  },
  email: {
    type: String,
    maxlength: 255,
  },
  createdBy: {
    type: String,
    maxlength: 255,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
