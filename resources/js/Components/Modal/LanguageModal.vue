<script setup lang="ts">
import { route } from "momentum-trail";
</script>

<template>
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

                    <Link class="cell large-6" as="div" :href="route(`auth.language`, { language: 'en' })">
                    <div class="squish card card-body card-inner mb-lg-0" style="cursor: pointer;">
                        <div class="align-middle">
                            <div class="gap-2 align-start flex-container" style="min-width: 0">
                                <div class="flex-wrap col-md-4 d-flex justify-content-center align-content-start"
                                    style="flex-direction: column;">
                                    <div class="selection-circle"></div>
                                </div>
                                <div class="text-lg fw-semibold text-truncate">
                                    English
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>

                    <Link class="cell large-6" as="div" :href="route(`auth.language`, { language: 'es' })">
                    <div class="squish card card-body card-inner mb-lg-0 language-active" style="cursor: pointer;">
                        <div class="align-middle">
                            <div class="gap-2 align-start flex-container" style="min-width: 0">
                                <div class="flex-wrap col-md-4 d-flex justify-content-center align-content-start"
                                    style="flex-direction: column;">
                                    <div class="selection-circle"></div>
                                </div>
                                <div class="text-lg fw-semibold text-truncate">
                                    Español
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link class="cell large-6" as="div" :href="route(`auth.language`, { language: 'jp' })">
                    <div class="squish card card-body card-inner mb-lg-0" style="cursor: pointer;">
                        <div class="align-middle">
                            <div class="gap-2 align-start flex-container" style="min-width: 0">
                                <div class="flex-wrap col-md-4 d-flex justify-content-center align-content-start"
                                    style="flex-direction: column;">
                                    <div class="selection-circle"></div>
                                </div>
                                <div class="text-lg fw-semibold text-truncate">
                                    日本語
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>

                    <Link class="cell large-6" as="div" :href="route(`auth.language`, { language: 'th' })">
                    <div class="squish card card-body card-inner mb-lg-0" style="cursor: pointer;">
                        <div class="align-middle">
                            <div class="gap-2 align-start flex-container" style="min-width: 0">
                                <div class="flex-wrap col-md-4 d-flex justify-content-center align-content-start"
                                    style="flex-direction: column;">
                                    <div class="selection-circle"></div>
                                </div>
                                <div class="text-lg fw-semibold text-truncate">
                                    คนไทย
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>

                    <Link class="cell large-6" as="div" :href="route(`auth.language`, { language: 'ka' })">
                    <div class="squish card card-body card-inner mb-lg-0" style="cursor: pointer;">
                        <div class="align-middle">
                            <div class="gap-2 align-start flex-container" style="min-width: 0">
                                <div class="flex-wrap col-md-4 d-flex justify-content-center align-content-start"
                                    style="flex-direction: column;">
                                    <div class="selection-circle"></div>
                                </div>
                                <div class="text-lg fw-semibold text-truncate">
                                    ქართული
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>

                </div>

            </div>
        </div>
    </div>
</div>
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
    }
};
</script>
