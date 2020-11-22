app.component('app-song-list', {
  name: 'songList',
  data() {
    return {
      selectedSongId: 0,
      filter: ''
    }
  },
  methods: {
    selectSong(song) {
      this.selectedSongId = song.id;
    }
  },
  computed: {
    songs() {
      return this.$store.getters.songList;
    },
    filteredSongs() {
      if (this.filter) {
        const lcFilter = this.filter.toLowerCase();
        return this.songs.filter(x => {
          return x.title.toLowerCase().indexOf(lcFilter) > -1
        });
      }

      return this.songs;
    }
  },
  mounted() {
    this.$store.dispatch('songs_LoadSongs');
  },
  template: `
    <div style="width: 100%">
      <app-song-filter
        :filterText="filter"
        @filterChanged="filter = $event">
      </app-song-filter>
      <table class="table">
        <thead>
          <tr>
            <td>Title</td>
            <td>Artist</td>
            <td>Length</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="song in filteredSongs" :key="id" @click="selectSong(song)" :class="{ active: song.id === selectedSongId }">
            <td>{{ song.title }}</td>
            <td>{{ song.artist }}</td>
            <td>{{ song.length }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})