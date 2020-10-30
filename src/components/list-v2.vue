<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.hashId">
        {{ item.content }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    //   data() {
    //       return {
    //           list: [],
    //           loading: false
    //       }
    //   },
    //   created() {
    //       this.getData();
    //   },
    //   methods: {
    //       async getData() {
    //           const data = await fetch('http://localhost:4001/joke')
    //           const res = await data.json()
    //           this.list = res.result;
    //       }
    //   },
      setup() {
          const list = ref([])
          const getData = async () => {
            const data = await fetch('http://localhost:4001/joke')
            const res = await data.json()
            list.value = res.result;
          }
          getData();
          return {
              list
          }
      }
  })
</script>

<style>
  ul {
    list-style: inside;
  }
  li {
    margin: 10px;
  }
</style>
