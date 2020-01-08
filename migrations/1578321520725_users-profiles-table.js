/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('userProfile', {
        profileId: {
            type: 'serial',
            primaryKey: true
        },
        about: {
            type: 'text'
        },
        thumbnail: {
            type: 'text'
        },
        userId: {
            type: 'integer',
            references: '"users"'
        }
    });
};

exports.down = (pgm) => {

};
