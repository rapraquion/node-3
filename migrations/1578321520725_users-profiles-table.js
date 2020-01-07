/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('user_profile', {
        user_info_id: {
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
