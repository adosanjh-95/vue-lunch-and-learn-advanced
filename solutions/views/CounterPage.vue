<template>
  <Counter />
  <p>{{ $route.params.initial }}</p>
  <p>{{ initial }}</p>
  <button @click="onClick">Click me</button>
</template>

<script>
import Counter from "../components/CounterComposition.vue";
export default {
  props: {
    initial: {
      type: String,
      required: true,
    },
  },
  components: {
    Counter,
  },
  methods: {
    onClick() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
