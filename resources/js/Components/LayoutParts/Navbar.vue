<script setup lang="ts">
<<<<<<< HEAD
import { ref, onMounted, watch, computed, Suspense } from 'vue';
import { router, Link, usePage } from '@inertiajs/vue3';
import axios from 'axios';
import { route, current } from "momentum-trail";
import LanguageModal from "../Modal/LanguageModal.vue";
import SearchResult from "../SearchResult.vue";
import NavLink from "../NavLink.vue";
import Button from "../Button.vue";
import SearchResultSkeleton from "../SearchResultSkeleton.vue";
import VLazyImage from "v-lazy-image";
import PageLoader from '../Loaders/PageLoader.vue';

=======
import { ref, onMounted, reactive, watch, watchEffect, computed } from 'vue';
import { Head, router, Link, usePage } from '@inertiajs/vue3';
import axios from 'axios';
import { route, current } from "momentum-trail";
import LanguageModal from "../Modal/LanguageModal.vue";

defineProps({
    isActive: { type: Boolean, default: false },
    chat_toggle: { type: Boolean, default: false },
});
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018

const logout = () => {
    router.post(route('auth.logout'));
};

// Define the SearchResult interface
interface SearchResult {
    url: string;
    image: string;
    name: string;
    // Add other properties if needed
}
<<<<<<< HEAD
const SearchLoading = ref(false);
=======
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018

const search = ref('');
// Update the type of results to be an array of SearchResult
const results = ref<SearchResult[]>([]);

<<<<<<< HEAD
const performSearch = async () => {
    if (search.value !== '') {
        SearchLoading.value = true
        await axios
=======
const performSearch = () => {
    if (search.value !== '') {
        axios
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
            .get(route('api.search', { search: search.value }))
            .then((response) => {
                // Assuming the response.data is an array of SearchResult
                results.value = response.data.results;
<<<<<<< HEAD
                SearchLoading.value = false;
            })
            .catch((err) => console.log(err));
    } else {
        SearchLoading.value = true;
        results.value = [];
    }
};

// Language stuff
const topbar = [
    {
        url: route(`games.page`),
        active_link: "games.*",
        icon: "fas fa-gamepad-modern",
=======
            })
            .catch((err) => console.log(err));
    } else {
        results.value = [];
    }
};
watch(
    () => search.value,
    () => {
        performSearch();
    },
    { immediate: true }
);
// Language stuff
const topbar = [
    {
        url: "#",
        active_link: "games.*",
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
        en: { title: "Games" },
        ru: { title: "Игры" },
        jp: { title: "ゲーム" }

    },
    {
        url: route(`store.page`),
        active_link: "store.*",
<<<<<<< HEAD
        icon: "fas fa-store",
=======
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
        en: { title: "Market" },
        ru: { title: "Рынок" },
        jp: { title: "市場" },
    },
    {
        url: route(`forum.page`, { id: 1 }),
        active_link: "forum.*",
<<<<<<< HEAD
        icon: "fas fa-message-code",
=======
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
        en: { title: "Discuss" },
        ru: { title: "Обсуждать" },
        jp: { title: "議論" },
    },
    {
        url: "#",
<<<<<<< HEAD
        active_link: "spaces.*",
        icon: "fas fa-planet-ringed",
        en: { title: "Spaces" },
=======
        active_link: "develop.*",
        en: { title: "Develop" },
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
        ru: { title: "Развивать" },
        jp: { title: "発展" }
    },

];
<<<<<<< HEAD
const lang = computed<any>(() => props.locale);


const { props } = usePage<any>();
</script>
<template>
    <PageLoader/>
    <LanguageModal />
    <nav class="navbar">
        <ul class="navbar-nav grid-x">
            <NavLink :link="route(`Welcome`)">
                <v-lazy-image :src="props.site.logo" class="show-for-medium" width="180" />
                <v-lazy-image :src="props.site.icon" class="show-for-small-only" width="43" />
            </NavLink>
            <NavLink v-for="topbarlinks in topbar" :link="topbarlinks.url" :active_link="topbarlinks.active_link">
                <i :class="topbarlinks.icon"></i> &nbsp;
                <span>{{ topbarlinks[lang].title }}</span>
            </NavLink>

            <li class="mx-1 align-middle nav-item cell auto nav-search mx-md-3">
                <input v-model="search" type="text" class="form" id="global-search-bar" autocomplete="nope"
                    placeholder="Search..." @input="performSearch">
                <ul :class="['dropdown-menu', { 'hide': search === '' }]" id="global-search-results">
                    <li class="dropdown-title">Quick Results</li>
                    <SearchResult v-if="!SearchLoading" v-for="result in results" :link="result.url" :name="result.name"
                        :image="result.image" />
                    <SearchResultSkeleton v-else />

=======
const lang = computed(() => usePage().props.locale);

const auth = computed(() => usePage().props.auth.user);

usePage<any>()
const { props } = usePage<any>();
</script>
<template>
    <LanguageModal />
    <nav class="navbar">
        <ul class="navbar-nav grid-x">
            <li class="nav-item cell shrink me-2">
                <Link :href="route('Welcome')" class="nav-link">
                <img :src="usePage().props.site.logo" class="show-for-medium" width="180" />
                <img :src="usePage().props.site.icon" class="show-for-small-only" width="43" />
                </Link>
            </li>
            <li class="nav-item cell shrink show-for-large" v-for="topbarlinks in topbar">
                <li class="side-item">
                  <Link class="nav-link" :href="topbarlinks.url" :class="[current(topbarlinks.active_link) ? 'active' : '']">
			<span>{{ topbarlinks[lang].title }}</span>
		  </Link>
                </li>
            </li>

            <li class="mx-1 align-middle nav-item cell auto nav-search mx-md-3">
                <input v-model="search" type="text" class="form" id="global-search-bar" autocomplete="nope" placeholder="Search..."
                    @input="performSearch">
                <ul :class="['dropdown-menu', { 'hide': search === '' }]" id="global-search-results">
                    <li class="dropdown-title">Quick Results</li>
                    <li class="dropdown-item" v-for="result in results" :key="result.url">
                        <Link :href="result.url" class="dropdown-link">
                        <div class="align-middle flex-container align-justify">
                            <div class="gap-2 align-middle flex-container">
                                <img :src="result.image" class="headshot flex-child-grow" alt="headshot" width="40" />
                                <div>{{ result.name }}</div>
                            </div>
                            <i class="px-1 fas fa-chevron-right text-muted"></i>
                        </div>
                        </Link>
                    </li>
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
                    <li class="divider"></li>
                    <li class="dropdown-item">
                        <Link href="#" class="dropdown-link">
                        <div class="align-middle flex-container align-justify">
                            <div class="gap-2 align-middle flex-container">
                                <i class="text-xl align-middle fas fa-telescope headshot text-muted flex-container align-center flex-child-grow"
                                    style="height: 40px; width: 40px"></i>
                                <div>
                                    Show all results for "<span class="search-keyword">{{ search }}</span>"
                                </div>
                            </div>
                            <i class="px-1 fas fa-chevron-right text-muted"></i>
                        </div>
                        </Link>
                    </li>
                </ul>
                <button content="Search" data-tooltip-placement="bottom">
                    <i class="fas fa-search"></i>
                </button>
            </li>
<<<<<<< HEAD
            <Button v-if="!props.auth.user" :link="route('auth.register.page')" ColorClass="btn-success"
                class="nav-item cell shrink me-1">
                <i class="fas fa-person-to-portal"></i> &nbsp;
                Get Started
            </Button>
            <Button v-if="!props.auth.user" :link="route('auth.login.page')" ColorClass="btn-info"
                class="nav-item cell shrink me-1">
                <i class="fas fa-door-open"></i> &nbsp;
                Login
            </Button>
            <li v-if="props.auth.user" class="position-relative nav-item cell shrink">
                <div class="show-for-small-only position-relative">
                    <a @click="addActiveClass(`notification_dropdown`)" href="#"
                        class="px-2 btn-circle squish text-body"><span class="notification-circle"></span><i
                            class="text-xl fas fa-bell"></i></a>
                </div>
                <div class="dropdown show-for-medium position-relative" id="notification_dropdown">
                    <div @click="addActiveClass(`notification_dropdown`)" class="btn-circle squish">
                        <button class="px-2 text-body" v-tippy content="Notifications" data-tooltip-placement="bottom">
=======
            <li v-if="!$page.props.auth.user" class="nav-item cell shrink me-1">
                <Link :href="route('auth.register.page')" class="btn btn-success">Get Started</Link>
            </li>
            <li v-if="!$page.props.auth.user" class="nav-item cell shrink ms-1">
                <Link :href="route('auth.login.page')" class="btn btn-info">Log In</Link>
            </li>
            <li v-if="$page.props.auth.user" @click="addActiveClass(`notification_dropdown`)" class="position-relative nav-item cell shrink">
                <div class="show-for-small-only position-relative">
                    <a href="#" class="px-2 btn-circle squish text-body"><span class="notification-circle"></span><i
                            class="text-xl fas fa-bell"></i></a>
                </div>
                <div class="dropdown show-for-medium position-relative" id="notification_dropdown" @click="addActiveClass(`notification_dropdown`)">
                    <div class="btn-circle squish">
                        <button class="px-2 text-body" data-tooltip-title="Notifications" data-tooltip-placement="bottom">
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
                            <span class="notification-circle"></span><i class="text-xl fas fa-bell"></i>
                        </button>
                    </div>
                    <ul class="dropdown-menu dropdown-menu-end" style="width: 340px">
                        <div class="align-middle flex-container">
                            <div class="dropdown-title">Notifications</div>
                            <li class="divider flex-child-grow"></li>
                        </div>
                        <li class="px-2 py-2 text-center dropdown-item">
                            <div class="gap-3 flex-container flex-dir-column">
                                <i class="text-5xl fas fa-face-sleeping text-muted"></i>
                                <div style="line-height: 16px">
                                    <div class="text-xs fw-bold text-muted text-uppercase">
                                        No Notifications
                                    </div>
                                    <div class="text-xs text-muted fw-semibold">
                                        You have not recieved any
                                        notifications recently.
                                    </div>
                                </div>
                            </div>
                        </li>
                        <!--
            <li class="dropdown-item">
            <a href="#" class="dropdown-link">
              <div class="gap-1 align-middle flex-container">
                <i
                  class="text-lg text-center fas fa-comments-alt text-info flex-child-grow"
                  style="width: 38px"
                ></i>
                <div class="gap-2 align-middle flex-container w-100">
                  <img
                    src="/assets/img/dummy_headshot.png"
                    class="headshot flex-child-shrink"
                    height="40"
                    width="40"
                  />
                  <div class="min-w-0" style="line-height: 16px">
                    <div class="text-sm text-truncate">
                      <span class="search-keyword">Riley</span>
                      <span class="text-sm text-muted"
                        >replied to your forum post</span
                      >
                    </div>
                    <div class="text-xs text-muted">8 min ago</div>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li class="dropdown-item">
            <a href="#" class="dropdown-link">
              <div class="gap-1 align-middle flex-container">
                <i
                  class="text-lg text-center fas fa-users-medical text-success flex-child-grow"
                  style="width: 38px"
                ></i>
                <div class="gap-2 align-middle flex-container w-100">
                  <img
                    src="/assets/img/dummy_headshot.png"
                    class="headshot flex-child-shrink"
                    height="40"
                    width="40"
                  />
                  <div class="min-w-0" style="line-height: 16px">
                    <div class="text-sm text-truncate">
                      <span class="search-keyword">Nabrious</span>
                      <span class="text-sm text-muted"
                        >sent you a friend request</span
                      >
                    </div>
                    <div class="text-xs text-muted">8 min ago</div>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li class="dropdown-item">
            <a href="#" class="dropdown-link">
              <div class="gap-1 align-middle flex-container">
                <i
                  class="text-lg text-center fas fa-message-lines text-warning flex-child-grow"
                  style="width: 38px"
                ></i>
                <div class="gap-2 align-middle flex-container w-100">
                  <img
                    src="/assets/img/dummy_headshot.png"
                    class="headshot flex-child-shrink"
                    height="40"
                    width="40"
                  />
                  <div class="min-w-0" style="line-height: 16px">
                    <div class="text-sm text-truncate">
                      <span class="search-keyword">Squidward</span>
                      <span class="text-sm text-muted"
                        >sent you a message</span
                      >
                    </div>
                    <div class="text-xs text-muted">8 min ago</div>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li class="dropdown-item">
            <a href="#" class="dropdown-link">
              <div class="gap-1 align-middle flex-container">
                <i
                  class="text-lg text-center fas fa-exchange text-danger flex-child-grow"
                  style="width: 38px"
                ></i>
                <div class="gap-2 align-middle flex-container w-100">
                  <img
                    src="/assets/img/dummy_headshot.png"
                    class="headshot flex-child-shrink"
                    height="40"
                    width="40"
                  />
                  <div class="min-w-0" style="line-height: 16px">
                    <div class="text-sm text-truncate">
                      <span class="search-keyword">Hunter</span>
                      <span class="text-sm text-muted"
                        >sent you a trade request</span
                      >
                    </div>
                    <div class="text-xs text-muted">8 min ago</div>
                  </div>
                </div>
              </div>
            </a>
          </li>
          -->
                        <li class="divider"></li>
                        <!--
            <li class="dropdown-item">
            <a href="#" class="dropdown-link">
              <div class="align-middle flex-container align-justify">
                <div class="gap-2 align-middle flex-container">
                  <i
                    class="text-lg align-middle fas fa-check headshot text-muted flex-container align-center flex-child-grow"
                    style="height: 38px; width: 38px"
                  ></i>
                  <div class="text-sm">Mark All As Read</div>
                </div>
              </div>
            </a>
          </li>
          -->
                        <li class="dropdown-item">
                            <a href="#" class="dropdown-link">
                                <div class="align-middle flex-container align-justify">
                                    <div class="gap-2 align-middle flex-container">
                                        <i class="text-lg align-middle fas fa-bell headshot text-muted flex-container align-center flex-child-grow"
                                            style="
                                                height: 38px;
                                                width: 38px;
                                            "></i>
                                        <div class="text-sm">
                                            Show All Notifications
                                        </div>
                                    </div>
                                    <i class="px-1 text-sm fas fa-chevron-right text-muted"></i>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
<<<<<<< HEAD
            <li v-if="props.auth.user" class="nav-item cell shrink show-for-large">
                <a href="#" class="text-sm nav-link" style="line-height: 20px" v-tippy
                    :content="props.auth.user.coins + ' Coins & ' + props.auth.user.bucks + ' Bucks'"
                    data-tooltip-placement="bottom">
                    <div class="text-warning">
                        <i class="fas fa-coins" style="width: 22px"></i>{{ props.auth.user.coins }}
                    </div>
                    <div class="text-success">
                        <i class="fas fa-money-bill-1-wave" style="width: 22px"></i>{{ props.auth.user.bucks }}
                    </div>
                </a>
            </li>
            <li v-if="props.auth.user" @click="addActiveClass(`user_dropdown`)"
                class="dropdown position-relative nav-item cell shrink ms-1" id="user_dropdown">
=======
            <li v-if="$page.props.auth.user" class="nav-item cell shrink show-for-large">
                <a href="#" class="text-sm nav-link" style="line-height: 20px" data-tooltip-html=""
                    data-tooltip-title="<div>10 Coins</div> <div>10 Bucks</div>" data-tooltip-placement="bottom">
                    <div class="text-warning">
                        <i class="fas fa-coins" style="width: 22px"></i>10
                    </div>
                    <div class="text-success">
                        <i class="fas fa-money-bill-1-wave" style="width: 22px"></i>10
                    </div>
                </a>
            </li>
            <li v-if="$page.props.auth.user" @click="addActiveClass(`user_dropdown`)" class="dropdown position-relative nav-item cell shrink ms-1" id="user_dropdown">
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
                <button class="gap-2 align-middle flex-container squish">
                    <img src="/assets/img/dummy_headshot.png" class="headshot" alt="headshot" width="40">
                    <div class="text-start show-for-large">
                        <div class="text-sm fw-semibold text-body">
<<<<<<< HEAD
                            {{ props.auth.user.display_name }}
                        </div>
                        <div class="text-xs text-muted fw-semibold">
                            {{ '@' + props.auth.user.username }} • Lvl. 2
=======
                            {{ $page.props.auth.user.display_name }}
                        </div>
                        <div class="text-xs text-muted fw-semibold">
                            {{ '@' + $page.props.auth.user.username }} • Lvl. 2
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
                        </div>
                    </div>
                    <i class="text-sm fas fa-chevron-down text-muted show-for-large"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <div class="show-for-small hide-for-large">
                        <div class="gap-2 px-2 py-1 align-middle flex-container">
                            <img src="/assets/img/dummy_headshot.png" class="headshot flex-child-shrink" alt="headshot"
                                width="40">
                            <div class="text-start" style="line-height: 12px">
                                <div class="text-sm fw-semibold">
<<<<<<< HEAD
                                    {{ props.auth.user.display_name }}
                                </div>
                                <div class="mb-1 text-xs text-muted fw-semibold">
                                    {{ '@' + props.auth.user.username }}
=======
                                    {{ $page.props.auth.user.display_name }}
                                </div>
                                <div class="mb-1 text-xs text-muted fw-semibold">
                                    {{ '@' + $page.props.auth.user.username }}
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
                                </div>
                                <div class="text-xs text-muted fw-semibold">
                                    Lvl. 2
                                </div>
                            </div>
                        </div>
                        <li class="dropdown-item">
                            <a href="#" class="dropdown-link dropdown-link-has-icon text-warning"><i
<<<<<<< HEAD
                                    class="fas fa-coins text-warning dropdown-icon"></i>{{ props.auth.user.coins }}
                                Coins</a>
                        </li>
                        <li class="dropdown-item">
                            <a href="#" class="dropdown-link dropdown-link-has-icon text-success"><i
                                    class="fas fa-money-bill-1-wave text-success dropdown-icon"></i>{{ props.auth.user.bucks
                                    }} Cash</a>
=======
                                    class="fas fa-coins text-warning dropdown-icon"></i>{{ usePage().props.auth.user.coins }} Coins</a>
                        </li>
                        <li class="dropdown-item">
                            <a href="#" class="dropdown-link dropdown-link-has-icon text-success"><i
                                    class="fas fa-money-bill-1-wave text-success dropdown-icon"></i>{{ usePage().props.auth.user.cash }} Cash</a>
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
                        </li>
                    </div>
                    <div class="align-middle flex-container">
                        <div class="dropdown-title">Account</div>
                        <li class="divider flex-child-grow"></li>
                    </div>
                    <li class="dropdown-item">
<<<<<<< HEAD
                        <Link :href="route(`user.profile`, { username: props.auth.user.username })"
                            class="dropdown-link dropdown-link-has-icon"><i class="fas fa-user dropdown-icon"></i>Profile
                        </Link>
                    </li>
                    <li class="dropdown-item">
                        <Link :href="route(`avatar.page`)" class="dropdown-link dropdown-link-has-icon"><i
                            class="fas fa-edit dropdown-icon"></i>Character</Link>
                    </li>
                    <li class="dropdown-item">
                        <Link :href="route(`user.settings.page`, { category: 'general' })"
                            class="dropdown-link dropdown-link-has-icon"><i class="fas fa-cogs dropdown-icon"></i>Settings
                        </Link>
                    </li>
                    <li class="divider"></li>
                    <li class="dropdown-item">
                        <Link @click="logout" href="#" class="dropdown-link dropdown-link-has-icon text-danger"><i
                            class="fas fa-sign-out text-danger dropdown-icon"></i>Logout</Link>
=======
                        <Link :href="route(`user.profile`, { username: $page.props.auth.user.username })" class="dropdown-link dropdown-link-has-icon"><i
                                class="fas fa-user dropdown-icon"></i>Profile</Link>
                    </li>
                    <li class="dropdown-item">
                        <Link :href="route(`avatar.page`)" class="dropdown-link dropdown-link-has-icon"><i
                                class="fas fa-edit dropdown-icon"></i>Character</Link>
                    </li>
                    <li class="dropdown-item">
                        <Link :href="route(`user.settings.page`, { category: 'general' })" class="dropdown-link dropdown-link-has-icon"><i
                                class="fas fa-cogs dropdown-icon"></i>Settings</Link>
                    </li>
                    <li class="divider"></li>
                    <li class="dropdown-item">
                        <Link  @click="logout" class="dropdown-link dropdown-link-has-icon text-danger"><i
                                class="fas fa-sign-out text-danger dropdown-icon"></i>Logout</Link>
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
                    </li>
                </ul>
            </li>
        </ul>
    </nav>

    <slot />
</template>

<script lang="ts">
export default {
    methods: {
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
