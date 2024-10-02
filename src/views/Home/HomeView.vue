<script lang="ts">
import { defineComponent } from "vue";

defineComponent({
  name: "Home",
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="Home">
    <div class="Home__content">
      <h2>This is our home page</h2>
    </div>

    <!-- Main Banner -->
    <div class="banner">
      <h2>Welcome to Fuego Coffee Roasters</h2>
      <p>Your source for the finest roasted coffee beans.</p>
      <button>Shop Now</button>
    </div>

    <!-- About Section -->
    <div class="Home__content__about">
      <h2>About Us</h2>
      <p>
        At Fuego Coffee Roasters, we specialize in sourcing, roasting, and
        delivering the finest coffee beans from around the world. Our passion
        for coffee drives us to deliver exceptional flavors to your cup.
      </p>
    </div>
    <div>
      <p>&copy; 2024 Fuego Coffee Roasters. All rights reserved.</p>
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.Home {
  flex-direction: column !important;
  align-items: center;
}

.Home__content__about {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 32px;
  margin-right: 32px;
}
</style>
