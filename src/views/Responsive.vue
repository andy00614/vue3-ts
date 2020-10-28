<template>
  <div>
    <h1>响应式</h1>
    <div>count: {{ count }}</div>

    <div>info-name: {{ info.name }}</div>

    <div>info-age: {{ info.age }}</div>

    <button @click="changeCount">change count</button>
    <button @click="changeInfo">change Info</button>
    {{ info }}
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref } from "vue";

  export interface Person {
    name: string;
    age: number;
    [key: string]: any;
  }

  export default defineComponent({
    setup() {
      const info = reactive<Person>({
        name: "andy",
        age: 18,
      });

      const count = ref(0);

      const changeCount = () => {
        count.value += 1;
      };

      const changeInfo = () => {
        info.name += "!".repeat(count.value);
        info.age += count.value;
      };

      return {
        count,
        info,
        changeCount,
        changeInfo,
      };
    },
  });
</script>

<style></style>
