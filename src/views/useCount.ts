import { ref } from 'vue'

export function useCount() {
    const count = ref(0);
    const changeCount = () => {
        count.value += 1;
    }
    return {
        count,
        changeCount
    }
}
