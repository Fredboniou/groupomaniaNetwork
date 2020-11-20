const jwt = require('jsonwebtoken');
const conn = require('../MySql');

exports.createPost = (req, res, next) => {
    const post = {
        title: req.body.title,
        content: req.body.content
    }
    conn.query('INSERT INTO posts SET ?', post, function(err, result, fields) {
        if(err) {
            return res.status(400).json({ err })
        }
        return res.status(201).json({ message: 'Publication créée !'})
    })
};

exports.modifyPost = (req, res, next) => {
    conn.query('SELECT * FROM posts WHERE id = ?', req.params.id, function(err, result, fields) {
        if(err) {
            return res.status(400).json({ err })
        }
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
        const idUser = decodedToken.idUser;
        const idPost = results[0].userId;
        if(idPost !== idUser) {
            return res.status(401).json({ message: 'Accès refusé !'});
        }
        const updatePost = post;
        conn.query('UPDATE FROM posts SET ? WHERE postId = ?', [updatePost, req.params.id], function(err, result, fields) {
            if(err) {
                return res.status(400).json({ err })
            }
            return res.status(200).json({ message: 'Modification effectuée !'})
        })
    })
};

exports.deletePost = (req, res, next) => {
    conn.query('SELECT * FROM posts WHERE id = ?', req.params.id, function(err, result, fields) {
        if(err) {
            return res.status(400).json({ err })
        }
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
        const idUser = decodedToken.idUser;
        const idPost = results[0].userId;
        if(idPost !== idUser) {
            return res.status(401).json({ message: 'Accès refusé !'});
        }
        conn.query(`DELETE FROM posts SET ? WHERE postId = ${req.params.id}`, req.params.id, function(err, result, fields) {
            if(err) {
                return res.status(400).json({ err })
            }
            return res.status(200).json({ message: 'Post supprimé !'})
        })
    })
};

exports.getAllPosts = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    conn.query('SELECT posts.*, DATE_FORMAT(created_at, "%d/%m/%Y %H:%i:%s") AS created_at FROM posts ORDER BY created_at DESC', [userId], function(err, result, fields) {
        if(err) {
            return res.status(400).json({ err })
        }
        return res.status(200).json({ message: 'Affichage de tous les posts !'})
    }) 
};

