<script lang="ts">
import { computed, defineComponent, Ref } from "vue";
import { useStore } from "vuex";
import { get } from "lodash";
import { ShoppingBagItem } from "@/views/ShoppingBag/interfaces/shoppingBag/shoppingBag.interface";

export default defineComponent({
  setup() {
    const store = useStore();

    const shoppingBagItems = computed(
      () => get(store.getters, "shoppingBag/getItemsInBag") || [],
    );
    const shoppingBagMap: Ref<ShoppingBagItem> = computed(() => {
      return shoppingBagItems.value.reduce((acc, item: ShoppingBagItem) => {
        if (acc[item.id]) {
          acc[item.id].count++;
        } else {
          acc[item.id] = { ...item, count: 1 };
        }
        return acc;
      }, {});
    });
    const totalPrice = computed(() => {
      return Object.values(shoppingBagMap.value).reduce(
        (sum: number, item: ShoppingBagItem) => {
          return sum + item.price * item.count!;
        },
        0,
      );
    });

    const onItemQuantityIncreased = (item: ShoppingBagItem) => {
      store.dispatch("shoppingBag/addItems", [
        {
          id: item.id,
          label: item.label,
          price: item.price,
        },
      ]);
    };

    const onItemQuantityDecreased = (itemId: string) => {
      store.dispatch("shoppingBag/removeItem", itemId);
    };

    const onItemRemoval = (itemId: string) => {
      store.dispatch("shoppingBag/removeAllItemsWithId", itemId);
    };

    return {
      totalPrice,
      shoppingBagMap,
      onItemQuantityIncreased,
      onItemQuantityDecreased,
      onItemRemoval,
    };
  },
});
</script>

<template>
  <div class="ShoppingBag">
    <h2 class="ShoppingBag_Header">Shopping Bag</h2>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, id) in shoppingBagMap" :key="id">
          <td>{{ item.label }}</td>
          <td>{{ item.count }}</td>
          <td>{{ item.price }}&euro;</td>
          <td>{{ item.count * item.price }}&euro;</td>
          <td>
            <button @click="onItemQuantityIncreased(item)">+</button>
            <button @click="onItemQuantityDecreased(item.id)">-</button>
            <button @click="onItemRemoval(item.id)">Remove</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4" style="text-align: right">
            <strong>Total Price:</strong>
          </td>
          <td>{{ totalPrice }}&euro;</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style scoped>
table {
  width: 80%;
  margin: 20px auto;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
}

th {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #f5f5f5;
}

.ShoppingBag_Header {
  text-align: center;
  margin-bottom: 20px;
}
</style>
