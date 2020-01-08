/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('userProfile', {
        userId: {
            type: 'serial',
            primaryKey: true
        },
        about: {
            type: 'text'
        },
        thumbnail: {
            type: 'text'
        },
        user_id: {
            type: 'integer',
            references: '"posts"'
        }
    });
};

exports.down = (pgm) => {

};
