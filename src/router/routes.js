import Montfort from 'src/pages/Montfort.vue'
import Database from 'pages/Database.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/Montfort',
    component: () => Montfort
  },
  {
    path: '/Database',
    component: () => Database
  }
]

export default routes
