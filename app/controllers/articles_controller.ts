import { HttpContext } from '@adonisjs/core/http'
import { articleValidator } from '#validators/article_validator'
import Article from '#models/article'
import { DateTime } from 'luxon'
import ArticleStatsService from '#services/article_stats_service'

export default class ArticlesController {
  async index({ inertia, request }: HttpContext) {
    const page = request.input('page', 1)
    const articles = await Article.query()
      .preload('author')
      .where('is_published', true)
      .orderBy('published_at', 'desc')
      .paginate(page, 10)

    return inertia.render('articles/index', {
      articles: articles.toJSON(),
    })
  }

  async create({ inertia }: HttpContext) {
    return inertia.render('articles/create')
  }

  async store({ request, auth, response }: HttpContext) {
    const data = await articleValidator.validate(request.all())
    const article = new Article()

    article.title = data.title
    article.content = data.content
    article.excerpt = data.excerpt
    article.isPublished = data.isPublished || false
    article.authorId = auth.user!.id
    if (data.isPublished) {
      article.publishedAt = DateTime.now()
    }

    await article.generateSlug()
    await article.save()

    return response.redirect().toRoute('articles.show', { slug: article.slug })
  }

  async show({ inertia, params }: HttpContext) {
    const article = await Article.query().where('slug', params.slug).preload('author').firstOrFail()

    return inertia.render('articles/[slug]', { article })
  }

  async dashboard({ inertia }: HttpContext) {
    const stats = await ArticleStatsService.getStats()
    return inertia.render('dashboard/index', {
      publishedArticles: stats.published,
      draftArticles: stats.drafts,
      discussions: 0,
      questions: 0,
    })
  }
}
