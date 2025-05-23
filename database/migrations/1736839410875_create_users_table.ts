import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('username').unique().notNullable()
      table.string('name').nullable()
      table.string('email').unique().notNullable()
      table.string('password').notNullable()
      table.string('avatar').nullable()
      table.string('github_id').unique().nullable()
      table.string('twitter_id').unique().nullable()
      table.boolean('is_admin').defaultTo(false)
      table.boolean('is_sponsor').defaultTo(false)
      table.timestamp('email_verified_at').nullable()
      table.timestamps(true, true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
