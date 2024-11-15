<script setup lang="ts">
import { useShoppingBagStore } from '@/store/stores/ShoppingBag/shoppingBag.store';
import { useShoppingBagSetupStore } from '@/store/stores/ShoppingBag/shoppingBagSetup.store';

const store = useShoppingBagSetupStore();

</script>

<template>
  <RouterLink to="/bag">
    <div class="container">
      <div class="image">
        <img
          src="../../assets/shopping-bag-svgrepo-com.svg"
          width="100%"
          height="100%"
          alt="Shopping Bag"
        />
        <div class="paragraph">
          <p>{{ store.numberOfItemsInShoppingBag }}</p>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.container {
  position: relative;
  width: 30px;
  height: 22px;
}

.image {
  background-size: cover;
  width: 100%;
  height: 100%;
}

.paragraph {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 20%;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
}
</style>
