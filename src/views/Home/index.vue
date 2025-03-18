<template>
  <div class="app">
    <ComponentPanel />
    <CanvasArea />
  </div>
</template>

<script setup lang="ts">
import ComponentPanel from "./components/ComponentPanel.vue";
import CanvasArea from "./components/CanvasArea.vue";
</script>

<style>
.app {
  display: flex;
  height: 100vh;
}
</style>
