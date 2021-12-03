<template>
    <div>
        <PageHeader title="Profile" :show-button="false" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '../components/PageHeader.vue'

export default defineComponent({
    name: 'Profile',
    components: { PageHeader },
    setup() {},
})
</script>

<style lang="scss" scoped></style>
