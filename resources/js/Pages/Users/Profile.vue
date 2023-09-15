<script setup lang="ts">
import Profile from '@/Components/PageProps/Profile.vue';
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';

import axios from 'axios';
import { ref } from 'vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import { route, current } from "momentum-trail";
import AppHead from '@/Components/AppHead.vue';

defineProps({
    user: { type: Object, required: true },
});
</script>

<style scoped>
.modal .modal.active {
    z-index: 500;
}

.modal-card .modal-card-body {
    z-index: 1000;
}
</style>
<template>
        <AppHead :pageTitle="user.username" :description="user.description" :cover="user.avatar" :url="route(`user.profile`,{ username: user.username })" />
        <Navbar/>
            <Sidebar>
            <Profile  :user="user"/>
            </Sidebar>
        <Footer />
</template>

<script lang="ts">
export default {
    data() {
        return {
            userstat: { // Replace this with your actual user object
                online: false,
                id: this.user.id,
                fetchingStatus: false,
            },
        };
    },
    created() {
        this.fetchUserStatus();
    },
    computed: {
        userStatus() {
            return this.userstat.online ? 'Online' : 'Offline';
        },
        userStatusClass() {
            return this.userstat.online ? 'online' : 'offline';
        },
    },
    methods: {
        async fetchUserStatus() {
            this.userstat.fetchingStatus = true;
            const cachedOnlineStatus = this.userstat.online;
            try {
                const response = await axios.get(route(`api.user.online`, { id: this.userstat.id })); // Update the API endpoint as per your Laravel routes
                this.userstat.online = response.data.online;
            } catch (error) {
                console.error(error);
                this.userstat.online = cachedOnlineStatus;
            } finally {
                this.userstat.fetchingStatus = false;
            }
        },
        showModal(modalId: string): void {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.toggle("active");
            }
        },
    },

}
</script>
