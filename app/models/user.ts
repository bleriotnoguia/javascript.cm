import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column, hasMany } from '@adonisjs/lucid/orm'
import { compose } from '@adonisjs/core/helpers'
import hash from '@adonisjs/core/services/hash'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Article from '#models/article'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare username: string

  @column()
  declare name: string | null

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare avatar: string | null

  @column()
  declare githubId: string | null

  @column()
  declare twitterId: string | null

  @column()
  declare isAdmin: boolean

  @column()
  declare isSponsor: boolean

  @column.dateTime()
  declare emailVerifiedAt: DateTime | null

  @column()
  declare rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Article)
  declare articles: HasMany<typeof Article>

  @beforeSave()
  static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await hash.make(user.password)
    }
  }

  /**
   * Serialize the model for Inertia
   */
  serialize() {
    return {
      id: this.id,
      username: this.username,
      name: this.name,
      email: this.email,
      avatar: this.avatar,
      isAdmin: this.isAdmin,
      isSponsor: this.isSponsor,
    }
  }
}
