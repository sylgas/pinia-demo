<script lang="ts">
import { defineComponent } from "vue";
import { NAVIGATION_TABS } from "../config/navigationTabs.config";
import { useStore } from "vuex";

export default defineComponent({
  name: "NavigationTab",
  props: {
    label: {
      required: true,
      type: String,
    },
    route: {
      required: true,
      type: String,
    },
  },
  setup() {
    const store = useStore();
    return { NAVIGATION_TABS };
  },
});
</script>

<template>
  <div class="NavigationTab">
    <RouterLink :to="route" class="NavigationTab__item">
      <span class="NavigationTab__label body-1">{{ label }}</span>
    </RouterLink>
  </div>
</template>

<style>
.NavigationTab {
  display: flex;
  align-content: center;
  padding-left: 4px;
  padding-right: 4px;
}
.NavigationTab__item {
  display: block;
  align-content: center;
  color: black;
  cursor: pointer;
  text-decoration: none;

  .NavigationTab__label {
    padding: 2px !important;
  }

  :hover {
    color: white;
    background-color: black;
  }
}
</style>
