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
  import { defineComponent } from "vue";
  import { useCount } from './useCount'
  import { useInfo } from './useInfo'
  import { useList } from './useList'

  export default defineComponent({
    setup() {
        const { count, changeCount } = useCount()
        const { info, changeInfo } = useInfo(count)
        const { getData: getJokeList,list } = useList()
        getJokeList();
        return {
            count,
            changeCount,
            info,
            changeInfo,
            list
        }
    },
  });
</script>

<style></style>
