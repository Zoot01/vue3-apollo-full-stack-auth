<template>
    <Menubar :model="navBarItems">
        <template #end>
            <div class="flex">
                <Avatar
                    label="JO"
                    size="large"
                    class="ml-5"
                    @click="toggle"
                    aria-haspopup="true"
                    aria-controls="overlay_menu"
                    color="pink"
                />
                <Menu
                    id="overlay_menu"
                    ref="menu"
                    :model="items"
                    :popup="true"
                />
            </div>
        </template>
    </Menubar>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'NavBar',
    components: {},
    setup() {
        const menu = ref()
        const navBarItems = ref([
            {
                label: 'Home',
                icon: 'pi pi-fw pi-home',
                to: '/dashboard',
            },
            {
                label: 'Todos',
                icon: 'pi pi-fw pi-list',
                to: '/dashboard/todos',
            },
            {
                label: 'Profile',
                icon: 'pi pi-fw pi-user',
                to: '/dashboard/profile',
                disabled: true,
            },
        ])

        const items = ref([
            {
                label: 'Home',
                icon: 'pi pi-home',
                to: '/dashboard',
            },
            {
                label: 'User',
                items: [
                    {
                        label: 'Settings',
                        icon: 'pi pi-fw pi-cog',
                        disabled: true,
                    },
                    {
                        label: 'Profile',
                        icon: 'pi pi-fw pi-user',
                        disabled: true,
                    },
                ],
            },
            {
                label: 'Todos',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        disabled: true,
                    },
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        disabled: true,
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-trash',
                        separator: true,
                        disabled: true,
                    },
                ],
            },
            {
                label: 'Logout',
                icon: 'pi pi-fw pi-power-off',
            },
        ])

        const toggle = (event: any) => {
            menu.value.toggle(event)
        }
        return {
            items,
            navBarItems,
            menu,
            toggle,
        }
    },
})
</script>

<style lang="scss" scoped></style>
