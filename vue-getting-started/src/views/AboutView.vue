<script setup>
import MyButton from "@/components/MyButton.vue";
import MyInput from "@/components/MyInput.vue";
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <hr>
    <p>Count: {{count}}</p>
    <p>text: {{text}}</p>
    <MyButton @click="increment">Button from App component</MyButton>
    <MyInput @change="changeHandler" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      text: null
    };
  },
  methods: {
    increment() {
      console.log("INCREMENT");
      this.count++;
    },
    changeHandler(value) {
      this.text = value;
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
