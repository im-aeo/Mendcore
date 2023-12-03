<script setup lang="ts">
import { route } from "momentum-trail";
import { usePage, router } from "@inertiajs/vue3";

import axios from "axios";

const locale_active = usePage().props.locale;
const locales = usePage().props.locales;
</script>

<template>
<<<<<<< HEAD
    <div class="modal" id="LanguageSettings">
        <div class="modal-card modal-card-body">
            <div class="section-borderless">
                <div class="gap-2 align-middle flex-container align-justify">
                    <div class="text-lg fw-semibold">
                        Change Language
                    </div>
                    <button @click="showModal('LanguageSettings')" class="btn-circle" data-toggle-modal="#LanguageSettings"
                        style="margin-right: -10px">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div class="section-borderless">
                <div class="section">
                    <div id="theme-switcher-container" class="grid-x grid-margin-x grid-padding-y">
                        <div v-for="(name, locale) in locales" :key="locale" class="cell large-6">
                            <div @click="setLocale(locale)" :class="{ 'language-active': locale_active === locale }"
                                class="squish card card-body card-inner mb-lg-0" style="cursor: pointer;">
                                <div class="align-middle">
                                    <div class="gap-2 align-start flex-container" style="min-width: 0">
                                        <div class="selection-circle language"><i class=""
                                                :class="{ 'fa-solid fa-check': locale_active === locale }"></i></div>
                                        <div class="fw-semibold text-language text-truncate">
                                            {{ name }}
                                        </div>
                                    </div>
=======
<div class="modal" id="LanguageSettings">
    <div class="modal-card modal-card-body">
        <div class="section-borderless">
            <div class="gap-2 align-middle flex-container align-justify">
                <div class="text-lg fw-semibold">
                    Change Language
                </div>
                <button @click="showModal('LanguageSettings')" class="btn-circle" data-toggle-modal="#following-modal"
                    style="margin-right: -10px">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
        <div class="section-borderless">
            <div class="section">
                <div id="theme-switcher-container" class="grid-x grid-margin-x grid-padding-y">
                    <div v-for="(name, locale) in locales" :key="locale" class="cell large-6">
			<div @click="setLocale(locale)" :class="{'language-active': locale_active === locale}" class="squish card card-body card-inner mb-lg-0" style="cursor: pointer;">
                        <div class="align-middle">
                            <div class="gap-2 align-start flex-container" style="min-width: 0">
                                    <div class="selection-circle language"><i class="fa-solid fa-check"></i></div>
                                <div class="text-lg fw-semibold text-truncate">
                                    {{ name }}
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
                                </div>
                            </div>
                        </div>
                    </div>
<<<<<<< HEAD
=======
                    </div>
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
                </div>
            </div>
        </div>
    </div>
<<<<<<< HEAD
=======
</div>
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
</template>
<script lang="ts">
export default {
    props: {
        locales: Object, // Receive the locales data from Laravel
    },
    methods: {
        showModal(modalId: string): void {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.toggle("active");
            }
        },
<<<<<<< HEAD
        setLocale(locale) {
            router.get(route(`auth.language`, { language: locale }))
        },
=======
	setLocale(locale) {
	    router.get(route(`auth.language`, { language: locale }))
	},
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
    }
};
</script>
