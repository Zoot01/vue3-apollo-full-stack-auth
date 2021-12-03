<template>
    <NavBar />
    <div>
        <Breadcrumb :home="home" :model="items" />
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import NavBar from './NavBar.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
    name: 'Layout',
    components: { NavBar },
    setup() {
        const route = useRoute()
        const home = ref({
            icon: 'pi pi-home',
            to: '/dashboard',
        })

        const items = ref()

        watch(
            route,
            (routeInfo) => {
                const currentUrl = routeInfo.path
                const itemsArray = currentUrl
                    .split('/')
                    .map((name) => {
                        return Object.assign({
                            label: `${
                                name.charAt(0).toUpperCase() + name.substring(1)
                            }`,
                            to: `/dashboard/${name}`,
                        })
                    })
                    .filter((obj) =>
                        obj.label === ''
                            ? false
                            : obj.label === 'Dashboard'
                            ? false
                            : obj
                    )
                items.value = itemsArray
            },
            { flush: 'pre', immediate: true, deep: true }
        )

        return {
            home,
            items,
        }
    },
})
</script>
