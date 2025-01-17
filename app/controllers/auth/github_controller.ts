import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import type { GithubDriver } from '@adonisjs/ally/drivers/github'

export default class GithubController {
  async redirect({ ally }: HttpContext) {
    return (ally.use('github') as GithubDriver).redirect()
  }

  async callback({ ally, auth, response }: HttpContext) {
    const github = ally.use('github') as GithubDriver

    /**
     * User has explicitly cancelled the login flow
     */
    if (github.accessDenied()) {
      return response.redirect().toRoute('login')
    }

    /**
     * OAuth state verification failed. This happens when the
     * CSRF cookie gets expired or request is forged
     */
    if (github.stateMisMatch()) {
      return response.redirect().toRoute('login')
    }

    /**
     * GitHub responded with some error
     */
    if (github.hasError()) {
      return response.redirect().toRoute('login')
    }

    /**
     * Get user details from GitHub
     */
    const githubUser = await github.user()

    /**
     * Find or create user by GitHub ID
     */
    const user = await User.firstOrCreate(
      {
        githubId: githubUser.id,
      },
      {
        username: githubUser.nickName,
        name: githubUser.name,
        email: githubUser.email!,
        avatar: githubUser.avatarUrl,
        githubId: githubUser.id,
      }
    )

    /**
     * Login user using the web guard
     */
    await auth.use('web').login(user)
    return response.redirect().toRoute('dashboard')
  }
}
