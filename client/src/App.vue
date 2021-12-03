<template>
    <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from './store'

export default defineComponent({
    name: 'App',
    components: {},
    setup() {
        const store = useStore()
        store.dispatch('root/lookForAccessToken')
    },
})
</script>

<style lang="scss" scoped></style>
