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

    app.post('/api/users', users.create);
    app.get('/api/users', users.list);
    app.get('/api/users/:id', users.getById);
    app.get('/api/users/:id/profile', users.getProfile);

    const port = 3000;

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
})
