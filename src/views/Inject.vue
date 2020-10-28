<template>
  <div>inject name: {{ useInfo.name }} age: {{ useInfo.age }}</div>
</template>

<script>
  import { defineComponent, inject, provide, reactive } from "vue";
  export default defineComponent({
    setup() {
      const useInfo = inject("info");
      return {
        useInfo,
      };
    },
  });
</script>

<style></style>
