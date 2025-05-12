import Article from '#models/article'

export default class ArticleStatsService {
  static async getStats() {
    const publishedResult = await Article.query().where('is_published', true).count('* as total')
    const draftResult = await Article.query().where('is_published', false).count('* as total')
    return {
      published: Number(publishedResult[0].$extras.total),
      drafts: Number(draftResult[0].$extras.total),
    }
  }
}
