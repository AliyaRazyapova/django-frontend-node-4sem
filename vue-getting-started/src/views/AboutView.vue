<script setup>
import MyButton from "@/components/MyButton.vue";
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>

    <hr>
    <p>Count: {{count}}</p>
    <MyButton>Button from App component</MyButton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  }
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
