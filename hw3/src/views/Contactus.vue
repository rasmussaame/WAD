<template>
  <div class="contactus">
    <h1>CONTACT US</h1>
    <p>email: info@ut.ee</p>
    <p>tel: +372 5454 1010</p>
    <p>Address: Ülikooli 18, 50090 Tartu</p>
  </div>
</template>

<script>
export default {
  name: "Contact us",
  components: {},
};
</script>

<style lang="scss">
h1 {
  padding: 40px;
}
.contactus {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 200px;
  background: lightcyan;
}
</style>
