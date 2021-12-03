import { createRouter, createWebHistory, Router } from 'vue-router'
import routes from './routes'
import store from '../store'

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})

// export const authUser = router.beforeEach((to, from, next) => {
//     if (to.name && !store.state.root.isLoggedIn === true) {
//         next()
//     } else next({ name: 'Login' })
// })

// router.beforeEach((to, from, next) => {
//     if (to.name !== 'Login' && !store.state.root.isLoggedIn === true) {
//         next({ name: 'Login' })
//     } else next()
// })

export default router
