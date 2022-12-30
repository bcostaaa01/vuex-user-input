import { createStore } from "vuex";

export default createStore({
  state: {
    items: [],
  },
  getters: {},
  mutations: {
    addItem(state, item) {
      state.items.push(item);
    },
    removeItem(state, index) {
      state.items = state.items.filter((item, i) => i !== index);
    },
  },
  actions: {
    addItem({ commit }, item) {
      commit("addItem", item);
    },
    removeItem({ commit }, index) {
      commit("removeItem", index);
    },
  },
  modules: {},
});
