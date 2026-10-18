import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../login.vue')
        },
        {
            path: '/home',
            component: () => import('../Hello.vue'),
            meta: { requiresAuth: true }
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const isLoggedIn = !!localStorage.getItem('token')
        if (isLoggedIn) {
            next()
        }
        else {
            next('/')
        }
    }
    else {
        next()
    }
})

export default router