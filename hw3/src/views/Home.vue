<template>
  <div>
    <h1>Home</h1>
    <post />
  </div>
</template>

<script>
import Post from "../components/Post.vue";
export default {
  name: "Home",
  components: { Post },
  mounted() {
    // mounted kutsutakse ss ka välja, kui lihtsalt rakenduse lehtede vahel vahetada
    // console.log(this.$store.state.posts[0].likes);
    // this.$store.commit("likePost", 1);
  },
};
</script>

<style lang="scss"></style>
