<script lang="ts">
import { defineComponent } from "vue";
import { NAVIGATION_TABS } from "@/components/navigation/tabs/config/navigationTabs.config";
import NavigationTab from "@/components/navigation/tabs/tab/NavigationTab.vue";

export default defineComponent({
  name: "NavigationTabs",
  components: { NavigationTab },
  setup() {
    return {
      NAVIGATION_TABS,
    };
  },
});
</script>

<template>
  <div class="NavigationTabs">
    <NavigationTab
      v-for="tab in NAVIGATION_TABS"
      :label="tab.label"
      :route="tab.route"
    />
  </div>
</template>

<style>
.NavigationTabs {
  display: flex;
}
</style>
