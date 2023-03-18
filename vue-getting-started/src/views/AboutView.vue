<script setup>
import MyButton from "@/components/MyButton.vue";
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <hr>
    <p>Count: {{count}}</p>
    <MyButton @click="increment">Button from App component</MyButton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      console.log("INCREMENT");
      this.count++;
    }
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
