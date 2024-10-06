<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { CoffeeBag } from "@/components/Card/interfaces/card.interfaces";
import { useStore } from "vuex";
import { ItemInBag } from "@/store/modules/ShoppingBag/shoppingBag.interfaces";
import { get } from "lodash";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Card",
  props: {
    productConfig: {
      default: () => ({}),
      type: Object as PropType<CoffeeBag>,
    },
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();

    const numberOfAddedItemsToShoppingBag = computed(
      () =>
        get(store.getters, "shoppingBag/getItemsInBag").filter(
          (item: ItemInBag) => item.id === props.productConfig.id,
        ).length,
    );

    const onItemAdded = () => {
      store.dispatch("shoppingBag/addItems", [
        {
          id: props.productConfig.id,
          label: props.productConfig.label,
        },
      ]);
    };

    const onItemRemoved = () => {
      store.dispatch("shoppingBag/removeItem", props.productConfig.id);
    };

    const getImageUrl = (url: string) => {
      // @ts-ignore
      return new URL(url, import.meta.url).href;
    };

    const navigateToDetails = () => {
      router.push({
        name: "collection.coffeeBeans.details",
        params: { itemId: props.productConfig.id },
      });
    };

    return {
      numberOfAddedItemsToShoppingBag,
      getImageUrl,
      onItemAdded,
      onItemRemoved,
      navigateToDetails,
    };
  },
});
</script>

<template>
  <div class="CardWrapper">
    <div>
      <div class="Card" @click="navigateToDetails">
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
    <div class="CardWrapper__ItemInteractions">
      <div @click="onItemRemoved" :style="{ cursor: 'pointer' }">-</div>
      <div>
        {{
          numberOfAddedItemsToShoppingBag > 0
            ? numberOfAddedItemsToShoppingBag
            : null
        }}
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

.Card__img {
  cursor: pointer;
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
