<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "@/components/Navigation/NavigationBar.vue";

export default defineComponent({
  name: "App",
  components: { NavigationBar },
});
</script>

<template>
  <NavigationBar />
  <RouterView v-slot="{ Component }">
    <div class="Home">
      <Suspense>
        <Component :is="Component" />
      </Suspense>
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
