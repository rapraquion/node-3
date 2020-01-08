/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('comments', {
        postId: {
            type: 'serial',
            primaryKey: true
        },
        comment: {
            type: 'text',
            notNull: true
        },
    });
};

exports.down = (pgm) => {

};
