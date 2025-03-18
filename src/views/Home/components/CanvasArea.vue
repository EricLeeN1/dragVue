<template>
  <div class="canvas-area">
    <v-stage :config="stageConfig">
      <v-layer>
        <v-rect
          v-for="component in components"
          :key="component.id"
          :config="component"
          @dragend="onDragEnd(component, $event)"
        />
      </v-layer>
    </v-stage>
  </div>
</template>

<script setup lang="ts">
import useMainStore from "@/stores/main";
const mainStore = useMainStore();
const components = computed(() => mainStore.components);
const stageConfig = computed(() => {
  return {
    width: 800,
    height: 600,
  };
});
const onDragEnd = (component, event) => {
  console.log("onDragEnd", event);
  const { x, y } = event.target.attrs;
  console.log("onDragEnd", x, y);
  mainStore.updateComponentPosition({
    id: component.id,
    x,
    y,
  });
};
</script>

<style scoped lang="scss">
.canvas-area {
  flex: 1;
  padding: 10px;
}
</style>
