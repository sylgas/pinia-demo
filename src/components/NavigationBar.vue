<script lang="ts">
import { defineComponent } from "vue";
import ShoppingCart from "@/components/ShoppingCart.vue";

export default defineComponent({
  name: "NavigationBar",
  components: { ShoppingCart },
});
</script>

<template>
  <div class="navigation-bar">
    <h1>Bicycle store</h1>
    <ShoppingCart />
  </div>
</template>

<style scoped>
.navigation-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #333;
  color: #fff;
}

.cart-icon {
  /* Styles for your shopping cart icon */
}
</style>
