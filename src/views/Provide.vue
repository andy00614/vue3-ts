<template>
  <div>
    <inject />
    <button @click="changeInfo">change info</button>
  </div>
</template>

<script>
  import { defineComponent, provide, reactive } from "vue";
  import Inject from "./Inject.vue";
  export default defineComponent({
    components: {
      Inject,
    },
    setup() {
      const info = reactive({
        name: "abc",
        age: 12,
      });
      provide("info", info);
      const changeInfo = () => {
          info.name += '!'
          info.age += 1;
      }
      return {
          changeInfo
      }
    },
  });
</script>

<style></style>
