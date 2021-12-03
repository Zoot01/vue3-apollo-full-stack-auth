import { InjectionKey } from 'vue'
import { createStore, Store as VuexStore, useStore as vuexUseStore } from 'vuex'

//. state interfaces and module imports
import { RootStoreInterface } from './modules/Root.interfaces'
//. store states
import Root from './modules/Root.store'

export interface StateInterface {
    root: RootStoreInterface
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: VuexStore<StateInterface>
    }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> =
    Symbol('vuex-key')

export default createStore<StateInterface>({
    modules: {
        root: Root,
    },
})

export function useStore() {
    return vuexUseStore(storeKey)
}
