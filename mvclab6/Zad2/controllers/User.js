const User = require('../models/User');

const getUsersList = (req, res) => {
    const users = User.getAll();
    res.render('users', { title: 'User List', users: users });
};
const getSetUserSession = (req, res) => {
    const users = User.getAll();
    res.render('set-user-session', { title: 'Set User Session', users: users });
};
const setUserSession = (req, res) => {
    req.session.userId = req.body.userId;
    res.redirect("/");
};
module.exports = {
    getUsersList,
    getSetUserSession,
    setUserSession
};
