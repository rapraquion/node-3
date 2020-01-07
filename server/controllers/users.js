function createUser(req, res) {
    const db = req.app.get('db');

    const { email, password } = req.body;

    db.users // heres the new stuff, using massive to actually query the database.
        .save({
            email,
            password,
        })
        .then(user => res.status(201).json(user)) // returns a promise so we need to use .then
        .catch(err => {
            console.error(err); // if something happens we handle the error as well.
            res.status(500).end();
        });

    db.users
        .insert(
            {
                email,
                password,
                user_profiles: [
                    // this is what is specifying the object
                    // to insert into the related 'user_profiles' table
                    {
                        userId: undefined,
                        about: null,
                        thumbnail: null,
                    },
                ],
            },
            {
                deepInsert: true, // this option here tells massive to create the related object
            }
        )
        .then(user => res.status(201).json(user))
        .catch(err => {
            console.error(err);
        });
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
    createUser, getAllUser, getByID, getProfile
};