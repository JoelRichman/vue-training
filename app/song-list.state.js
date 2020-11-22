store.registerModule('songs', {
    state: () => ({
      songs: [],
    }),
    mutations: {
      songs_setSongs(state, songs) {
        state.songs = songs;
      }
    },
    actions: {
      songs_LoadSongs: (transaction) => {
        axios({ method: 'get', url: '/assets/songs.json' })
          .then(response => transaction.commit('songs_setSongs', response.data));
      }
    },
    getters: {
      songList: state => state.songs,
    }
  }
);