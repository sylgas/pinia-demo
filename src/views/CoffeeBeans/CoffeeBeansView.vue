<script lang="ts">
import { defineComponent } from "vue";
import { COFFEE_BAGS_CONFIG } from "@/views/CoffeeBeans/config/coffeeBeans.config";
import Card from "@/components/Card/Card.vue";

export default defineComponent({
  name: "CoffeeBeansView",
  components: { Card },
  setup() {
    console.info(JSON.stringify(COFFEE_BAGS_CONFIG));
    return {
      COFFEE_BAGS_CONFIG,
    };
  },
});
</script>

<template>
  <div class="CoffeeBeansView">
    <Card
      v-for="productConfig in COFFEE_BAGS_CONFIG"
      :product-config="productConfig"
    />
  </div>
</template>

<style>
.CoffeeBeansView {
  justify-content: center;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
