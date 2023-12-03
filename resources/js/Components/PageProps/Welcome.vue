<script lang="ts" setup>
import { computed } from 'vue';
const site = computed(() => usePage().props.site)
import { usePage } from '@inertiajs/vue3';
import { route, current } from "momentum-trail";

defineProps({
    UserCount: { type: Number, default: '0' },
});
</script>
<template>
<header class="masthead bg-info">
    <div class="cell ">
        <div class="justify-center text-center row align-center">
            <div class="row justify-content-center">
                <div class="col-xl-6">
                    <div class="text-center text-white">
                        <!-- Page heading-->
                        <h1 class="mb-5"><img :src="site.logo" width="512" /></h1>
                        <h3 class="mt-3 mb-2 fw-semibold">Join in on the action today. Buy &amp; sell items, participate in groups, make friends, and more.</h3>
                        <h4 class="mb-3 fw-semibold">Join over <strong>{{ UserCount }}</strong> users today!</h4>
                        <div class="min-w-0 gap-1 mt-3 flex-container align-center">
                            <Link :href="route('auth.login.page')" class="gap-2 btn btn-warning"><i
                                class="mr-1 fas fa-key"></i> Login</Link>
                        <Link :href="route('auth.register.page')" class="gap-2 btn btn-success"><i
                                class="mr-1 fas fa-user-plus"></i> Register</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</header>
<div class="container site grid-x">
<div>
    <div class="row" id="YASQUEEN">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="text-center col-md-3 text-center-sm">
                            <i class="fas fa-user-hard-hat text-info hide-sm" style="font-size:90px;"></i>
                            <i class="mb-2 fas fa-user-hard-hat text-info show-sm-only"
                                style="font-size:80px;"></i>
                        </div>
                        <div class="col-md-9">
                            <div class="landing-text fw-semibold">Customize Your Character</div>
                            <div>Pick and choose from a collection of items created by the community to create
                                your own unique character with.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="text-center col-md-3 text-center-sm show-sm-only">
                            <i class="mb-2 fas fa-users text-success" style="font-size:80px;"></i>
                        </div>
                        <div class="text-right col-md-8">
                            <div class="landing-text fw-semibold">Meet New Friends</div>
                            <div>On {{ $page.props.site.name }}, finding and adding friends is only two steps away, simply find a
                                user and add them. It's that simple!</div>
                        </div>
                        <div class="text-center col-md-4 text-center-sm hide-sm">
                            <i class="fas fa-users text-success" style="font-size:90px;"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="text-center col-md-3 text-center-sm">
                            <i class="fas fa-tools text-danger hide-sm" style="font-size:90px;"></i>
                            <i class="mb-2 fas fa-tools text-danger show-sm-only" style="font-size:80px;"></i>
                        </div>
                        <div class="col-md-9">
                            <div class="landing-text fw-semibold">Create Your Own Assets</div>
                            <div>Unleash your inner entrepreneur by creating and marketing your own items,
                                groups, games and more.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="text-center col-md-3 text-center-sm show-sm-only">
                            <i class="mb-2 fas fa-comments-alt text-warning" style="font-size:80px;"></i>
                        </div>
                        <div class="text-right col-md-8">
                            <div class="landing-text fw-semibold">Socialize With Others</div>
                            <div>Head over to Discussion to socialize with all kinds of users on {{ $page.props.site.name }}, from
                                the funny to the professional, and find new friends!</div>
                        </div>
                        <div class="text-center col-md-4 text-center-sm hide-sm">
                            <i class="fas fa-comments-alt text-warning" style="font-size:90px;"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>
