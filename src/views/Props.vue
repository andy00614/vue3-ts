<template>
  <div>
      <props-child :count="count" :ctxVal="ctxVal"></props-child>
      <button @click="() => count += 1">add count</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import PropsChild from './Props-Child.vue'
export default defineComponent({
    components: {
        PropsChild
    },
    setup() {
        const count = ref(2)
        const ctxVal = ref('a')

        setInterval(() => {
            ctxVal.value += '!'
        }, 2000);
        
        return {
            count,
            ctxVal
        }
    }
})
</script>

<style>

</style>