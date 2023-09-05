<script setup lang="ts">
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import ForumSidebar from '@/Components/LayoutParts/ForumSidebar.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import AppHead from '@/Components/AppHead.vue';

import { route } from 'momentum-trail'; // If you're using the 'route' function from 'momentum-trail'

function getCurrentpath(id) {
    if (route('forum.page', { id }) === window.location.href) {
        return window.location.pathname;
    }
}
</script>

<template>
    <AppHead pageTitle="Discuss" description="Here, You can discuss with the community surrounding several topics on Vestora."
        :url="route('forum.page', {id: topic.id })" />
    <Navbar />
    <Sidebar>
        <div class="cell medium-3">
            <ForumSidebar :topic="topic" :section_one="section_one" :section_two="section_two" :section_three="section_three" />
        </div>
        <div class="cell medium-9">
            <div class="mb-2 text-sm fw-semibold">{{ topic.name }} &bullet; {{ topic.description }}</div>
            <div class="card">
                <div class="pb-0 card-body">
                    <div class="gap-3 text-center flex-container flex-dir-column" v-if="!posts.data.length">
                        <i class="text-5xl fas fa-message-xmark text-muted"></i>
                        <div style="line-height: 16px">
                            <div class="text-xs fw-bold text-muted text-uppercase">
                                No Forum Posts
                            </div>
                            <div class="text-muted fw-semibold">
                                <p class="text-xs">There are currently no posts in this category.</p>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 row thread" v-for="post in posts.data">
                        <div class="mx-1 my-3 divider"></div>
                        <div class="gap-2 align-middle flex-container">
                            <a :href="route('user.profile', { username: post.username })">
                                <img :src="post.headshot"
                                    style="max-width:65px"
                                    class="border img-fluid headshot rounded-circle border-secondary bg-dark"
                                    alt="2oddMacs1">
                            </a>
                            <div class="flex-wrap col-md-4 d-flex justify-content-center align-content-start"
                                style="flex-direction: column">
                                <div class="text-start">
                                    <Link :href="route('forum.post', { id: post.id, slug: post.seo })" class="text-md">
                                    {{ post.name }}
                                    </Link>
                                    <div></div>
                                    <Link :href="route('user.profile', { username: post.username })"
                                        class="text-sm fw-semibold text-body">
                                    {{ post.display_name }} &bullet; {{ post.DateHum }}
                                    </Link>
                                    <div class="text-xs text-muted fw-semibold text-body">
                                        @{{ post.username }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mx-1 my-3 divider"></div>
                </div>

            </div>
        </div>
    </Sidebar>
    <Footer />
</template>

<script lang="ts">
export default {
    props: {
        topic: Object,
        posts: Object,
        section_one: Object,
        section_two: Object,
        section_three: Object,
    },
    methods: {
        getCurrentpath(id) {
            if (route('forum.page', { id }) === window.location.href) {
                return window.location.pathname
            }
        }
    },
};
</script>
