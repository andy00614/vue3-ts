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

<script>
  import { defineComponent, reactive, ref } from "vue";

  export default defineComponent({
    data() {
        return {
            info: {
                name: 'abc',
                age: 18
            },

            count:0,

            list:[]
        }
    },
    created() {
        getData()
    },
    computed: {
        double() {
            return this.count * 2
        }
    },
    methods: {
        changeCount() {
            this.count += 1;
        },

        changeInfo() {
            info.name += "!".repeat(count.value);
            info.age += count.value;
        },
        
        async getData() {
            const data = await fetch('http://localhost:4001/joke')
            const res = await data.json()
            list.value = res.result;
        }
    }
  });
</script>

<style></style>
