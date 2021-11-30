<template>
  <div class="post">
    <div class="topper">
      <img src="@/assets/user.png" alt="User" />
      <p class="date">{{ post.createdAt }}</p>
    </div>
    <img :src="post.image" :alt="post.body" v-if="post.image" />
    <h2>{{ post.body }}</h2>
    <div class="like">
      <p>Likes: {{ post.likes }}</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/SMirC-thumbsup.svg/1200px-SMirC-thumbsup.svg.png"
        alt="Like"
        @click="likeClick"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    likeClick() {
      this.$store.commit("likePost", this.post.id);
    },
  },
};
</script>

<style lang="scss">
.post {
  margin: 20px 50px 20px 50px;
  box-shadow: 1px 1px 5px;
  .topper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {
      margin: 10px;
      height: 30px;
    }
    .date {
      color: #8f8f8f;
      margin: 16px 10px 16px 10px;
    }
  }
  img {
    max-width: 100%;
  }
  h2 {
    padding: 10px;
  }
  .like {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    img {
      height: 45px;
      padding: 10px;
      cursor: pointer;
    }
  }
}
</style>
