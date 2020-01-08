/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('userProfile', {
        profile_id: {
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
            references: '"users"'
        }
    });
};

exports.down = (pgm) => {

};
