<template>
  <div class="contactus">
    <h1>CONTACT US</h1>
    <p>email: info@ut.ee</p>
    <p>tel: +372 5454 1010</p>
    <p>Address: Ülikooli 18, 50090 Tartu</p>
    <img src="https://www.abington.k12.pa.us/durand/media/sites/durand/Contact-Information/2020/08/Contact-Info.jpg"/>
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
  height: 1000px;
  background: lightcyan;
}
img {
  padding: 100px;
}
</style>
