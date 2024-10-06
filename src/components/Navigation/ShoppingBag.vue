<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { get } from "lodash";

export default defineComponent({
  name: "ShoppingBag",
  setup() {
    const store = useStore();

    const numberOfItemsInBag = computed(() =>
      get(store.getters, "shoppingBag/getNumberOfItemsInShoppingBag"),
    );
    return {
      numberOfItemsInBag,
    };
  },
});
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
          <p>{{ numberOfItemsInBag }}</p>
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
