import { RouteRecordRaw } from 'vue-router'
import Layout from '../layout/Layout.vue'
import Home from '../pages/Home.vue'
import Todos from '../pages/Todos.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Profile from '../pages/Profile.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Login,
        name: 'Login',
    },
    {
        path: '/register',
        component: Register,
        name: 'Register',
    },
    {
        path: '/dashboard',
        component: Layout,
        name: 'Dashboard',
        children: [
            { path: '', component: Home, name: 'Home' },
            { path: 'todos', component: Todos, name: 'Todos' },
            { path: 'profile', component: Profile, name: 'Profile' },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: Profile,
    },
]

export default routes
