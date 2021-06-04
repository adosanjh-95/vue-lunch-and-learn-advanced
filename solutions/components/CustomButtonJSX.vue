<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  render() {
    return (
      <button
        class="cta"
        disabled={this.disabled}
        onClick={() => this.$emit("on-click")}
        v-slots="default"
      >
        {this.$slots.default()}
      </button>
    );
  },
};
</script>

<style scoped>
.cta {
  padding: 20px 40px;
  font-size: 1.5rem;
  background-color: lightblue;
  outline: none;
  border: none;
  cursor: pointer;
}
.cta:hover {
  opacity: 0.5;
  text-decoration: none;
}
</style>
