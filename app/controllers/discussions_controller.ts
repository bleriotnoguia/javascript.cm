import BannedUser from '#models/banned_user'
import Discussion from '#models/discussion'
import Message from '#models/message'
import type { HttpContext } from '@adonisjs/core/http'

export default class DiscussionsController {
  async index({ inertia, auth }: HttpContext) {
    await auth.check()
    // Liste des discussions publiques
    const discussions = await Discussion.query()
      .preload('author')
      .where('is_public', true)
      .orderBy('created_at', 'desc')
    return inertia.render('discussions/index', { discussions })
  }

  async show({ inertia, params, auth }: HttpContext) {
    await auth.check()
    // Accès à une discussion (vérifier ban)
    const discussion = await Discussion.query()
      .where('id', params.id)
      .preload('author')
      .firstOrFail()
    // Vérifier si banni
    if (auth.user) {
      const ban = await BannedUser.query()
        .where('user_id', auth.user.id)
        .where('discussion_id', discussion.id)
        .first()
      if (ban) {
        return inertia.render('errors/banned', { reason: ban.reason })
      }
    }
    // Charger les messages (pagination à ajouter plus tard)
    const messages = await Message.query()
      .where('discussion_id', discussion.id)
      .orderBy('created_at', 'asc')
      .preload('sender')
    return inertia.render('discussions/show', { discussion, messages })
  }

  async create({ inertia, auth }: HttpContext) {
    await auth.check()
    return inertia.render('discussions/create')
  }

  async store({ request, auth, response }: HttpContext) {
    await auth.check()
    const { title, banner } = request.only(['title', 'banner'])
    const discussion = await Discussion.create({
      title,
      banner,
      authorId: auth.user!.id,
      isPublic: true,
    })
    return response.redirect().toRoute('discussions.show', { id: discussion.id })
  }

  async destroy({ params, auth, response }: HttpContext) {
    // Suppression par admin
    // (Vérifier le rôle admin dans la logique réelle)
    const discussion = await Discussion.findOrFail(params.id)
    await discussion.delete()
    return response.redirect().toRoute('discussions.index')
  }

  async ban({ params, request, auth, response }: HttpContext) {
    if (auth.user?.role !== 'ADMIN') {
      return response.unauthorized('Réservé admin')
    }
    const { userId, reason } = request.only(['userId', 'reason'])
    const discussionId = params.id
    // Vérifier si déjà banni
    const existing = await BannedUser.query()
      .where('user_id', userId)
      .where('discussion_id', discussionId)
      .first()
    if (existing) {
      return response.badRequest('Déjà banni')
    }
    await BannedUser.create({
      userId,
      discussionId,
      adminId: auth.user.id,
      reason: reason || null,
    })
    return response.ok({ success: true })
  }
}
