import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import Article from '#models/article'

export default class ProfileController {
  async show({ params, inertia }: HttpContext) {
    const user = await User.findByOrFail('username', params.username.replace('@', ''))
    const articles = await Article.query()
      .where('author_id', user.id)
      .where('is_published', true)
      .orderBy('created_at', 'desc')
      .preload('author')

    return inertia.render('profile/show', {
      profile: {
        ...user.serialize(),
        articles: articles,
      },
    })
  }
}
