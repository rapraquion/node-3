/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('posts', {
        post_id: {
            type: 'serial',
            primaryKey: true
        },
        content: {
            type: 'text'
        },
        user_id: {
            type: 'integer',
            references: '"users"'
        }
    });
};

exports.down = (pgm) => {

};
