function newPost(req, res) {
    const db = req.app.get('db');

    const { userId, content } = req.body

    db.posts
        .save({
            userId,
            content
        })
        .then(p => res.status(201).json(post))
        .catch(e => {
            console.error(e);
            res.status(500).end();
        })
}

function getUserSinglePost(req, res) {
    const db = req.app.get('db');

    db.posts
        .findOne(p => {
            db.comments
                .findOne({ postId: req.params.id })
                .then(comment => res.status(200).json({ post, comment }))
                .catch(e => {
                    console.error(e);
                    res.status(500).end();
                })
        })
        .catch(e => {
            console.error(e);
            res.status(500).end();
        })

}

function getAllPosts(req, res) {
    const db = req.app.get('db');

    db.posts
        .find(p => {
            db.comments
                .find({ postId: req.params.id })
                .then(comment => res.status(200).json({ post, comment }))
                .catch(e => {
                    console.error(e);
                    res.status(500).end();
                })
        })
        .catch(e => {
            console.error(e);
            res.status(500).end();
        })
}

function updatePost(req, res) {
    const db = req.app.get('db');

    const { content } = req.body

    db.posts
        .update({
            id: req.params.id
        }, {
            content: content
        })
        .then(p => res.status(201).send(post))
        .catch(e => {
            console.error(e);
            res.status(500).end();
        })
}

module.exports = { newPost, getUserSinglePost, getAllPosts, updatePost }