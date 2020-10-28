<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item.hashId">
                {{item.content}}
            </li>
        </ul>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            list: false,
            loading: false
        }
    },
    created() {
        this.getData();
    },
    methods: {
        async getData() {
            const data = await fetch('http://localhost:4001/joke')
            const res = await data.json()
            this.list = res.result;
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