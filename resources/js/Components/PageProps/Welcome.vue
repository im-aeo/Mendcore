<script lang="ts" setup>
import { computed } from 'vue';
const site = computed(() => usePage().props.site)
import { usePage } from '@inertiajs/vue3';
import { route, current } from "momentum-trail";

defineProps({
    UserCount: { type: Number, default: '0' },
});
</script>
<style scoped>
header.masthead {
    position: relative;
    background: linear-gradient(to top, var(--info-600), var(--black));
    background-size: cover;
    padding-top: 8rem;
    padding-bottom: 8rem;
}
.card-body{
flex: 1 1 auto;
min-height:0px;
padding: 1px;
}
#YASQUEEN, .card, .arcs, .row {
min-height:180px;
}
.align-items-center{
align-items: center !important;
}
.card{
position:relative;
display:flex;
flex-direction: columm;
min-width:0;
word-wrap: break-word;
background-clip:border-box;
border: 1px solid rgba(0,0,0,0,.12549);
margin-bottom:16px;
border-radius:2px;
}
@media screen and (max-width: 1024px) {
.container, .site, .container-fluid.site, .site.container-sm, .site.container-md, .site.container-lg, .site.container-xl {
margin-bottom: 0;
}
}
.container, .site, .container.content-before, .site-footer .container {
max-width: 1540px;
}
.container, .site, .container-fluid.site, .site.container-sm, .site.container-md, .site.container-lg, .site.container-xl {
padding-top: 20px;
padding-bottom: 20px;
flex: 1 0 auto;
}
.mt-4, .my-4 {
margin-top: 1.5rem !important;
}
@media (min-width: 576px) {
.container, .container-sm {
max-width: 1540px;
}
}
.container, .container-fluid, .container-sm, .container-md, .container-lg, .container-xl {
width: 100%;
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
}
article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
display: block;
}

.row{
display: flex;
flex-wrap: wrap;
margin-right: -15px;
margin-left: -15px;
}

.landing-icon{font-size:150px}@media only screen and (max-width: 768px){.landing-icon{font-size:100px}}.landing-title{font-size:32px;font-weight:500}@media only screen and (max-width: 768px){.landing-title{font-size:23px}}.landing-text{font-size:20px;line-height:1.8}@media only screen and (max-width: 768px){.landing-text{font-size:17px}}.market-item{text-align:center}.market-item a{position:relative;display:block}.market-item img{background:#f6f9fb;border-bottom:1px solid rgba(0,0,0,0.06);border-radius:2px 2px 0 0;padding:10px}

.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col,.col-auto,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm,.col-sm-auto,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md,.col-md-auto,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg,.col-lg-auto,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl,.col-xl-auto {
position: relative;
width:100;
padding-right:15px;
padding-left:15px;
}
.col-md-1{
flex:0 0 8.33333%;
max-width:8.33333%;
}
.col-md-2{
flex:0 0 16.66667%;
max-width:16.66667%;
}
.col-md-3{
flex:0 0 25%;
max-width:25%;
}
.col-md-4{
flex:0 0 33.33333%;
max-width:33.33333%;
}
.col-md-6{
flex:0 0 50%;
max-width:50%;
}
.col-md-7{
flex:0 0 58.33333%;
max-width:58.33333%;}
.col-md-8{
flex:0 0 66.66667%;
max-width:66.66667%
}
.col-md-9{
flex:0 0 75%;
max-width:75%;
}

.text-center-sm{
text-align: center !important;
}
.text-center{
text-align:center !important;
}
.hide-sm{
display: none !important;
}
</style>
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
