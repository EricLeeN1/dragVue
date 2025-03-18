<template>
  <div class="component-panel">
    <h3>组件列表</h3>
    <!-- <draggable
      handle=".item-gallery-list"
      :list="availableComponents"
      class="gallery-list flex"
      animation="500"
      item-key="name"
      @end="onEnd"
    >
      <template #item="{ element }">
        <div class="item-gallery-list">
          <img class="db" :src="element.url" alt="" />
          <el-input v-model="element.intr" placeholder="图示" />
        </div>
      </template>
    </draggable> -->
  </div>
</template>

<script setup>
/*
draggable 对CSS样式没有什么要求万物皆可拖拽
:list="state.list"         //需要绑定的数组
ghost-class="ghost"        //被替换元素的样式
chosen-class="chosenClass" //选中元素的样式
animation="300"            //动画效果
@start="onStart"           //拖拽开始的事件
@end="onEnd"               //拖拽结束的事件
*/
// import draggable from "vuedraggable";
import useMainStore from "@/stores/main";
const mainStore = useMainStore();
const availableComponents = computed(() => mainStore.availableComponents);
//列的名称
const headers = ["id", "name", "intro"];

const onDragEnd = (event) => {
  if (event.to.classList.contains("canvas-area")) {
    const component = availableComponents.value[event.oldIndex];
    mainStore.addComponent(component);
  }
};

//拖拽开始的事件
const onStart = () => {
  console.log("开始拖拽");
};

//拖拽结束的事件
const onEnd = () => {
  console.log("结束拖拽");
};
</script>

<style scoped lang="scss">
.component-panel {
  width: 200px;
  padding: 10px;
  border-right: 1px solid #ccc;
}
.component-item {
  padding: 10px;
  margin: 5px;
  background: #f0f0f0;
  cursor: grab;
}
</style>
