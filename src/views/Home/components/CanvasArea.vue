<template>
  <div>
    <v-stage :config="stageConfig">
      <v-layer>
        <!-- <v-circle :config="configCircle"></v-circle> -->
        <v-rect
          v-for="(rect, index) in rectangles"
          :key="index"
          :config="rect"
          @dragend="handleDragEnd(index, $event)"
        />
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    // 画布配置
    const stageConfig = ref({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // 矩形数据
    const rectangles = ref([
      {
        x: 50,
        y: 50,
        width: 100,
        height: 50,
        fill: "red",
        draggable: true,
      },
      {
        x: 200,
        y: 100,
        width: 100,
        height: 50,
        fill: "green",
        draggable: true,
      },
    ]);

    // 拖拽结束事件
    const handleDragEnd = (index, event) => {
      const { x, y } = event.target.attrs;
      rectangles.value[index].x = x;
      rectangles.value[index].y = y;
      console.log(`矩形 ${index} 被拖拽到 (${x}, ${y})`);
    };

    return {
      stageConfig,
      rectangles,
      handleDragEnd,
    };
  },
};
</script>

<style>
/* 可选样式 */
</style>
