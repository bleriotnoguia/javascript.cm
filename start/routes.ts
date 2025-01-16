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
import Article from '#models/article'
const LoginController = () => import('#controllers/auth/login_controller')
const GithubController = () => import('#controllers/auth/github_controller')
const RegisterController = () => import('#controllers/auth/register_controller')
const ArticlesController = () => import('#controllers/articles_controller')

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
  const articles = await Article.query().where('is_published', true).preload('author')

  return inertia.render('home', {
    stats: {
      members: 600,
      developers: 50,
      participation: 25,
      githubStars: 10,
    },
    articles: articles,
  })
})

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
