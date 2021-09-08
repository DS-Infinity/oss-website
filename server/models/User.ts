import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    maxlength: 255,
  },
  image: {
    type: String,
    minlength: 4,
  },
  email: {
    type: String,
    minlength: 4,
    unique: true,
  },
  currentLevel: {
    type: Number,
  },
  accountCreationDate: {
    type: Date,
    default: Date.now(),
  },
  ossParticipated: {
    type: [[Number]],
    default: [],
  },
});

const User = mongoose.model('User', userSchema);

export default User;
