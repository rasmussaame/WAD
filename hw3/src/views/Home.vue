<template>
  <div class="homepage">
    <div class="container">
      <post v-for="post in $store.state.posts" :key="post.id" :post="post" />
    </div>
    <button class="resetLikes" @click="reset">Reset likes</button>
  </div>
</template>

<script>
import Post from "../components/Post.vue";
export default {
  name: "Home",
  components: { Post },
  methods: {
    reset() {
      this.$store.commit("clearLikes");
    },
  },
};
</script>

<style lang="scss">
.homepage {
  background-color: blue;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .container {
    background-color: white;
    height: 100%;
    width: 50%;
    padding-top: 30px;
  }
  .resetLikes {
    position: absolute;
    top: 30px;
    right: 50px;
    padding: 5px;
    cursor: pointer;
  }
}
</style>
