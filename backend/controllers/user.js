const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const con = require('../MySql');

exports.signup = (req, res, next) => {
    const user = req.body//{
                /*username: req.body.username,
                email: req.body.email,
                password: hash,
                bio: req.body.bio,
            };*/
    bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash
            con.query('INSERT INTO users SET?', user, function (err, result, field) {
                if(err) {
                    return res.status(400).json({ err });
                } return res.status(201).json({ message: 'Utilisateur créé !'});
            })

        })
        .catch(err => res.status(500).json({ err }))
};


exports.login = (req, res, next) => {
    const userMail = req.body.email
    const userPass = req.body.password
    if (userMail && userPass) {
      con.query(
        'SELECT * FROM groupomania.users WHERE email=?',
        userMail,
        function (err, result, field) {
          if (result.length > 0) {
            bcrypt.compare(userPass, result[0].password).then((valid) => {
              if (!valid) {
                res.status(401).json({ message: 'Utilisateur ou mot de passe inconnu' })
              } else {
                res.status(200).json({
                  userId: result[0].idUSERS,
                  username: result[0].username,
                  email: result[0].email,
                  accessToken: jwt.sign(
                    { userId: result[0].idUSERS },
                    'RANDOM_TOKEN_SECRET',
                    { expiresIn: '24h' }
                  )
                })
              }
            })
          } else {
            res.status(401).json({ message: 'Utilisateur ou mot de passe inconnu' })
          }
        }
      )
    } else {
      res.status(500).json({ message: 'Entrez un nom d\'utilisateur et un mot de passe' })
    }
  }

exports.deleteUser = (req, res, next) => {
    con.query(`DELETE FROM users WHERE id = ${req.params.id}`, req.params.id, function (err, result, field) {
        if (err) {
            return res.status(400).json({ error });
        }
        return res.status(200).json({ message: 'Utilisateur supprimé !' });
    })
};

