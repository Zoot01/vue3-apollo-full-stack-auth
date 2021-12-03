import { Module } from 'vuex'
import { MutationTree } from 'vuex'
import { GetterTree } from 'vuex'
import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { RootStoreInterface, userInterface } from './Root.interfaces'
import { provideApolloClient } from '@vue/apollo-composable'
import { apolloClient } from '../../apollo'
import { useMutation, useQuery } from '@vue/apollo-composable'
import jwt_decode from 'jwt-decode'
import { loginUser } from '../../graphql/mutations/loginUser.mutation'
import { isAuth } from '../../graphql/mutations/isAuth.mutation'
import router from '../../router'

provideApolloClient(apolloClient)

//. state
const state = (): RootStoreInterface => {
    return {
        user: null,
        isLoggedIn: false,
        accessToken: null,
    }
}

// . actions
const actions: ActionTree<RootStoreInterface, StateInterface> = {
    loginUser({ commit }, payload) {
        const {
            mutate: loginUserMutation,
            onError,
            onDone,
        } = useMutation(loginUser, () => ({
            variables: { ...payload },
        }))
        loginUserMutation()
        onError((err) => {
            console.error('💣 There was an error 💣', err)
            commit('SET_LOGIN_USER', null)
            commit('SET_LOGIN_STATUS', false)
            commit('SET_ACCESS_TOKEN', null)
        })
        onDone((res) => {
            try {
                console.log(res)
                const data = jwt_decode(res.data.loginUser.accessToken)
                commit('SET_LOGIN_USER', data)
                commit('SET_LOGIN_STATUS', true)
                commit('SET_ACCESS_TOKEN', res.data.loginUser.accessToken)

                if (localStorage.getItem('accessToken')) {
                    localStorage.removeItem('accessToken')
                }
                localStorage.setItem(
                    'accessToken',
                    res.data.loginUser.accessToken
                )
                router.push('/dashboard')
            } catch (error) {
                console.log(error)
                commit('SET_LOGIN_USER', null)
                commit('SET_LOGIN_STATUS', false)
                commit('SET_ACCESS_TOKEN', null)
            }
        })
    },

    lookForAccessToken({ commit }) {
        // if there is a accessToken we need to authIt
        if (localStorage.getItem('accessToken')) {
            const {
                mutate: isAuthMutaution,
                onError,
                onDone,
            } = useMutation(isAuth, { fetchPolicy: 'no-cache' })
            isAuthMutaution()
            onError((err) => {
                console.error('💣 There was an error 💣', err)
                commit('SET_LOGIN_USER', null)
                commit('SET_LOGIN_STATUS', false)
                commit('SET_ACCESS_TOKEN', null)
                router.push('/')
                localStorage.removeItem('accessToken')
            })
            onDone((res) => {
                try {
                    const accessToken = JSON.stringify(
                        localStorage.getItem('accessToken')
                    )
                    const data = jwt_decode(accessToken)
                    commit('SET_LOGIN_USER', data)
                    commit('SET_LOGIN_STATUS', true)
                    commit('SET_ACCESS_TOKEN', accessToken)

                    router.push('/dashboard')
                } catch (error) {
                    console.log(error)
                    commit('SET_LOGIN_USER', null)
                    commit('SET_LOGIN_STATUS', false)
                    commit('SET_ACCESS_TOKEN', null)
                }
            })
        }
        // no accessToken send to login
        else {
            //TODO
            commit('SET_LOGIN_USER', null)
            commit('SET_LOGIN_STATUS', false)
            commit('SET_ACCESS_TOKEN', null)
            router.push('/')
        }
    },
    logoutUser({ commit }) {
        if (localStorage.getItem('accessToken')) {
            localStorage.removeItem('accessToken')
            commit('SET_LOGIN_USER', null)
            commit('SET_LOGIN_STATUS', false)
            commit('SET_ACCESS_TOKEN', null)
            router.push('/')
        }
    },
}

//. mutations
const mutation: MutationTree<RootStoreInterface> = {
    SET_LOGIN_USER(state, payload: userInterface) {
        state.user = payload
    },
    SET_LOGIN_STATUS(state, payload: boolean) {
        state.isLoggedIn = payload
    },
    SET_ACCESS_TOKEN(state, payload: string) {
        state.accessToken = payload
    },
}

//. getters
const getters: GetterTree<RootStoreInterface, StateInterface> = {
    someAction(/* context */) {
        // your code
    },
}

const RootModule: Module<RootStoreInterface, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations: mutation,
    state,
}

export default RootModule
