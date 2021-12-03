<template>
    <div>
        <PageHeader title="Todos" :show-button="true" />
        <div>
            {{ result }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import { useQuery } from '@vue/apollo-composable'
import { GET_ALL_CHARACTER_NAMES } from '../graphql/queries/getAllCharacter.query'

export default defineComponent({
    name: 'Todos',
    components: { PageHeader },
    setup() {
        const { result, loading, error } = useQuery(GET_ALL_CHARACTER_NAMES)

        return {
            result,
        }
    },
})
</script>

<style lang="scss" scoped></style>
