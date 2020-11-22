store.registerModule('songs', {
    state: () => ({
      songs: [],
      selectedSongId: 0,
      filter: ''
    }),
    mutations: {
      songs_setSongs(state, songs) {
        state.songs = songs;
      },
      songs_setFilter(state, filter) {
        state.filter = filter;
      },
      songs_setSelectedSong(state, id) {
        state.selectedSongId = id;
      }
    },
    actions: {
      songs_LoadSongs: (transaction) => {
        axios({ method: 'get', url: '/assets/songs.json' })
          .then(response => transaction.commit('songs_setSongs', response.data));
      }
    },
  getters: {
      filter: state => state.filter,
      songList: state => state.songs,
      selectedSongId: state => state.selectedSongId,
      filteredSongList: (state) => {
        if (state.filter) {
          const lcFilter = state.filter.toLowerCase();
          return state.songs.filter(x => {
            return x.title.toLowerCase().indexOf(lcFilter) > -1
          });
        }
        return state.songs;
      }
    }
  }
);