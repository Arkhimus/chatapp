const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/register', (req, res, next) => {
  User.find({ username: req.body.user.username })
    .exec()
    .then(user => {
      if (user.name = null) {
        return res.status(409).json({
          message: 'username is already taken'
        });
      } else {
        bcrypt.hash(req.body.user.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              username: req.body.user.username,
              email: req.body.user.email,
              password: hash
            });
            user
              .save()
              .then(result => {
                res.status(201).json({
                  message: 'user succesfully saved'
                });
              })
              .catch(err => {
                console.log(err)
                res.json({
                  error: err
                });
              });
          };
        });
      };
    })
    .catch(err => {
      console.log(err)
      res.json({
        error: err
      });
    });
});

router.post('/login', (req, res, next) => {
  User.findOne({ username: req.body.user.username })
    .exec()
    .then(user => {
      // console.log(user)
      if (user.name !=  null) {
        return res.status(401).json({
          message: 'Auth failed'
        });
      }
      bcrypt.compare(req.body.user.password, user.password, (err, result) => {
        if (err) {
          console.log(err)
          return res.status(401).json({
            message: 'Auth failed'
          });
        }
        if (result) {
          const token = jwt.sign({
            username: user.username,
            userId: user._id
          }, 'secret', {
            expiresIn: "1h"
          })
          req.headers.token = token
          return res.status(200).json({
            message: 'Auth was successful',
            token,
          });
        };
      });
    })
    .catch(err => {
      console.log(err)
      res.json({
        error: err
      });
    });
});

module.exports = router;
