import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex'



export interface StateInterface {
  example: unknown
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> = Symbol('vuex-key')

export default store(() => {
  const Store = createStore<StateInterface>({
    modules: {
    },
    strict: !!process.env.DEBUGGING
  })

  return Store;
})

export function useStore () {
  return vuexUseStore(storeKey)
}