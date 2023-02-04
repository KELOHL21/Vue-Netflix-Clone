import { movieArray } from "./Movie_array.js";

const { createApp } = window.Vue;

const watchlist_Key= "watchlist_key";

const Component = {
    data() {
      return {
        movieList: movieArray,
        watchListArray: [],
      };
    },
    methods:{
      removeFromWatchList(index) {
        this.watchListArray = JSON.parse(localStorage.getItem(watchlist_Key));
        this.watchListArray.splice(index, 0);
        localStorage.setItem(watchlist_Key, JSON.stringify(this.watchListArray));
      },
    },
    
    //Mounting list
  mounted(){
    if (!localStorage.getItem(watchlist_Key)) {
      let new_array = [];
      localStorage.setItem(watchlist_Key,JSON.stringify(new_array));
    }
    this.watchListArray = JSON.parse(localStorage.getItem(watchlist_Key));
  }
  };


//Mouting App
window.addEventListener("DOMContentLoaded", () => {
  const app = createApp(Component);
  app.mount("#myApp");
})
