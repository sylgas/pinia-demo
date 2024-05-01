<script lang="ts">
import { defineComponent } from "vue";
import Badge from "@/components/Badge.vue";

export default defineComponent({
  name: "ShoppingCart",
  components: { Badge },
  setup() {
    return {};
  },
});
</script>

<template>
  <div
    :style="{
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    }"
  >
    <img
      src="../assets/shopping-cart-outline-svgrepo-com.svg"
      width="50"
      height="50"
      alt="Shopping cart"
    />
    <Badge badge-text="1" />
  </div>
</template>

<style scoped></style>
