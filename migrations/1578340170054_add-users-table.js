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
    user_info_id: {
      type: 'integer',
      references: 'user_profile'
    }
  });
};

exports.down = (pgm) => {

};
