import { Router } from 'express';
import User from '../models/User';

const authRouter = Router();

authRouter.post('/create', async (req, res) => {
  const user = req.body;
  if (user) {
    const userFromDB = await User.findOne({
      email: user.email,
    }).catch(() => console.log('==> User not found.'));
    console.log(user, userFromDB);
    if (userFromDB) {
      console.log('==> User already in DB, so new instance is not created.');
      res.json({
        message: 'User is already in DB, so new instance is not created.',
      });
      return;
    }
    const newUser = await new User({
      username: user.name,
      image: user.image,
      email: user.email,
      accountCreationDate: new Date().getTime(),
    }).save();
    res.json({ action: 'Create user', newUser });
    return;
  }
  res.json({ action: 'Create user', message: 'User signed out.' });
});

export default authRouter;
