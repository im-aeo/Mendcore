<script setup lang="ts">
<<<<<<< HEAD
import { ref, onMounted, computed, watchEffect, provide } from 'vue';
=======
import { ref, onMounted, computed, watchEffect } from 'vue';
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
import axios from 'axios';
import { usePage } from '@inertiajs/inertia-vue3';
import MarketSidebar from '@/Components/LayoutParts/MarketSidebar.vue';
import MarketSorting from '@/Components/LayoutParts/MarketSorting.vue';
import AppHead from '@/Components/AppHead.vue';
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import { route, current } from 'momentum-trail'
<<<<<<< HEAD
import { loadConfigFromFile } from 'vite';
import ItemCardSkeleton from '@/Components/ItemCardSkeleton.vue';
=======
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018

const props = defineProps({
    categories: Array,
});

const items = ref([]);
<<<<<<< HEAD
const categories = computed<any>(() => props.categories);

const ItemLoading = ref(false);

const selectedCategory = ref(""); // Ref to store the currently selected category

// Fetch items for the selected category
async function fetchItems(selectedcat) {
    if (selectedCategory) {
        try {
            selectedCategory.value = selectedcat.name;
            ItemLoading.value = true;
            const response = await axios.get(route(`api.store.items`, { category: selectedcat.name }));
            items.value = response.data;
            ItemLoading.value = false;
=======
const page = usePage();
const categories = computed(() => props.categories);

let itemsLoaded = false; // Variable to track whether items have been loaded
const selectedCategory = ref(null); // Ref to store the currently selected category

// Fetch items for the selected category
async function fetchItems(selectedCategory) {
    if (selectedCategory) {
        try {
            const response = await axios.get(route(`api.store.items`, { category: selectedCategory.name }));
            items.value = response.data;
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
        } catch (error) {
            console.error(error);
        }
    }
}

// Function to handle category selection
function selectCategory(category) {
    selectedCategory.value = category;
<<<<<<< HEAD
    ItemLoading.value = true;
}

// Computed properties
const itemRoute = (itemId) => route(`store.item`, { id: itemId });
const creatorRoute = (username) => route(`user.profile`, { username: username });
provide('selectedCategory', selectedCategory);
=======
}
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
</script>

<template>
    <AppHead />
    <Navbar />
    <Sidebar>
        <div class="cell large-3">
            <MarketSidebar :categories="categories" @category-selected="fetchItems" :selectCategory="selectCategory" />
        </div>
        <div class="cell large-9">
<<<<<<< HEAD
            <MarketSorting :selectedCategory="selectedCategory" />
            <div v-if="ItemLoading || items && items.length > 0" class="grid-x grid-margin-x grid-padding-y">
                <template v-if="ItemLoading">
                <ItemCardSkeleton  />
                <ItemCardSkeleton  />
                <ItemCardSkeleton  />
                <ItemCardSkeleton  />
                <ItemCardSkeleton  />
                <ItemCardSkeleton  />
                <ItemCardSkeleton  />
                <ItemCardSkeleton  />
                <ItemCardSkeleton  />
                <ItemCardSkeleton  />
                <ItemCardSkeleton  />
                <ItemCardSkeleton  />
                </template>
                <div v-else class="cell large-2 medium-3 small-6" v-for="(item, index) in items" :key="index">
                    <Link :href="itemRoute(item.id)" class="d-block">
=======
            <MarketSorting :categories="categories" />
            <div v-if="items && items.length > 0" class="grid-x grid-margin-x grid-padding-y">
                <div class="cell large-2 medium-3 small-6" v-for="item in items" :key="item.id">
                    <Link :href="route(`store.item`, { id: item.id })" class="d-block">
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
                    <div class="p-2 mb-1 card card-item position-relative">
                        <div style="
                                position: absolute;
                                bottom: 10px;
                                left: 10px;
                            ">
                            <div v-if="item.in_event" class="mb-1 badge badge-warning fw-semibold">
                                <i class="fas fa-calendar-star" style="width: 18px"></i>Event
                            </div>
                            <div v-else-if="item.rare" class="mb-1 badge badge-info fw-semibold">
                                <i class="fas fa-star" style="width: 18px"></i>Rare
                            </div>
                            <div v-else-if="item.sale_ongoing" class="mb-1 badge badge-danger fw-semibold">
                                <i class="fas fa-badge-percent" style="width: 18px"></i>{{ item.percent_off + '%' }} off
                            </div>

                            <div v-else-if="item.time_off_sale != null" class="mb-1 badge badge-warning fw-semibold">
                                <i class="fas fa-clock" style="width: 18px"></i>Timed
                            </div>
                        </div>
                        <div style="
                                position: absolute;
                                top: 10px;
                                right: 10px;
                            ">
                            <div class="mb-1 badge badge-warning fw-semibold">
                                <i class="fas fa-coins" style="width: 18px"></i>{{ item.cost_coins }}
                            </div>
                            <div class="mb-1 badge badge-success fw-semibold">
                                <i class="fas fa-money-bill-1-wave" style="width: 18px"></i>{{ item.cost_bucks }}
                            </div>
                        </div>
                        <img src="/assets/img/item_dummy_4.png" />
                    </div>
                    <div class="text-body fw-semibold text-truncate">
                        {{ item.name }}
                    </div>
                    </Link>
                    <div class="text-xs fw-semibold text-truncate">
<<<<<<< HEAD
                        <span class="text-muted">By:</span>&nbsp;
                        <Link :href="creatorRoute(item.creator.username)">
                            {{ '@' + item.creator.username }}<i class="fas fa-shield-check text-success ms-1"></i></Link>
                    </div>
                </div>
            </div>
            <div v-else class="">
=======
                        <span class="text-muted">By</span>
                        <Link :href="route(`user.profile`, { username: item.creator.username })">{{ '@' + item.creator.username }}<i class="fas fa-shield-check text-success ms-1"></i></Link>
                    </div>
                </div>
            </div>
            <div v-else class="card">
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
                <div class="pb-0 card-body">
                    <div class="gap-3 text-center flex-container flex-dir-column mb-2"><i
                            class="text-5xl fas fa-store-slash text-muted"></i>
                        <div style="line-height: 16px;">
                            <div class="text-xs fw-bold text-muted text-uppercase"> No Items</div>
                            <div class="text-muted fw-semibold">
                                <p class="text-xs">There are currently no items in this category.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="my-4 pagination flex-container align-center">
                <button class="page-link page-disabled">
                    <i class="fa-regular fa-chevron-left"></i>
                </button>
                <button class="page-link page-active">1</button>
                <button class="page-link">2</button>
                <button class="page-link">3</button>
                <button class="page-link">
                    <i class="fa-regular fa-chevron-right"></i>
                </button>
            </ul>
        </div>
    </Sidebar>
    <Footer />
</template>
