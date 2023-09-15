<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import AeoPagination from '@/Components/Pagination.vue';
import FlashMessages from '@/Components/Messages/FlashMessages.vue';
import axios from 'axios';
import { route, current } from "momentum-trail";

const form = useForm({
    message: '',
});

const submit = () => {
    form.transform(data => ({
        ...data,
        remember: form.remember ? 'on' : '',
    })).post(route('my.dashboard.validate'), {
        onFinish: () => form.reset('message'),
    });
};

</script>

<template>
            <div class="cell medium-3">
                <div class="gap-2 mb-3 align-middle card card-body flex-container flex-dir-column">
                    <img src="/assets/img/dummy_headshot.png" width="60" class="headshot" />
                    <div class="text-center" style="line-height: 16px">
                        <div class="fw-semibold">{{ $page.props.auth.user.display_name }}</div>
                        <div class="text-xs fw-semibold text-muted">
                            {{ '@' + $page.props.auth.user.username }}
                        </div>
                    </div>
                    <div class="divider w-100"></div>
                    <div class="w-100">
                        <div class="gap-3 align-middle flex-container">
                            <i class="text-3xl fas fa-medal text-info" style="width: 40px"></i>
                            <div class="w-100">
                                <div class="mb-1 flex-container align-justify">
                                    <div class="text-xs fw-bold text-muted text-uppercase">
                                        Rank Lvl. 2
                                    </div>
                                    <div class="text-xs fw-bold text-muted text-uppercase">
                                        50/200 EXP
                                    </div>
                                </div>
                                <div class="progress-bar">
                                    <span class="progress" style="width: 25%;"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-1 text-xl fw-semibold">
                    The Eclipse Times
                </div>
                <div class="card card-body">
                    <div class="gap-3 text-center flex-container flex-dir-column" v-if="!News.length">
                        <i class="text-5xl fas fa-face-sleeping text-muted"></i>
                        <div style="line-height: 18px">
                            <div class="text-xs fw-bold text-muted text-uppercase">
                                No Blog Posts
                            </div>
                            <div class="text-xs text-muted fw-semibold">
                                When we publish a post it will appear here.
                            </div>
                        </div>
                    </div>
                    <div class="section" v-else>
                        <a v-for="Bpost in News" :key="Bpost.title" :href="Bpost.link"
                            class="d-block squish">
                            <img :src="extractImageUrl(Bpost.image)" class="mb-2 blog-thumbnail" />
                            <div style="line-height: 18px">
                                <div class="d-block fw-semibold text-body">
                                    {{ Bpost.title }}
                                </div>
                                <div class="text-xs text-muted fw-semibold text-truncate">
                                    {{ Bpost.desc }}
                                </div>
                                <div class="mt-1 text-xs fw-semibold text-muted">
                                    Posted<span class="mx-1">&bullet;</span>{{ Bpost.date }}
                                </div>
                                <div class="divider w-100"></div>
                            </div>

                        </a>
                    </div>
                </div>
            </div>
            <div class="cell medium-8">
                <FlashMessages/>
                <div class="mb-1 text-xl fw-semibold show-for-small-only">
                    Feed
                </div>
                <form @submit.prevent="submit">
                    <div class="mb-3">
                        <div class="position-relative">
                            <textarea class="mb-2 form form-has-button form-has-section-color pe-5" rows="5"
                                v-model="form.message" placeholder="How are you doing?"></textarea>
                            <input type="submit" :disabled="form.processing" class="btn btn-success btn-sm has-ripple"
                                value="Post" style="
                            position: absolute;
                            bottom: 10px;
                            right: 10px;
                        " />
                        </div>
                    </div>
                </form>
                <div class="mb-1 text-xl fw-semibold">Posts</div>
                <div class="card card-body">
                    <div class="gap-3 text-center flex-container flex-dir-column" v-if="!slist.data.length">
                        <i class="text-5xl fas fa-face-sleeping text-muted"></i>
                        <div style="line-height: 16px">
                            <div class="text-xs fw-bold text-muted text-uppercase">
                                No Posts
                            </div>
                            <div class="text-xs text-muted fw-semibold">
                                Start following players and their posts will appear here.
                            </div>
                        </div>
                    </div>

                    <div class="gap-3 section flex-container flex-dir-column-sm"
                        v-for="status in slist.data" :key="status.id">
                        <div class="mx-auto flex-child-grow" style="width: 100px">
                            <a href="#" class="text-sm text-center d-block squish">
                                <img src="/assets/img/dummy_headshot.png" class="mb-1 headshot" width="60" />
                                <div style="line-height: 16px">
                                    <div class="text-truncate">{{ status.dname }}</div>
                                    <div class="text-xs text-muted text-truncate">
                                        {{ '@' + status.name }}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="card card-body card-inner w-100">
                            <div class="align-middle flex-container align-justify">
                                <div class="w-100">
                                    <div class="text-xs text-muted">
                                        <i class="far fa-clock me-1"
                                            style="vertical-align: middle;margin-top: -2.5px;font-size: 10px;"></i>
                                        Posted {{ status.DateHum }}
                                    </div>
                                    <div>
                                        {{ status.message }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AeoPagination v-bind:pagedata="slist" @page-clicked="getStatusList" />
                </div>
            </div>
</template>

<script lang="ts">
export default {
    methods: {
    extractImageUrl(imageString) {
      const regex = /src="(.*?)"/; // Regex to capture the URL within src=""
      const matches = regex.exec(imageString);
      if (matches && matches.length > 1) {
        return matches[1]; // Return the captured URL
      }
      return ''; // Return empty string if no URL is found
    },
    getStatusList(page: number | undefined): void {
      var vm = this;
      var pageUrl = page ? `/my/dashboard?page=${page}` : '/my/dashboard';

      axios
        .get(pageUrl)
        .then(function (response) {
          if (response.data.hasOwnProperty('success')) {
            vm.users = response.data.users;
            vm.tags = response.data.users.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
},
    props: {
        slist: Object,
        News: Array,
    },
}
</script>
