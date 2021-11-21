<template>
  <div class="footer">
    <h2>This is Footer</h2>
    <a @click="contactUs">Click here to get to Contact Us page</a>
  </div>
</template>

<script>
export default {
  methods: {
    contactUs() {
      this.$router.push("contactus");
    },
  },
};
</script>

<style lang="scss">
a {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  position: relative;
}
h2 {
  padding: 40px;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 200px;
  background: lightgoldenrodyellow
}
</style>
