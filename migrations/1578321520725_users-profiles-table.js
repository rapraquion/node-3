/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('users', {
        userId: {
            type: 'serial',
            primaryKey: true,
        },
        about: {
            type: 'text',
            notNull: true
        },
        thumbnail: {
            type: 'text',
            notNull: true
        }
    });
};

exports.down = (pgm) => {

};
