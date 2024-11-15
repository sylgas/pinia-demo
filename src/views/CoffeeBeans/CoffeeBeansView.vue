<script setup lang="ts">
import { onBeforeMount } from "vue";
import { COFFEE_BAGS_CONFIG } from "@/views/CoffeeBeans/config/coffeeBeans.config";
import Card from "@/components/Card/Card.vue";
import { coffeeBagStore } from '@/store/stores/CoffeeBags/coffeeBag.store';
import { storeToRefs } from 'pinia';

const store = coffeeBagStore();
const { setCoffeeBags } = store;
const { coffeeBags } = storeToRefs(store);

onBeforeMount(() => {
  setCoffeeBags(COFFEE_BAGS_CONFIG);
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
