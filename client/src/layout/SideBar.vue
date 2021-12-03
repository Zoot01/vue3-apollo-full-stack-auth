<template>
    <Sidebar
        v-model:visible="sideBarVisible"
        position="left"
        class="p-sidebar-md"
    >
        Hello World
    </Sidebar>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'SideBar',
    components: {},
    setup() {
        const sideBarVisible = ref(true)
        return {
            sideBarVisible,
        }
    },
})
</script>

<style lang="scss" scoped></style>
