app.component('app-song-list', {
  name: 'songList',
  methods: {
    selectSong(song) {
      this.$store.commit('songs_setSelectedSong', song.id);
    }
  },
  computed: {
    filteredSongs() {
      return this.$store.getters.filteredSongList;
    },
    selectedSongId() {
      return this.$store.getters.selectedSongId
    }
  },
  mounted() {
    this.$store.dispatch('songs_LoadSongs');
  },
  template: `
    <table class="table">
      <thead>
        <tr>
          <td>Title</td>
          <td>Artist</td>
          <td>Length</td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="song in filteredSongs"
          :key="id"
          @click="selectSong(song)"
          :class="{ active: song.id === selectedSongId }"
        >
          <td>{{ song.title }}</td>
          <td>{{ song.artist }}</td>
          <td>{{ song.length }}</td>
        </tr>
      </tbody>
    </table>
  `
});