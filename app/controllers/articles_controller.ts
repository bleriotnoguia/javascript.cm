import { ArticleStatus } from '#enums/article_status'
import Article from '#models/article'
import ArticleStatsService from '#services/article_stats_service'
import { articleValidator } from '#validators/article_validator'
import { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon'

export default class ArticlesController {
  async index({ inertia, request }: HttpContext) {
    const page = request.input('page', 1)
    const articles = await Article.query()
      .preload('author')
      .where('status', ArticleStatus.PUBLISHED)
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

    const payload: Partial<Article> = { ...data, authorId: auth.user!.id }

    if (data.status === ArticleStatus.PUBLISHED) {
      payload.publishedAt = DateTime.now()
    }

    payload.slug = Article.generateSlug(data.title)

    console.log('payload', payload)

    const article = await Article.create(payload)

    console.log('article', article)

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
      waitingArticles: stats.waiting,
      discussions: 0,
      questions: 0,
    })
  }
}
