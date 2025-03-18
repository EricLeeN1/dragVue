import { defineStore } from "pinia";

const useMainStore = defineStore({
  id: "main",
  state: () => ({
    name: "超级管理员",
    components: [
      {
        id: "1",
        x: 50,
        y: 50,
        width: 100,
        height: 50,
        fill: "red",
        draggable: true,
      },
      {
        id: "2",
        x: 200,
        y: 100,
        width: 100,
        height: 50,
        fill: "green",
        draggable: true,
      },
    ], // 画布上的组件
    availableComponents: [
      // 可用的组件列表
      { id: 1, name: "Button", type: "Button", x: 0, y: 0 },
      { id: 2, name: "Input", type: "Input", x: 0, y: 0 },
      { id: 3, name: "Label", type: "Label", x: 0, y: 0 },
    ],
  }),
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    addComponent(component) {
      this.components.push(component);
    },
    updateComponentPosition({ id, x, y }) {
      const component = this.components.find((c) => c.id === id);
      if (component) {
        component.x = x;
        component.y = y;
      }
    },
    async updateKey(key, data: string) {
      this[key] = data;
    },
  },
});

export default useMainStore;
