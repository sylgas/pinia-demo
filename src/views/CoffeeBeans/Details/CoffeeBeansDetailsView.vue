<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { get } from "lodash";

export default defineComponent({
  name: "CoffeeBeansDetailsView",
  setup() {
    const route = useRoute();
    const store = useStore();

    const selectedBag = computed(() => get(store.getters, ""));

    const { itemId } = route.params;
  },
});
</script>

<template>
  <div>testing</div>
</template>

<style scoped></style>
