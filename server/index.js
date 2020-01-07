const express = require('express');
const massive = require('massive');

const users = require('./controllers/users');
const posts = require('./controllers/posts');
const comments = require('./controllers/comments');

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
    app.post('/api/posts', posts.newPost);

    // Step 4.2
    app.get('/api/users/:id/post/:postId', posts.getUserSinglePost);

    // Step 4.3
    app.get('/api/posts', posts.getAllPosts);

    // Step 4.4
    app.patch('./api/posts', posts.updatePost);

    // Step 5.1
    app.post('/api/comments', comments.newComment);

    // Step 5.2
    app.patch('/api/comments/:id', comments.editComment);

    // Login
    app.post('/api/login', users.login);

    const port = 3000;

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
})
