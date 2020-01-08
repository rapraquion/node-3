/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('posts', {
        postId: {
            type: 'serial',
            primaryKey: true
        },
        content: {
            type: 'text'
        },
        userId: {
            type: 'integer',
            references: '"users"'
        }
    });
};

exports.down = (pgm) => {

};
