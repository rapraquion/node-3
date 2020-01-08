function newComment(req, res) {
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

function editComment(req, res) {
    const db = req.app.get('db');
    const { postId } = req.params;
    const { comment } = req.body;

    db.comments
        .save({
            postId, comment
        })
        .then(p => res.status(201).send({ p, comment }))
        .catch(e => {
            console.error(e);
            res.status(500).end();
        });
}

module.exports = { newComment, editComment }