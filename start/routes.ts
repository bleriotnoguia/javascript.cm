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
const ArticlesController = () => import('#controllers/articles_controller')
const ProfileController = () => import('#controllers/profile_controller')
const HomeController = () => import('#controllers/home_controller')

router
  .group(() => {
    router.get('login', [LoginController, 'show']).as('login')
    router.post('login', [LoginController, 'login']).as('login.store')
    router.post('logout', [LoginController, 'logout']).as('logout')
    router.get('register', [RegisterController, 'show']).as('register')
    router.post('register', [RegisterController, 'store']).as('register.store')
  })
  .middleware(middleware.guest())

router.get('/', [HomeController, 'index'])

// GitHub auth routes
router.get('auth/github', [GithubController, 'redirect']).as('auth.github')
router.get('auth/github/callback', [GithubController, 'callback']).as('auth.github.callback')

// Article routes
router.get('articles', [ArticlesController, 'index']).as('articles.index')
router
  .get('articles/create', [ArticlesController, 'create'])
  .as('articles.create')
  .middleware(middleware.auth())
router
  .post('articles', [ArticlesController, 'store'])
  .as('articles.store')
  .middleware(middleware.auth())
router.get('articles/:slug', [ArticlesController, 'show']).as('articles.show')

// Profile routes
router.get('/:username', [ProfileController, 'show']).where('username', '@.*').as('profile.show')

// Dashboard routes
router
  .group(() => {
    router
      .get('dashboard', async ({ inertia }) => {
        return inertia.render('dashboard/index', {
          stats: {
            articles: 0,
            discussions: 0,
            questions: 0,
          },
        })
      })
      .as('dashboard')
  })
  .middleware(middleware.auth())
