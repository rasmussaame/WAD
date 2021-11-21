<template>
  <div class="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
    <Footer class="footer" />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
export default {
  components: { Footer },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body,
html,
.app {
  min-height: 100%;
}
</style>
