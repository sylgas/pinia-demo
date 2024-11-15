<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { ItemInBag } from "@/store/stores/ShoppingBag/shoppingBag.interfaces";
import { useRouter } from "vue-router";
import { CoffeeBag } from "@/store/stores/CoffeeBags/coffeeBag.interfaces";
import { useShoppingBagStore } from '@/store/stores/ShoppingBag/shoppingBag.store';
import { storeToRefs } from 'pinia';
import { useShoppingBagSetupStore } from '@/store/stores/ShoppingBag/shoppingBagSetup.store';

export default defineComponent({
  name: "Card",
  props: {
    productConfig: {
      default: () => ({}),
      type: Object as PropType<CoffeeBag>,
    },
  },
  setup(props) {
    const store = useShoppingBagSetupStore();
    const { addItemsToShoppingBag, removeItemFromShoppingBag } = store;
    const { itemsInBag } = storeToRefs(store);
    const router = useRouter();

    const numberOfAddedItemsToShoppingBag = computed(
      () =>
          itemsInBag.value.filter(
          (item: ItemInBag) => item.id === props.productConfig.id,
        ).length,
    );

    const onItemAdded = () => {
      addItemsToShoppingBag([
        {
          id: props.productConfig.id,
          label: props.productConfig.label,
          price: props.productConfig.productConfigs[0].price,
        } as ItemInBag,
      ]);
    };

    const onItemRemoved = () => {
      removeItemFromShoppingBag(props.productConfig.id);
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
