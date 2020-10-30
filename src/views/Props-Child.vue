<template>
  <div>
      Props-child
      <div>
          count: {{count}}
      </div>

      <div>
          doubleCount: {{doubleCount}}
      </div>

      <div>
          ctxVal: {{ctxVal}}
      </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, onUpdated } from 'vue'
export default defineComponent({
    props: {
        count: {
            type: Number,
            default: 2
        }
    },
    setup(props,ctx) {
        const {count} = props
        const doubleCount = computed(() => count * 2)
        onUpdated(() => {
            console.log(ctx.attrs.ctxVal);
        }) 
        return {
            doubleCount,
            ctxVal: ctx.attrs.ctxVal
        }
    }
})
</script>

<style>

</style>