<template>
    <div>
        <PageHeader title="Todos" :show-button="true" />
        <div v-if="result">
            {{ result.hello }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import { useQuery, useResult } from '@vue/apollo-composable'
import { helloQuery } from '../graphql/queries/hello.query'

export default defineComponent({
    name: 'Todos',
    components: { PageHeader },
    setup() {
        const { result, onResult, error } = useQuery(helloQuery)

        return {
            result,
        }
    },
})
</script>

<style lang="scss" scoped></style>
