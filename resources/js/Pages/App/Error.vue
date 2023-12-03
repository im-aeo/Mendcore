<script setup lang="ts">
<<<<<<< HEAD
import { defineProps, computed } from 'vue'
=======
import { defineProps,computed } from 'vue'
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
import Navbar from '@/Components/LayoutParts/Navbar.vue';
import Sidebar from '@/Components/LayoutParts/Sidebar.vue';
import Footer from '@/Components/LayoutParts/Footer.vue';
import { route, current } from 'momentum-trail';

defineProps<{
<<<<<<< HEAD
    status: number
    adonis_error: string
    message: string
    icon: string
=======
  status: number
  adonis_error: string
  message: string
  icon: string
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
}>()

</script>

<template>
<<<<<<< HEAD
    <Navbar />
=======
  <Navbar/>
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
    <Sidebar>
        <div class="cell medium-7">
            <div class="card text-center">
                <div class="card-body">
<<<<<<< HEAD
                    <i class="mb-3" :class="icon" style="font-size:80px;"></i>
                    <h3>{{ status }}</h3>
                    <p>{{ message }}</p>
=======
		<i class="mb-3" :class="icon" style="font-size:80px;"></i>
                    <h3>{{ status }}</h3>
		    <p>{{ message }}</p>
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
                </div>
            </div>
            <p class="mt-2 text-muted">
                <i>
                    {{ adonis_error }}
                </i>
            </p>
<<<<<<< HEAD
        </div>
    </Sidebar>
    <Footer />
=======
	</div>
    </Sidebar>
<Footer/>
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
</template>
