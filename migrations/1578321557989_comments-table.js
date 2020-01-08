/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('comments', {
        comment_id: {
            type: 'serial',
            primaryKey: true
        },
        comment: {
            type: 'text',
            notNull: true
        },
        user_id: {
            type: 'integer',
            references: '"users"'
        },
        post_id: {
            type: 'integer',
            references: '"posts"'
        }
    });
};

exports.down = (pgm) => {

};
