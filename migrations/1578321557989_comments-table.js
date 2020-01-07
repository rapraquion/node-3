/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('comments', {
        userId: {
            type: 'serial',
            primaryKey: true,
        },
        comment: {
            type: 'text',
            notNull: true,
        },
    });
};

exports.down = (pgm) => {

};
