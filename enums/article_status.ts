export enum ArticleStatus {
  DRAFT = 'draft',
  WAITING_APPROVAL = 'waiting_approval',
  PUBLISHED = 'published',
}

export const ARTICLE_STATUS_LIST: ArticleStatus[] = Object.values(ArticleStatus)
