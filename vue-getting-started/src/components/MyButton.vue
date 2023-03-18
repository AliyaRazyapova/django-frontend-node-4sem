<template>
  <button>
    <slot />
  </button>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style scoped>
  button{
    background: var(--vt-c-black);
    color: var(--color-text);
    border: 1px solid var(--color-border);
    padding: 5px 10px;
    border-radius: 3px;
  }

  button:hover {
    border-color: var(--color-border-hover);
  }
</style>