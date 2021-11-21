<template>
  <div class="header">
        <div class="buttons">
            <div class="homeButton">
                <a @click="home">
                <img src="../../images/sticky.png" alt="sticky" />
                </a>
            </div>
            
            <a @click="login">Login</a>
            <a @click="contactUs">Contact us</a>

        </div>
        <div>
            <div class="search-container">
                <form action="#">
                    <input type="text" placeholder="Search.." name="search">
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </div>
        <div>
            <img src="../../images/user.png" alt="user" />
        </div>
<!--         <div class="dd-hidden" onclick="toggleDropdown()" id="dropdown">
            <p>John Doe</p>
            <p>john.doe@example.com</p>
        </div> -->
    </div>
</template>

<script>
export default {
    
  methods: {
    home() {
      this.$router.push("/");
    },
    login() {
      this.$router.push("login");
    },
    contactUs() {
      this.$router.push("contactus");
    },
    }, 
};
</script>

<style lang="scss">
.buttons {
    display: flex;
    align-items: center;
}

.buttons a {
    padding: 10px 20px;
    color:black;
    background-color: transparent;
}

.buttons .homeButton a{
    padding: 0px 0px 0px 20px;
}

.header {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    background-color: whitesmoke;
    padding-top: 10px;
    padding-bottom: 10px;
}

.header img {
    height: 30px;
    width: auto;
    margin-right: 10px;
    margin-left: 10px;

}

.header .buttons img {
    height: 30px;
    width: auto;
    margin-right: 10px;
    margin-left: 10px;

}

.search-container button {
    float: right;
    padding: 6px 10px;
    margin-right: 16px;
    background: #ddd;
    font-size: 17px;
    border: none;
    cursor: pointer;
}

.search-container button:hover {
    background: #ccc;
}

input[type=text] {
    padding: 6px;
    font-size: 17px;
    border: none;
}
#dropdown p {
    margin: 0;
    padding: 0;
}
#dropdown {
    background-color: white;
    position: absolute;
    right: 0;
    padding: 20px 10px;
}
.dd-hidden {
    display: none;
}
.dd-shown {
    display: inline-block;
}
</style>
