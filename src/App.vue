<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "@/components/navigation/NavigationBar.vue";

export default defineComponent({
  name: "App",
  components: { NavigationBar },
});
</script>

<template>
  <NavigationBar />
  <RouterView
    v-slot="{ Component }"
    :style="{
      display: 'flex',
      flexDirection: 'row',
      height: '100%',
    }"
  >
    <div
      :style="{
        display: 'flex',
        flexDirection: 'row',
      }"
    >
      <div class="Home">
        <Suspense>
          <Component :is="Component" />
        </Suspense>
      </div>
    </div>
  </RouterView>
</template>

<style>
@font-face {
  font-family: "santral-light";
  src: url("./fonts/santral-light.otf") format("opentype");
}
body {
  font-family: "santral-light", sans-serif;
}
.body-1 {
  display: block;
  font-size: 0.67em;
  font-weight: normal;
}
.Home {
  width: 100%;
  height: 100%;
}
</style>
