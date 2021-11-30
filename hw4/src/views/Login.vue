<template>
  <div class="login_container">
    <div class="content">
      <div class="row">
        <img src="../../images/postit.png" alt="Postit" id="postitImg" />
        <h3>Welcome to postIt!</h3>
      </div>
      <a href="login">Create an account</a>
      <p>Or</p>
      <h2>Please login</h2>
      <form action="/">
        <input type="text" name="email" id="email" placeholder="Email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <input type="submit" value="Log In" id="submit" />
      </form>
      <a href="login">Forgot your password?</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
};
</script>

<style lang="scss">
.login_container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 100px 50px;
  background-color: blue;
}

.content {
  background-color: white;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 50px;
}

.row ~ a {
  margin-top: 20px;
}

.row ~ a:visited {
  color: blue;
}

.row ~ h2 {
  margin: 10px 0 0 0;
}

.row ~ p {
  margin: 10px 0 0 0;
  text-decoration: underline;
}

.row ~ form > * {
  margin: 20px 10% 0 10%;
  width: 80%;
  height: 35px;
  padding-left: 15px;
}

#submit {
  width: 20%;
  margin: 10px 40% 0 40%;
  padding-left: 5px;
  background-color: blue;
  color: white;
}

#postitImg {
  width: 100px;
  margin: 30px 0 0 30px;
  flex: 1;
}

#postitImg + h3 {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 50px;
  flex: 5;
  margin: auto;
}

.row {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.row > * {
  display: inline;
}
</style>
