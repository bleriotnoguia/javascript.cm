/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
const LoginController = () => import('#controllers/auth/login_controller')
const GithubController = () => import('#controllers/auth/github_controller')
const RegisterController = () => import('#controllers/auth/register_controller')

router
  .group(() => {
    router.get('login', [LoginController, 'show']).as('login')
    router.post('login', [LoginController, 'login']).as('login.store')
    router.post('logout', [LoginController, 'logout']).as('logout')
    router.get('register', [RegisterController, 'show']).as('register')
    router.post('register', [RegisterController, 'store']).as('register.store')
  })
  .middleware(middleware.guest())

router.get('/', async ({ inertia }) => {
  return inertia.render('home', {
    stats: {
      members: 600,
      developers: 50,
      participation: 25,
      githubStars: 10,
    },
  })
})

// GitHub auth routes
router.get('auth/github', [GithubController, 'redirect']).as('auth.github')
router.get('auth/github/callback', [GithubController, 'callback']).as('auth.github.callback')
