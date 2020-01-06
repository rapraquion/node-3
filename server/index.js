const express = require('express');
const massive = require('massive');

const users = require('./controllers/users');

massive({
    host: 'localhost',
    port: 5432,
    database: 'node',
    user: 'postgres',
    password: 'node3db'
}).then(db => {
    const app = express();

    app.set('db', db);

    app.use(express.json());

    // Step 2 & Step 3.1
    app.post('/api/users', users.createUser);

    // Step 3.2
    app.get('/api/users', users.getAllUser);

    // Step 3.3
    app.get('/api/users/:id', users.getByID);

    // Step 3.4
    app.get('/api/users/:id/profile', users.getProfile);

    // Step 4.1
    app.post('/api/posts', users.newPost);

    // Step 4.2
    app.get('/api/users/:id/post/:postId', users.getUserSinglePost);

    // Step 4.3
    app.get('/api/posts', users.getAllPosts);

    // Step 5.1
    app.post('/api/comments', users.newComment);

    // Step 5.2
    app.patch('/api/comments/:id', users.editComment);

    const port = 3000;

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
})
