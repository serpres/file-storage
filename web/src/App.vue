<template>
  <MainLayout></MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainLayout from '@/layouts/MainLayout.vue'; // Импортируем компонент Layout

export default defineComponent({
  name: 'App',
  components: {
    MainLayout,
  },
});
</script>

<style scoped></style>
