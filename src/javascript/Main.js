
import { movieArray } from "./Movie_array.js";

const { createApp } = window.Vue;

const watchlist_Key= "watchlist_key";

const filterComingsoon = (input, movieList) =>
  movieList.filter((movie) => movie.comingSoon === input);
const GenreFilter = (key, movieList) =>
  movieList.filter((movie) => movie.genre === key);

const Component = {
  data() {
    return {
      movieList: movieArray,
      watchList: [],
    };
  },
  computed: {
    comingSoonList() {
      return filterComingsoon(true, this.movieList);
    },
    availableList() {
      return filterComingsoon(false, this.movieList);
    },
    actionList() {
      return GenreFilter("Action", this.movieList);
    },
    comedyList() {
      return GenreFilter("Comedy", this.movieList);
    },
    horrorList() {
      return GenreFilter("Horror", this.movieList);
    },
    animationList() {
      return GenreFilter("Animation", this.movieList);
    },
  },

  
  methods:{
    listbtn(){
    window.location.href = "../Watchlist.html";
  },
    addtoWatchList(movie){
   if(!localStorage.getItem(watchlist_Key)){
     let watchList_Array =[];
     watchList_Array.push(movie);
     localStorage.setItem(watchlist_Key,JSON.stringify(watchList_Array));
   }else{
     let watchList_Array= JSON.parse(localStorage.getItem(watchlist_Key));
     watchList_Array.push(movie);
     localStorage.setItem(watchlist_Key,JSON.stringify(watchList_Array));
   }
    }
  },

};

//Mouting App
window.addEventListener("DOMContentLoaded", () => {
  const app = createApp(Component);
  app.mount("#app");
})


