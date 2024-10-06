<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "HomeView",
  setup() {
    const router = useRouter();
    const onShopNow = () => router.push({ name: "collection.coffeeBeans" });
    return { onShopNow };
  },
});
</script>

<template>
  <div class="Home">
    <div class="Home__content">
      <h2>This is our home page</h2>
    </div>

    <div class="banner">
      <h2>Welcome to Fuego Coffee Roasters</h2>
      <p>Your source for the finest roasted coffee beans.</p>
      <button @click="onShopNow">Shop Now</button>
    </div>

    <footer class="">
      <h2>About Us</h2>
      <p>
        At Fuego Coffee Roasters, we specialize in sourcing, roasting, and
        delivering the finest coffee beans from around the world. Our passion
        for coffee drives us to deliver exceptional flavors to your cup.
      </p>
    </footer>

    <div class="footer">
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
  padding: 20px;
  box-sizing: border-box;
}

.footer {
  margin-top: 40px;
  font-size: 0.9rem;
}

.footer ul {
  list-style: none;
  padding: 0;
}

.footer ul li {
  display: inline;
  margin-right: 10px;
}

.footer a {
  text-decoration: none;
  color: #e07a5f;
}
</style>
