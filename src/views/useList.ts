import { ref } from 'vue';

export function useList() {
    const list = ref([])
    async function getData() {
        const data = await fetch('http://localhost:4001/joke')
        const res = await data.json()
        list.value = res.result;
    }
    return {
        list,
        getData
    }
}