import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [
      {
        id: 1,
        body: "I think it's going to rain",
        image: "https://wallpapercave.com/wp/wp2759075.png",
        createdAt: "Sep 23, 2021 15:30",
        likes: 0,
      },
      {
        id: 2,
        body: "Do we need more pizzas for next homework?",
        image: "",
        createdAt: "Sep 24, 2021 12:30",
        likes: 0,
      },
      {
        id: 3,
        body: "Does new Assassin's Creed happening in Estonia?",
        image: "https://wallpaperaccess.com/full/84414.jpg",
        createdAt: "Sep 25, 2021 10:14",
        likes: 0,
      },
      {
        id: 4,
        body: "How much wood could a woodchuck chuck if a woodchuck could chuck wood?",
        image: "",
        createdAt: "Sep 26, 2021 11:04",
        likes: 0,
      },
      {
        id: 5,
        body: "Magical sword stuck in rock",
        image: "https://wallpaperaccess.com/full/84415.jpg",
        createdAt: "Sep 26, 2021 11:04",
        likes: 0,
      },
      {
        id: 6,
        body: "Why spaghetti always brakes in 3?",
        image: "",
        createdAt: "Sep 27, 2021 11:04",
        likes: 0,
      },
      {
        id: 7,
        body: "New reasearch: Covid vaccine makes 5G radiation disappeare",
        image: "",
        createdAt: "Sep 28, 2021 11:56",
        likes: 0,
      },
      {
        id: 8,
        body: "US Army using Hololens makes them invisible to the enemy",
        image: "https://wallpaperaccess.com/full/84413.jpg",
        createdAt: "Sep 29, 2021 11:05",
        likes: 0,
      },
      {
        id: 9,
        body: "Who stole this poor guy's shirt?",
        image: "https://wallpaperaccess.com/full/84411.jpg",
        createdAt: "Sep 30, 2021 10:04",
        likes: 0,
      },
      {
        id: 10,
        body: "Rare picture of us",
        image: "https://wallpaperaccess.com/full/84310.jpg",
        createdAt: "Sep 30, 2021 12:04",
        likes: 0,
      },
    ],
  },
  mutations: {
    likePost(state, id) {
      for (let index = 0; index < state.posts.length; index++) {
        if (state.posts[index].id == id) {
          state.posts[index].likes++;
          return;
        }
      }
    },
    clearLikes(state) {
      for (let index = 0; index < state.posts.length; index++) {
        state.posts[index].likes = 0;
      }
    },
  },
  actions: {},
  modules: {},
});
