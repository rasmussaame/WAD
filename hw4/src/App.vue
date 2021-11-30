<template>
  <div class="app">
    <Header class="header" />
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
