/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('posts', {
        user_id: {
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
