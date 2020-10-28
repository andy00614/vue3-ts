<template>
  <div class="hello">
    {{r}}
    <button @click="onChange">change r</button>
    <!-- <child :msg="r.info.person.name" :attr="attr"></child> -->
    <div>
      renderOnDom:{{renderOnDom}}
    </div>
    <div>
      noRenderDom:{{noRenderDom}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch, watchEffect } from 'vue';
import Child from './Child.vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    Child
  },
  setup() {
    const r = ref({
      info: {
        person: {
          name: 'andy'
        }
      }
    })

    const renderOnDom = ref('')
    const noRenderDom = ref('')

    const onChange = () => {
      renderOnDom.value += 'a'
      noRenderDom.value += 'b'
    }

    return {
      r,
      onChange,
      renderOnDom,
      noRenderDom
    }
    
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
