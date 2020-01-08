/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('posts', {
        user_id: {
            type: 'serial',
            primaryKey: true
        },
        content: {
            type: 'text'
        },
        postId: {
            type: 'integer',
            references: '"comments"'
        }
    });
};

exports.down = (pgm) => {

};
