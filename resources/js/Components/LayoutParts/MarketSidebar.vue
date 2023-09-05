<template>
  <div>
    <div class="mb-2 text-xl fw-semibold">Market</div>
    <Link v-if="$page.props.auth.user"  class="mb-2 btn btn-success btn-xs btn-block forum-button">
      New Item
    </Link>
    <ul class="tabs flex-dir-column">
      <li class="tab-item">
        <a
          class="tab-link squish"
          v-for="category in categories"
          :href="temporaryLink"
          :key="category.name"
          @click="() => selectCategory(category)"
          :class="{ active: selectedCategory === category }"
        >
          <i :class="category.icon"></i>&nbsp;{{ category.name }}
    </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted, defineEmits } from 'vue';
interface Category {
  name: string;
  icon: string;
}

interface Props {
  categories: Category[];
}

const { categories } = defineProps<Props>();
const selectedCategory = ref<Category | null>(null);
const emit = defineEmits(); // Define the emit function to emit custom events

// Function to handle category selection
function selectCategory(category: Category) {
  selectedCategory.value = category;
  // Emit the 'category-selected' event with the selected category
  emit('category-selected', category);
}

const temporaryLink = '#';


// Trigger the selection on the first category when the component is mounted
onMounted(() => {
  if (categories.length > 0) {
    selectCategory(categories[0]);
  }
});
</script>
