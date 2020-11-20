const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const con = require('../MySql');

/*exports.signup = (req, res, next) => {
    //const user = req.body
    // email = user.email
    // let emailhash = sha1(email)
    // user.email = emailhash
     bcrypt.hash(req.body.password, 10) 
    .then((hash) => {
        const user = new User ({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            bio: req.body.bio,
            isAdmin: req.body.isAdmin,
        })
        //user.password = hash
        con.query(`INSERT INTO user SET ?`, user, (err, result, field) => {
            if (err) {
                console.log(err)
                return res.status(400).json("erreur")
            }
            return res.status(201).json({message : 'Votre compte a bien été crée !'},)
        });
    });
}; */ 

exports.signup = (req, res, next) => {
    console.log('hello2')
    //return res.status(200).json({ message: 'ca marche'})
    const user = req.body//{
                /*username: req.body.username,
                email: req.body.email,
                password: hash,
                bio: req.body.bio,
                isAdmin: req.body.isAdmin
            };*/
    //bcrypt.hash(req.body.password, 10)
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


/*exports.signup = (req, res, next) => {
    const user = req.body
    bcrypt.hash(user.password, 10).then((hash) => {
      user.password = hash
      conn.query('INSERT INTO users SET ?', user, function (
        error,
        results,
        fields
      ) {
        if (error) {
          // Si erreur de la requête
          console.log(error) // La console du serveur affiche l'erreur
          return res.status(400).json(error.sqlMessage)
        } // Et retourne uniquement le message de l'erreur au front
        return res.status(201).json({
          message:
            'Votre compte a bien été créé ! Vous pouvez maintenant vous connecter.'
        })
      })
    })
    .catch(error => res.status(500).json({error}));
  }*/

exports.login = (req, res, next) => {
    const userMail = req.body.email;
    const userPass = req.body.password;
    if(userMail && userPass) {
        con.query('SELECT * FROM database_development.users WHERE email = ?', userMail, function (err, result, fields) {
            if(userMail != null && userPass != null) {
                bcrypt.compare(req.body.password, user.password)
                    .then(valid => {
                        if(!valid){
                         return res.status(401).json({err: "Identifiant ou mot de passe incorrect !"});
                         } 
                        res.status(200).json({
                            userId: user._id,
                            token: jwt.sign(
                                {userId: user._id},
                                'RANDOM_TOKEN_SECRET',
                                {expiresIn: "24h"}
                            )
                        })
                    })
                    .catch(error => res.status(500).json({error}));
            }
        })
    }
};

exports.deleteUser = (req, res, next) => {
    con.query(`DELETE FROM users WHERE id = ${req.params.id}`, req.params.id, function (err, result, fields) {
        if (err) {
            return res.status(400).json({ error });
        }
        return res.status(200).json({ message: 'Utilisateur supprimé' });
    })
};

exports.test = (req, res) => {
    console.log('test3')
    return res.status(200).send({ message: 'ok'})
};
