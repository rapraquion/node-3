/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('posts', {
        userId: {
            type: 'serial',
            primaryKey: true,
        },
        postId: {
            type: 'serial',
        },
        content: {
            type: 'text',
            notNull: true
        }
    });
};

exports.down = (pgm) => {

};
