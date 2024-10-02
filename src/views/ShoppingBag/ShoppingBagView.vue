<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/Card/Card.vue";

export default defineComponent({
  components: { Card },
});
</script>

<template>
  <Suspense> <div class="Bag">Shopping Bag</div></Suspense>
</template>

<style scoped>
.Bag {
  display: flex;
  justify-content: center;
}
</style>
