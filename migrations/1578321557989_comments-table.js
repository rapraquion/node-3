/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('users', {
        userId: {
            type: 'serial',
            primaryKey: true,
        },
        postId: {
            type: 'serial',
        },
        comment: {
            type: 'text',
            notNull: true,
        },
    });
};

exports.down = (pgm) => {

};
