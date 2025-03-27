const foodStore = {
    foods: {
      1: { likes: 0 },
      2: { likes: 0 },
      3: { likes: 0 }
    },
  
    loadLikes() {
      for (const id in this.foods) {
        const storedLikes = localStorage.getItem(`likes_${id}`);
        if (storedLikes) {
          this.foods[id].likes = parseInt(storedLikes);
          document.getElementById(`like-${id}`).innerText = this.foods[id].likes;
        }
      }
    },
  
    saveLikes(id) {
      localStorage.setItem(`likes_${id}`, this.foods[id].likes);
    },
  
    likeFood(id) {
      if (this.foods[id]) {
        this.foods[id].likes++;
        this.saveLikes(id);
        document.getElementById(`like-${id}`).innerText = this.foods[id].likes;
      }
    },

    init() {
      this.loadLikes();
    }
  };
  foodStore.init();
  