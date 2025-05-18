import { ArticleStatus } from '#enums/article_status'
import Article from '#models/article'

export default class ArticleStatsService {
  static async getStats() {
    const publishedResult = await Article.query()
      .where('status', ArticleStatus.PUBLISHED)
      .count('* as total')
    const draftResult = await Article.query()
      .where('status', ArticleStatus.DRAFT)
      .count('* as total')
    const waitingResult = await Article.query()
      .where('status', ArticleStatus.WAITING_APPROVAL)
      .count('* as total')
    return {
      published: Number(publishedResult[0].$extras.total),
      drafts: Number(draftResult[0].$extras.total),
      waiting: Number(waitingResult[0].$extras.total),
    }
  }
}
