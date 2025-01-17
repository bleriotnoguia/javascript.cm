import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { registerValidator } from '#validators/register_validator'

export default class RegisterController {
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }

  async store({ request, auth, response }: HttpContext) {
    const data = await registerValidator.validate(request.all())

    const user = await User.create(data)
    await auth.use('web').login(user)

    return response.redirect().toRoute('dashboard')
  }
}
