import User from '../models/user.model.js';
import extend from 'lodash/extend.js';
import errorHandler from '../helpers/dbErrorHandler.js';

const create = async (req, res, next) => {
    const user = new User(req.body)
    try {
        await user.save();
        return res.status(200).json({
            message: "Successfully signed up!"
        });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};

const list = async (req, res) => {
    try {
        let users = await User.find().select('name email updated created');
        res.json(users)
    } catch (err) {
        return res.status(400).getErrorMessage(err);
    }
};

const userByID = async (req, res, next, reqId) => {
    const id = reqId.replace('s:', '');
    try {
        let user = await User.findById(id);
        console.log(user);
        if (! user) {
            return res.status('400').json({
                error: 'User not found'
            });
        }
        req.profile = user;
        next();
    } catch (err) {
        return res.status(400).json({
            error: 'Could not retrieve user'
        });
    }
};

const read = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
};

const update = async (req, res, next) => {
    try {
        let user = req.profile;
        user = extend(user, req.body);
        user.update = Date.now();
        await user.save();
        user.hashed_password = undefined;
        user.salt = undefined;
        res.json(user);
    } catch (err) {
        res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};

const remove = async (req, res, next) => {
    try {
        let user = req.profile
        let deleteUser = await user.remove();
        deleteUser.hashed_password = undefined;
        deleteUser.salt = undefined;
        res.json(deleteUser);
    } catch (err) {
        res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};

export default {create, userByID, read, list, remove, update};
