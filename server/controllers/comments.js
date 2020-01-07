const verify = require('./verify');

function newComment(req, res) {
    const auth = verify.verify(req, res);
    if (auth) {
        const db = req.app.get('db');
        const { userId, postId, comment } = req.body;

        db.comments
        .save({
            userId,
            postId,
            comment
        })
        .then(com => res.status(201).json(com))
        .catch(e => {
            console.error(e);
            res.status(500).end();
        })
    }    
}

function editComment(req, res) {
    const auth = verify.verifyUser(req, res);
    if (auth) {
        const db = req.app.get('db');
        const { id } = req.params;
        const { comment } = req.body;
    
        db.comments
            .save({ 
                id, comment
            })
            .then(p => res.status(201).send(comment))
            .catch(e => {
                console.error(e);
                res.status(500).end();
            });
    }
    else res.status(401).end();
}

module.exports = { newComment, editComment }