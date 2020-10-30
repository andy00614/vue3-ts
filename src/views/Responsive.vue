<template>
  <div>
    <h1>响应式</h1>
    <div>count: {{ count }}</div>

    <div>info-name: {{ info.name }}</div>

    <div>info-age: {{ info.age }}</div>

    <ul>
      <li v-for="item in list" :key="item.hashId">
        {{ item.content }}
      </li>
    </ul>

    <button @click="changeCount">change count</button>
    <button @click="changeInfo">change Info</button>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, reactive, ref } from "vue";

  export interface Person {
    name: string;
    age: number;
    [key: string]: any;
  }

  export default defineComponent({
    setup() {
      const count = ref(0);
      const doubleCount = computed(() => count.value * 2);
      const changeCount = () => {
        count.value += 1;
      };

      const list = ref([]);
      async function getData() {
        const data = await fetch("http://localhost:4001/joke");
        const res = await data.json();
        list.value = res.result;
      }
      getData();

      const info = reactive<Person>({
        name: "abc",
        age: 18,
      });
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
