const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const secret = require('../../secret');
const verify = require('./verify');


function createUser(req, res) {
    const db = req.app.get('db');

    const { email, password } = req.body;

    argon2
        .hash(password)
        .then(hash => {
            return db.users.insert({
                email,
                password: hash,
                user_profiles: [
                    {
                        userId: undefined,
                        about: null,
                        thumbnail: null
                    }
                ]
            },{
                fields: ['id', 'email'],
                deepInsert: true
            });
        })
        .then(user => {
            const token = jwt.sign({ userId: user.id }, secret);
            res.status(201).json({ ...user, token });
        })
        .catch(e => {
            console.error(e);
            res.status(500).end();
        })
}

function login(req, res) {
    const db = req.app.get('db');
    const { email, password } = req.body;

    db.users
        .findOne({
            email,
        },{
            fields: ['id', 'email', 'password']
        })
        .then(user => {
            if(!user) {
                throw new Error('Invalid Email');
            }

            return argon2.verify(user.password, password)
            .then(valid => {
                if (!valid) {
                    throw new Error('Incorrect Password');
                }

                const token = jwt.sign({ userId: user.id }, secret);
                delete user.password;
                res.status(200).json({ ...user, token });
            })
        })
        .catch(e => {
            if (['Invalid Emil', 'Invalid Passwrd'].includes(err.message)){
            res.status(400).json({ error: 'err.message' });
            }
            else {
                console.error(e);
                res.status(500).end();
            }
        })
}

function getAllUser(req, res) {
    const db = req.app.get('db');

    db.users
        .find()
        .then(users => res.status(200).json(users))
        .catch(err => {
            console.error(err);
            res.status(500).end();
        });
}

function getByID(req, res) {
    const db = req.app.get('db');

    db.users
        .findOne(req.params.id)
        .then(user => res.status(200).json(user))
        .catch(err => {
            console.error(err);
            res.status(500).end();
        });
}

function getProfile(req, res) {
    const db = req.app.get('db');

    db.users_profiles
        .findOne({
            userId: req.params.email,
        })
        .then(userProfile => res.status(200).json(userProfile))
        .catch(e => {
            console.error(e);
            res.status(500).end();
        })
}

module.exports = {
    createUser, getAllUser, getByID, getProfile, login
};