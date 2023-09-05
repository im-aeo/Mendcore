<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import { route, current } from "momentum-trail";
import { ethers } from "ethers";
import FlashMessages from '@/Components/Messages/FlashMessages.vue'

import axios from "axios";

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const ConfirmingAuth = ref(false);

const form = useForm({
    username: '',
    password: '',
    remember: false,
});
const submit = () => {
axios.get(`/sanctum/csrf-cookie`).then(response => {
    form.post(route(`auth.login.validate`), {
        onFinish: () => form.reset('password'),
    });
});
};
const ConfirmUserAuth = () => {
    ConfirmingAuth.value = true;
};
</script>
<template>
<main class="container grid-x w-50 align-center">
            <FlashMessages/>
        <div class="cell medium-4">
            <div class="mb-2">
                <div class="text-2xl fw-semibold">Log In</div>
                <div class="text-sm text-muted fw-semibold">
                    Don't have an account?
                    <a href="#" class="d-inline-block squish">Sign Up</a>
                </div>
            </div>
            <div></div>
            <div class="card card-body">
		  <form @submit.prevent="submit">
                    <div class="mb-2">
                        <div :class="{ 'text-danger': form.errors.username }" class="text-xs fw-bold text-muted text-uppercase">
                            Username
                        </div>
                        <input type="text" v-model="form.username" class="form"
                            placeholder="Username..." />
                        <div v-if="form.errors.username" class="text-xs text-danger fw-semibold">
                            {{ form.errors.username }}
                        </div>
                    </div>
                    <div class="mb-2">
                        <div :class="{ 'text-danger': form.errors.password }"
                            class="text-xs fw-bold text-muted text-uppercase">
                            Password
                        </div>
                        <input type="password" v-model="form.password" class="mb-2 form"
                            placeholder="Password..." />
                        <div v-if="form.errors.password" class="text-xs text-danger fw-semibold">
                            {{ form.errors.password }}
                        </div>
                    </div>
                    <div class="align-middle flex-container align-justify">
                        <input type="submit" class="btn btn-success" v-bind:class="{ 'is-loading': ConfirmingAuth }" :disabled="form.processing"
                            @click="ConfirmUserAuth" value="Log In" />
                        <a href="#" class="text-sm fw-semibold squish">Forgot Password?</a>
                    </div>
		</form>
                <div class="mx-1 my-3 divider"></div>
                    <a  as="button" :href="route(`auth.login.google`)" class="my-2 mt-2 btn btn-secondary btn-block">
                        <i class="fab fa-google me-1"></i>
                        Log In with Google
                    </a>

                <button class="mt-2 btn btn-discord btn-block">
                    <i class="fab fa-discord me-1"></i> Log In with
                    Discord
                </button>
            </div>
        </div>
        </main>
</template>
