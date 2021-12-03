import { Module } from 'vuex'
import { MutationTree } from 'vuex'
import { GetterTree } from 'vuex'
import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { RootStoreInterface } from './Root.interfaces'

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
    loginUser({ commit }) {
        console.log('loginUser store action')
    },
}

//. mutations
const mutation: MutationTree<RootStoreInterface> = {
    SET_LOGIN_USER(state, payload: string) {
        state.user = payload
    },
}

//. getters
const getters: GetterTree<RootStoreInterface, StateInterface> = {
    someAction(/* context */) {
        // your code
    },
}

const ConfigModule: Module<RootStoreInterface, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations: mutation,
    state,
}

export default ConfigModule
