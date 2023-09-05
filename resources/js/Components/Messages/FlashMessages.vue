<script setup lang="ts">
    import { usePage } from '@inertiajs/vue3';
</script>
<template>
    <div v-if="usePage().props.flash && usePage().props.flash.message && show"
        class="mb-3 text-center alert alert-success fw-semibold" @click="show = false">
        {{ usePage().props.flash.message }}
    </div>
    <div v-if="usePage().props.flash && ($page.props.flash.error || Object.keys($page.props.errors).length > 0) && show"
        class="mb-3 text-center alert alert-danger fw-semibold">
        <div v-if="$page.props.flash && $page.props.flash.error">{{ $page.props.flash.error }}</div>
        <div v-else>
            <span v-if="Object.keys(usePage().props.errors).length === 1">You have an error in your request.</span>
            <div>You have {{ Object.keys(usePage().props.errors).length }} errors in your request.</div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    data() {
        return {
            show: true,
        }
    },
    watch: {
        'usePage().props.flash': {
            handler() {
                this.show = true
            },
            deep: true,
        }
    }
}
</script>
