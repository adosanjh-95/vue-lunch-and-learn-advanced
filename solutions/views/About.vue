<template>
  <div class="about">
    <h1>This is an about page</h1>
    <slot-example>
      <template #header="slotProps">{{ slotProps.title }}</template>
      Default
      <template #footer>Footer</template>
    </slot-example>
  </div>
</template>

<script>
import SlotExample from "../components/SlotExample";

export default {
  components: {
    SlotExample,
  },
};
</script>
