<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <list-v2></list-v2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import ListV2 from '../components/list-v2.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
    ListV2
  },
});
</script>
