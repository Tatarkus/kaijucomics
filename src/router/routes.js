
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'chapters/', component: () => import('pages/Chapters.vue'),
        name: 'chapters',
        props:true,
        children: [
          { 
            name:'chapter',
            path:':chapterNumber', component: () => import('pages/Viewer.vue') }
        ] },
    ]
  },
  {
    path: '/comic1',
    component: () => import('layouts/ViewerLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Comics.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
