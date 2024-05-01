<script lang="ts">
import NavigationBar from './components/NavigationBar.vue';
import SideMenu from './components/SideMenu.vue';
import Content from './components/Content.vue';
import {defineComponent, onMounted, ref} from "vue";
import {useStore} from "vuex";

export default defineComponent({
  name: 'App',
  components: {
    NavigationBar,
    SideMenu,
    Content
  },
  setup() {
  }
})
</script>

<template>
  <div id="app">
    <NavigationBar />
    <div class="flex container row">
      <SideMenu/>
      <Content/>
    </div>
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
}

.container {
  display: flex;
  flex: 1;
}
</style>