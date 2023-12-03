<script setup lang="ts">
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import { useValidate } from "momentum-preflight";
import { route, current } from "momentum-trail";
import { ethers } from "ethers";
import FlashMessages from '@/Components/Messages/FlashMessages.vue'
import AppHead from '@/Components/AppHead.vue';
import Login from '@/Components/PageProps/Login.vue'
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
</script>

<template>
    <AppHead pageTitle="Login" description="Login to Vestora." :url="route('auth.login.page')" />
    <Navbar />
    <Sidebar>
        <Login />
    </Sidebar>
</template>
