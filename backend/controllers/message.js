const jwt = require('jsonwebtoken');
const conn = require('../MySql');

exports.createMessage = (req, res, next) => {
    const message = req.body.message;
    conn.query('INSERT INTO messages SET ?', message, function(err, results, fields) {
        if(err) {
            return res.status(400).json({ err });
        }
        return res.status(201).json({ message: 'Réponse publiée !'});
    })
};

exports.deleteMessage = (req, res, next) => {
    conn.query('SELECT * FROM messages WHERE id = ?', req.params.id, function(err, results, fields) {
        if(err) {
            return res.status(400).json({ err });
        }
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
        const idUser = decodedToken.idUser;
        const idMessage = results[0].userId;
        if(idMessage !== idUser) {
            return res.status(401).json({ message: 'Requête non autorisée !'})
        }
        conn.query(`DELETE FROM messages WHERE id = ${req.params.id}`, req.params.id, function(err, results, fields) {
            if(err) {
                return res.status(400).json({ err })
            }
            return res.status(200).json({ message: 'Réponse supprimée !'})
        })
    })
};