<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { CardConfig } from "@/components/Card/interfaces/card.interfaces";
import { useStore } from "vuex";

export default defineComponent({
  name: "Card",
  props: {
    productConfig: {
      required: true,
      type: Object as PropType<CardConfig>,
    },
  },
  setup(props) {
    const store = useStore();

    const numberOfAddedItemsToShoppingBag = computed(
      () =>
        store.getters.getItemsInBag.filter(
          (item) => item.id === props.productConfig.id,
        ).length,
    );

    const onItemAdded = () => {
      store.dispatch("addItems", [
        {
          id: props.productConfig.id,
          label: props.productConfig.label,
        },
      ]);
    };

    const onItemRemoved = () => {
      store.dispatch("removeItem", props.productConfig.id);
    };

    const getImageUrl = (url: string) => {
      return new URL(url, import.meta.url).href;
    };
    return {
      numberOfAddedItemsToShoppingBag,
      getImageUrl,
      onItemAdded,
      onItemRemoved,
    };
  },
});
</script>

<template>
  <div class="CardWrapper">
    <RouterLink to="/dupa">
      <div>
        <div class="Card">
          <img
            class="Card__img"
            :src="getImageUrl(productConfig.sourceUrl)"
            width="250px"
            height="320px"
            alt="N/A"
          />
          <span class="Card__label body-1">
            {{ productConfig.label }}
          </span>
          <span class="Card__price body-1">
            {{
              `${productConfig.productConfigs[0].price} ${productConfig.productConfigs[0].currency}`
            }}
          </span>
        </div>
      </div>
    </RouterLink>
    <div class="CardWrapper__ItemInteractions">
      <div @click="onItemRemoved" :style="{ cursor: 'pointer' }">-</div>
      <div v-if="numberOfAddedItemsToShoppingBag > 0">
        {{ numberOfAddedItemsToShoppingBag }}
      </div>
      <div @click="onItemAdded" :style="{ cursor: 'pointer' }">+</div>
    </div>
  </div>
</template>

<style>
.CardWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 8px;
  text-decoration: none;
}

.Card {
  flex-direction: column;
  display: flex;
  align-items: center;
}

.Card__label {
  padding-top: 8px;
  color: black;
  cursor: pointer;
  text-decoration: none;
}

.Card__price {
  padding-top: 8px;
  color: black;
  cursor: pointer;
  text-decoration: none !important;
}

.CardWrapper__ItemInteractions {
  padding-top: 4px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
</style>
