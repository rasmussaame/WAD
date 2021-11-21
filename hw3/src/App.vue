<template>
  <div class="app">
    <Header class="header" />
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
import Header from "./components/Header.vue";
export default {
  components: { Footer, Header },
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
