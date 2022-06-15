import express from 'express';
import userCtrl from '../controllers/user.controller.js';
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();
router.route('/api/users')
    .get(userCtrl.list)
    .post(userCtrl.create);

router.route('/api/user:userId')
    .get(authCtrl.requireSignIn, userCtrl.read)
    .put(authCtrl.requireSignIn, userCtrl.update)
    .delete(authCtrl.requireSignIn, userCtrl.remove)

router.param('userId', userCtrl.userByID)

export default router;