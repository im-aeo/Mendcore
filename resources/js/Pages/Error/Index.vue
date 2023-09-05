<script setup lang="ts">
import { defineProps,computed } from 'vue'
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import { route, current } from "momentum-trail";

defineProps<{
  status: number
  route: string
  message: string
}>()

function getCurrentpath() {

        return window.location.pathname;
}
</script>

<template>
  <Navbar/>
    <Sidebar>
        <div class="cell large-8 medium-10">
            <div class="card">
                <div class="card-body">
                    <div class="mb-1 text-xl fw-semibold">{{ message }}</div>
                    <p class="card-text">
                        <a href="#!" class="btn btn-info" onclick="window.history.back();">
                            <i class="fad fa-arrow-left me-1"></i> Go back
                        </a>
                    </p>
                </div>
            </div>
            <p class="mt-2 text-muted">
                <i>

                    {{ route }}: {{ getCurrentpath() }}
                </i>
            </p>
        </div>
    </Sidebar>
<Footer/>
</template>
