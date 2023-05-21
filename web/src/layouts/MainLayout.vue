<template>
  <div class="layout">
    <header class="layout__header">
      <h1>Header</h1>
    </header>
    <main class="layout__main">
      <router-view></router-view>
    </main>
    <footer class="layout__footer">Footer</footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
});
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.layout__header {
  background-color: #ccc;
  padding: 20px;
}

.layout__main {
  flex: 1;
}

.layout__footer {
  padding: 20px;
  background-color: #ccc;
}
</style>
