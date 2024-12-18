import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/views/login/LoginView.vue'
import { BaseLayout, ExamLayout } from '@layouts'

const AuthLevels = {
  USER: 1,
  ADMIN: 10,
  DEV: 99
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      component: BaseLayout, // 네비게이션이 포함된 레이아웃
      meta: { requiresAuth: AuthLevels.ADMIN }, // 로그인 필요
      children: [
        {
          path: 'exams',
          redirect: '/exams',
          component: ExamLayout,
          children: [
            {
              path: '',
              component: () => import('@/modules/exam/views/ExamListView.vue'),
              name: 'ExamList',
              meta: { parent: 'ExamList' },
              props: (route) => ({ filters: route.query })
            },
            {
              path: ':id',
              component: () => import('@/modules/exam/views/ExamDetailView.vue'),
              name: 'ExamDetail',
              meta: { parent: 'ExamList' }
            },
            {
              path: 'mass-registration',
              component: () => import('@/modules/exam/views/ExamMassRegistrationView.vue'),
              name: 'ExamMassRegistration',
              meta: { parent: 'ExamMassRegistration' }
            }
          ]
        },
        {
          path: 'settings',
          redirect: '/settings',
          children: [
            {
              path: '',
              component: () => import('@/modules/student/views/StudentDetailView.vue'),
              name: 'Settings'
            }
          ]
        },
        {
          path: 'students',
          redirect: 'students',
          children: [
            {
              path: '',
              name: 'Students',
              component: () => import('@/modules/student/views/StudentListView.vue')
            }
          ]
        }
      ]
    }
  ]
})

function toNumber(value) {
  return parseInt(value, 10) || 0
}

router.beforeEach((to, from, next) => {
  const loggedIn = !!localStorage.getItem('ssm_rt') // 로그인 상태 확인 (예: localStorage)
  const authLevel = loggedIn ? 20 : 0
  console.log('authLevel', authLevel, 'loggedIn', loggedIn)
  if (to.matched.some((record) => authLevel < toNumber(record.meta.requiresAuth))) {
    next('/login') // 로그인 필요시 로그인 페이지로 리다이렉트
  } else {
    next()
  }
})
export default router
