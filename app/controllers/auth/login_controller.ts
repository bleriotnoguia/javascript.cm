import { loginValidator } from '#validators/login_validator'
import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { errors } from '@adonisjs/auth'

export default class LoginController {
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/login')
  }

  async login({ request, auth, response, session }: HttpContext) {
    try {
      // Validate the request data
      const data = await loginValidator.validate(request.all())

      // Attempt to verify credentials
      const user = await User.verifyCredentials(data.email, data.password)

      // Login the user
      await auth.use('web').login(user, data.remember)

      return response.redirect().toRoute('dashboard')
    } catch (error) {
      if (error instanceof errors.E_INVALID_CREDENTIALS) {
        session.flash('errors', { form: 'Invalid credentials' })
        return response.redirect().back()
      }

      // Handle other errors
      session.flash('errors', { form: 'An error occurred during login' })
      return response.redirect().back()
    }
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect().toRoute('login')
  }
}
