<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeNav",
  setup() {
    return {};
  },
});
</script>

<template>
  <div style="display: flex; align-content: center; height: 100%">
    <RouterLink to="/" class="NavigationBar__Home">
      <h4 :style="{ marginTop: '0', marginBottom: '0' }">Fuego</h4>
    </RouterLink>
  </div>
</template>

<style>
.NavigationBar__Home {
  display: flex;
  align-content: center;
  color: black;
  cursor: pointer;
  text-decoration: none;
  margin-right: 12px;
}
</style>
