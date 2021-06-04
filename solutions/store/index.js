import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    history: [],
  },
  getters: {
    getHistoryLength(state) {
      return state.history.length;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    addToHistory(state, action) {
      state.history.push(action.toUpperCase());
    },
    clearHistory(state) {
      state.history = [];
    },
    clearCount(state) {
      state.count = 0;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
      context.commit("addToHistory", "increment");
    },
    decrement(context) {
      context.commit("decrement");
      context.commit("addToHistory", "decrement");
    },
    reset(context) {
      context.commit("clearHistory");
      context.commit("clearCount");
    },
  },
  modules: {},
});
