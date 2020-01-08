/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('userProfile', {
        id: {
            type: 'serial',
            primaryKey: true,
        },
        userId: {
            type: 'integer',
            notNull: true,
            references: 'users'
        },
        about: {
            type: 'text'
        },
        thumbnail: {
            type: 'text'
        }
    });
};

exports.down = (pgm) => {

};
