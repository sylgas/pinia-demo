<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";
import { COFFEE_BAGS_CONFIG } from "@/views/CoffeeBeans/config/coffeeBeans.config";
import Card from "@/components/Card/Card.vue";
import { useStore } from "vuex";
import { get } from "lodash";

export default defineComponent({
  name: "CoffeeBeansView",
  components: { Card },
  setup() {
    const store = useStore();

    const coffeeBags = get(store.getters, "coffeeBags/getCoffeeBags") || [];

    onBeforeMount(() => {
      store.dispatch("coffeeBags/loadCoffeeBags", COFFEE_BAGS_CONFIG);
    });
    return {
      coffeeBags,
    };
  },
});
</script>

<template>
  <div class="CoffeeBeansView">
    <Card v-for="productConfig in coffeeBags" :product-config="productConfig" />
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
