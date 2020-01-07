/* eslint-disable camelcase */

exports.constraint = 'unique_email';

exports.up = (pgm) => {
    pgm.addConstraint('user', exports.constraint, {
        unique: 'email'
    });
};

exports.down = (pgm) => {

};
