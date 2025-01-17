import { loginValidator } from '#validators/login_validator'
import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { errors } from '@adonisjs/auth'
export default class LoginController {
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/login')
  }

  async login({ request, auth, response, session }: HttpContext) {
    const data = await loginValidator.validate(request.all())
    const user = await User.verifyCredentials(data.email, data.password)

    try {
      await auth.use('web').login(user)
      return response.redirect().toRoute('dashboard')
    } catch (error) {
      if (error instanceof errors.E_INVALID_CREDENTIALS) {
        session.flash('errors', { form: 'Invalid credentials' })
        return response.redirect().back()
      }
      throw error
    }
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect().toRoute('login')
  }
}
