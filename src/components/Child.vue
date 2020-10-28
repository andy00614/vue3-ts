<template>
  <div>
    Child-------{{ msg2 }}
    ctx.attrs: {{attrs}}
  </div>
</template>

<script lang="ts">
  import { defineComponent, onUpdated, reactive, ref, toRef, toRefs, watch, watchEffect } from "vue";
  export default defineComponent({
    props: {
      msg: String,
    },
    setup(props,ctx) {
    //   console.log("refresh setup");
      console.log(props.msg);
      console.log(ctx.attrs);
      onUpdated(() => {
          console.log(ctx.attrs.attr);
      })
      return {
          msg2: toRef(props,'msg'),
          attrs: ctx.attrs.attr
      }
    },
  });
</script>

<style></style>
