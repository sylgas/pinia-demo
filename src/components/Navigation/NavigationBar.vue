<script lang="ts">
import { defineComponent } from "vue";
import ShoppingBag from "@/components/Navigation/ShoppingBag.vue";
import NavigationTabs from "@/components/Navigation/tabs/NavigationTabs.vue";
import HomeNav from "@/components/Navigation/HomeNav.vue";

export default defineComponent({
  name: "NavigationBar",
  components: { HomeNav, NavigationTabs, ShoppingBag },
});
</script>

<template>
  <div class="NavigationBar">
    <div
      :style="{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        borderBottom: '2px solid black',
        justifyContent: 'space-between',
      }"
    >
      <div class="NavigationBar__Nav">
        <HomeNav />
        <NavigationTabs />
      </div>
      <ShoppingBag />
    </div>
  </div>
</template>

<style scoped>
.NavigationBar {
  display: flex;
  justify-content: space-between;
  height: 68px;
  align-items: center;
  padding-right: 16px;
  padding-left: 16px;
  background-color: white;
}

.NavigationBar__Nav {
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
}
</style>
