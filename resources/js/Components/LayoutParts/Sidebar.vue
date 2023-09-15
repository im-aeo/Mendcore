<script setup lang="ts">
import { ref, beforeMount, onMounted, reactive, watch, watchEffect, computed } from 'vue';
import { Head, router, Link, usePage } from '@inertiajs/vue3';
import axios from 'axios';
import { route, current } from "momentum-trail";

const chatopen = ref(false);

const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
const adblock = ref(false);

async function detectAdBlock() {
  try {
    await fetch(new Request(googleAdUrl)).catch(() => adblock.value = true);
  } catch (e) {
    adblock.value = true;
  }
}

onMounted(() => {
    detectAdBlock(); // Call the function only if adblock status is not already set
});
const sidebarsections = [
    {
        en: { name: "NAVIGATION" },
        ru: { name: "НАВИГАЦИЯ" },
        jp: { name: "ナビゲーション" }
    },
    {
        en: { name: "SOCIAL" },
        ru: { name: "СОЦИАЛЬНОЕ" },
        jp: { name: "ソーシャル" }
    },
    {
        en: { name: "MY SPACES" },
        ru: { name: "МОИ ПРОСТРАНСТВА" },
        jp: { title: "私のスペース" }
    },
    {
        en: { name: "BOOST YOUR ACCOUNT" },
        ru: { name: "เกม" },
        jp: { name: "ゲーム" } 
    }
]
const sidebar = [
    {
        url: "#",
        active_link: "games.*",
        section: "NAVIGATION",
        icon: "fas fa-gamepad-modern",
        en: { title: "Games" },
        ru: { title: "Игры" },
        jp: { title: "ゲーム" }
        
    },
    {
        url: route(`store.page`),
        section: "NAVIGATION",
        active_link: "store.*",
        icon: "fas fa-store",
        en: { title: "Market" },
        ru: { title: "Рынок" },
        jp: { title: "市場" },
    },
    {
        url: route(`forum.page`, { id: 1 }),
        active_link: "forum.page.*",
        icon: "fas fa-messages",
        section: "NAVIGATION",
        en: { title: "Discuss" },
        ru: { title: "Обсуждать" },
        jp: { title: "議論" },
    },
    {
        url: "#",
        section: "NAVIGATION",
        active_link: "develop.*",
        icon: "fas fa-code",
        en: { title: "Develop" },
        ru: { title: "Развивать" },
        jp: { title: "発展" }
    },
    {
        url: route(`user.page`),
        active_link: "user.*",
        section: "SOCIAL",
        icon: "fas fa-users",
        en: { title: "Players" },
        ru: { title: "Игроки" },
        jp: { title: "発展" }
    },
    {
        url: "#",
        section: "SOCIAL",
        active_link: "spaces.*",
        icon: "fas fa-planet-ringed",
        en: { title: "Spaces" },
        ru: { title: "Пространства" },
        jp: { title: "スペース" }
    },
    {
        url: "#",
        section: "SOCIAL",
        active_link: "leaderboard.*",
	icon: "fas fa-list-ol",
        en: { title: "Leaderboard" },
        ru: { title: "Таблица лидеров" },
        jp: { title: "リーダーボード" }
    },
    {
        url: "#",
        icon: "fas fa-rocket-launch",
        active_link: "upgade.*",
        section: "BOOST YOUR ACCOUNT",
        en: { title: "Upgrade" },
        ru: { title: "модернизировать" },
        jp: { title: "アップグレード" }
    },

];
const lang = computed(() => usePage().props.locale);

usePage<any>()
const { props } = usePage<any>();
</script>
<template>
    <nav class="sidebar show-for-large" id="sidebar">
        <ul class="sidebar-nav">
            <div class="hide-for-large" v-if="!$page.props.auth.user">
                <li class="side-item side-title">Account</li>
                <li  class="side-item">
                    <Link :href="route('auth.register.page')" class="side-link"><i
                        class="fas fa-user-plus side-icon"></i><span>Get Started</span></Link>
                </li>
                <li  class="side-item">
                    <Link :href="route('auth.login.page')" class="side-link"><i
                        class="fas fa-sign-in side-icon"></i><span>Log In</span></Link>
                </li>
            </div>
            <li class="side-item">
                <Link :href="route('Welcome')"
                    :class="[current('my.dashboard.*' || 'Welcome') ? 'active' : '']"
                    class="side-link"><i class="fas fa-home side-icon"></i><span>Home</span></Link>
            </li>
            <template v-for="sidesections in sidebarsections" class="hide-for-large">
                <li class="side-item side-title">{{ sidesections[lang].name }}</li>
                <!-- Iterate over links within the current section -->
                <li class="side-item" v-for="sidelink in sidebar.filter(link => link.section === sidesections.en.name)">
                  <Link class="side-link" :href="sidelink.url" :class="[current(sidelink.active_link) ? 'active' : '']"><i
                    class="side-icon" :class="sidelink.icon"></i><span>{{ sidelink[lang].title }}</span></Link>
                </li>
            </template>
            <li v-if="$page.props.auth.user" class="side-item side-title">My Spaces</li>
            <li v-if="$page.props.auth.user" class="side-item">
                <Link href="#" class="side-link side-link-has-img">
                <span class="side-img">
                    <img src="/assets/img/icon.png" />
                </span>
                <span>Project Eclipse</span>
                </Link>
            </li>
            <!--
                        <li class="side-item action-menu">
                            <Link href="#" class="side-link">
                                <img src="/props/aeo_headshot.png" alt="Image" class="rounded avaimg"><span>&nbsp;Aeo</span>
                                  
                            </Link>
                        </li>
                   --> 
        </ul>
    </nav>
        <main class="container">
	    <div v-if="adblock" class="py-2 mb-4 text-center alert alert-danger fw-semibold">
                <div class="gap-2 align-middle flex-container align-justify">
                    <i class="text-lg far fa-triangle-exclamation pe-2"></i>
                    <div>It looks like you use an ad blocker (so do we). You can support {{ usePage().props.site.name }} by telling your friends about us!</div>
                    <i class="text-lg far fa-triangle-exclamation pe-2"></i>
                </div>
            </div>
            <div v-if="usePage().props.site_config.in_maintenance" class="py-2 mb-2 text-center text-white alert alert-warning">
                <div class="gap-2 align-middle flex-container align-justify">
                    <i class="text-lg far fa-hammer pe-2"></i>
                    <div>You are currently in maintenance mode. <Link :href="route('maintenance.exit')" class="text-white fw-semibold">Exit</Link>
                    </div>
                    <i class="text-lg far fa-hammer pe-2"></i>
                </div>            
            </div>
            <div class="grid-x grid-margin-x align-center">
                <slot />
                <div v-if="usePage().props.auth.user" id="chat-container" class="chat-container chat-vis focused" style="right: 66px; z-index: 1060;">
			<div @click="chatopen = !chatopen" style="cursor:pointer;" class="chat-windows-header chat-header bg-info hover">
                            <div class="chat-header-action">
                                <i class="chat-icon fas fa-message-xmark chat-link-icon"></i>
                                <i class="chat-icon fas fa-cog chat-link-icon"></i>
                                <i class="chat-icon fas fa-gamepad-modern chat-link-icon"></i>
                            </div>
			    <div class="chat-header-label">
                                <span class="chat-caption-header text-overflow chat-header-title">
                                    Chats
                                </span>
                            </div>
                        </div>
                    <div v-if="chatopen" class="chat-main">
                        <div class="chat-body card-chat card-chat-body no-corners">
			       <ul>
      <li v-for="message in messages">
        {{message}}
      </li>
    </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main><!-- End #main -->
</template>

<script lang="ts">
export default {
    data() {
        return { messages: [] }
    },
    created() {
        this.fetchMessages();
	window.Echo.private('chat')
  .listen('MessageSent', (e) => {
    this.messages.push({
      message: e.message.message,
      user: e.user
    });
  });

    },
    methods: {
        fetchMessages() {
            axios.get(route(`api.messages`)).then(response => {
                this.messages = response.data;
            });
        },
        addMessage(message) {
            this.messages.push(message);
            axios.post(route(`api.messages.new`, { message: message })).then(response => {
                console.log(response.data);
            });
        },
        showModal(modalId: string): void {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.toggle("active");
            }
        },
        addActiveClass(elementId: string): void {
            const element = document.getElementById(elementId);
            if (element) {
                element.classList.toggle('active');
            }
        },
        sidebarOpen(): void {
            const sidebar = document.getElementById('sidebar');
            if (sidebar) {
                sidebar.classList.toggle('show-for-large');
            }
        },
        addActiveClassSSInput(elementId: string): void {
            const element = document.getElementById(elementId) as HTMLInputElement;
            const isEmpty = (str: string): boolean => !str.trim().length;

            if (element) {
                element.addEventListener('input', function () {
                    if (isEmpty(this.value)) {
                        return;
                    } else {
                        element.classList.toggle('hide');
                    }
                });
            }
        }
    }
};
</script>
