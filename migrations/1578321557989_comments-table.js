/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('comments', {
        commentId: {
            type: 'serial',
            primaryKey: true
        },
        comment: {
            type: 'text',
            notNull: true
        },
        userId: {
            type: 'integer',
            references: '"users"'
        },
        postId: {
            type: 'integer',
            references: '"posts"'
        }
    });
};

exports.down = (pgm) => {

};
