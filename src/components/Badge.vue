<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Badge",
  props: {
    badgeText: {
      required: false,
      type: String,
    },
  },
});
</script>

<template>
  <div
    class="Badge"
    :style="{
      display: 'flex',
      position: 'absolute',
      borderRadius: '50%',
      backgroundColor: 'red',
      height: '20px',
      width: '20px',
      fontSize: 'small',
      alignItems: 'center',
      justifyContent: 'center',
    }"
  >
    <p v-if="badgeText">{{ badgeText }}</p>
  </div>
</template>

<style scoped></style>
