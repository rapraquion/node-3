/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('users', {
    id: {
      type: 'serial',
      primaryKey: true,
    },
    email: {
      type: 'text',
      notNull: true,
    },
    password: {
      type: 'text',
      notNull: true,
    },
    userId: {
      type: 'integer',
      references: '"userProfile"'
    }
  });
};

exports.down = (pgm) => {

};
