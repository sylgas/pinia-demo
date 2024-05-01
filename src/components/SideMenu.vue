<script lang="ts">
import { useStore } from "vuex";
import { onMounted, ref } from "vue";

export default {
  name: "SideMenu",
  setup() {
    const store = useStore();

    const selectedTab = ref("tab1");
    const selectTab = (newTab: string) => {
      selectedTab.value = newTab;
      store.dispatch("updateSelectedTab", selectedTab.value);
    };

    onMounted(() => {
      store.dispatch("updateSelectedTab", selectedTab);
    });

    return {
      selectedTab,
      selectTab,
    };
  },
};
</script>

<template>
  <div class="side-menu" :style="{ backgroundColor: '#ccc' }">
    <ul>
      <li @click="selectTab('tab1')">Tab 1</li>
      <li @click="selectTab('tab2')">Tab 2</li>
      <li @click="selectTab('tab3')">Tab 3</li>
    </ul>
  </div>
</template>

<style scoped>
.side-menu {
  width: 200px;
  background-color: #f0f0f0;
  border-left: yellow;
  color: black;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 10px;
  cursor: pointer;
}

li:hover {
  background-color: #8a8989;
}
</style>
