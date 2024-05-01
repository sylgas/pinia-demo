<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Content",
  setup() {
    const store = useStore();
    const selectedTab = computed(() => store.getters.selectedTab);

    return {
      selectedTab,
    };
  },
});
</script>

<template>
  <div class="content">
    <div>
      {{ `Content of ${selectedTab}` }}
    </div>
  </div>
</template>

<style scoped>
.content {
  flex: 1;
  padding: 20px;
  color: #black;
}
</style>
