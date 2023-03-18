<template>
  <input type="text" @change="changeHandler">
</template>

<script>
export default {
  name: "MyInput",
  methods: {
    changeHandler(event) {
      event.stopImmediatePropagation();
      const text = event.target.value;
      this.$emit("change", text);
    }
  }
}
</script>