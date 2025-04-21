import { HttpContext } from '@adonisjs/core/http'
import Article from '#models/article'

export default class HomeController {
  async index({ inertia }: HttpContext) {
    const articles = await Article.query().where('is_published', true).preload('author')

    return inertia.render('home', {
      stats: {
        members: 600,
        developers: 50,
        participation: 25,
        githubStars: 10,
      },
      articles: articles,
    })
  }
}
