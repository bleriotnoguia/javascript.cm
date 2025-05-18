import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import string from '@adonisjs/core/helpers/string'
import User from '#models/user'
import { ArticleStatus } from '#enums/article_status'

export default class Article extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare slug: string

  @column()
  declare content: string

  @column()
  declare excerpt: string

  @column()
  declare status: ArticleStatus

  @column()
  declare authorId: number

  @belongsTo(() => User, { foreignKey: 'authorId' })
  declare author: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime()
  declare publishedAt: DateTime | null

  @column()
  declare coverImage: string | null

  @column()
  declare canonicalUrl: string | null

  @column()
  declare tags: string[] | null

  // Generate slug before saving
  public async generateSlug() {
    this.slug = string.slug(this.title)
  }
}
