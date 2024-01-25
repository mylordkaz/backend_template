/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync('Password', salt);

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('table_name').del();
  await knex('table_name').insert([
    { id: 1, username: 'admin', email: 'admin@gmal.io', password: hash },
  ]);
};
