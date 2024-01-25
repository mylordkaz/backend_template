// create a schema for users table implementation.

const userSchema = (table) => {
  table.increments('id').primary().uniaue();
  table.string('username').notNullable();
  table.string('email').unique().notNullable();
  table.string('password').notNullable();
};

module.exports = userSchema;
