/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// this is running with { npx knex migrate:latest }
// this script is used to implement all the schemas for the schemas folder.

exports.up = function (knex) {
  return knex.schema.createTable('users', require('./schemas/users'));
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
