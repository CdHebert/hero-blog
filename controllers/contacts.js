
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote } = require('../models');
const withAuth = require('../utils/auth');

router.get('/contacts', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/contacts');
      return;
    }
  
    res.render('contacts');
  });


  module.exports = router;
