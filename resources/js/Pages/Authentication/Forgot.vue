<script setup lang="ts">
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import { route, current } from "momentum-trail";

</script>

<template>
<Navbar>
<section class="hero is-fullheight">
   <div class="hero-body">
     <div class="container">
      <div class="columns is-centered">
        <div class="column is-6-tablet is-5-desktop is-5-widescreen">
         <div class="box">
         <div class="is-size-5">Account Recovery</div>
         <div class="mb-3 is-size-6 has-text-grey-light">Reset your password</div>
         <form @submit.prevent="submit">
         <fieldset>
            <div class="field">
            <label for="username" class="label">E-mail</label>
            <div class="control has-icons-left">
            <input type="text" placeholder="Email" class="input">
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
       </div>
    </div>
       </fieldset>
    </form>
</div>
     <center><a :href="route('auth.login.page')">Already have an account?</a></center>
    </div>
   </div>
  </div>
 </div>
</section>
</Navbar>
</template>
