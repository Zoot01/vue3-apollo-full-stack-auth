<template>
    <div
        class="surface-section px-3 py-3 md:px-5 lg:px-5 border-bottom-1 border-100"
    >
        <div
            class="flex align-items-start flex-column lg:justify-content-between lg:flex-row"
        >
            <div>
                <div class="font-medium text-3xl text-900">{{ title }}</div>
                <div class="flex align-items-center text-700 flex-wrap">
                    <div class="mr-5 flex align-items-center mt-3">
                        <i class="pi pi-list mr-2"></i>
                        <span>25 Active Todos</span>
                    </div>
                    <div class="mr-5 flex align-items-center mt-3">
                        <i class="pi pi-check mr-2"></i>
                        <span>15 Completed</span>
                    </div>
                    <div class="flex align-items-center mt-3">
                        <i class="pi pi-clock mr-2"></i>
                        <span>21.5 Hours</span>
                    </div>
                </div>
            </div>
            <div class="mt-3 lg:mt-0">
                <Button
                    v-if="showButton"
                    p-button
                    p-ripple
                    label="Add"
                    class="p-button-outlined mr-2"
                    icon="pi pi-plus"
                ></Button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PageHeader',
    components: {},
    props: {
        title: {
            required: true,
            type: String,
        },
        showButton: {
            required: true,
            type: Boolean,
        },
    },
    setup() {
        return {}
    },
})
</script>

<style lang="scss" scoped></style>
