<script setup lang="ts">
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import Welcome from '@/Components/PageProps/Welcome.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import AppHead from '@/Components/AppHead.vue';
import { route, current } from "momentum-trail";
defineProps({
    UserCount: {type: Number, required: true},
})
</script>
<template>
    <AppHead pageTitle="Welcome" description="Welcome to Vestora." :url="route('auth.login.page')" />
    <Navbar>
        <Welcome  :UserCount="UserCount"/>
        </Navbar>
    <Footer />
</template>
