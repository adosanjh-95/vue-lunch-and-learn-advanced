import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

export const useCounter = () => {
  const count = ref(0);
  const history = ref([]);

  const increment = () => {
    count.value++;
    history.value.push("Increment");
  };

  const decrement = () => {
    count.value--;
    history.value.push("Decrement");
  };

  const reset = () => {
    count.value = 0;
    history.value = [];
  };

  const getCountValueClasses = computed(() => {
    return [
      "count__value",
      {
        "count__value--positive": count.value > 0,
        "count__value--negative": count.value < 0,
      },
    ];
  });

  const historyExists = computed(() => history.value.length > 0);

  return {
    count,
    history,
    increment,
    decrement,
    reset,
    getCountValueClasses,
    historyExists,
  };
};
