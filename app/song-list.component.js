app.component('app-song-list', {
  name: 'songList',
  data() {
    return {
      songs: [
        { id: 1, title: 'Pride in the Name of Love', artist: 'U2', length: '3' },
        { id: 2, title: 'Welcome to the Jungle', artist: 'Guns n Roses', length: '3.5' }
      ],
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
          <tr v-for="song in filteredSongs" :key="id" @click="filter" :class="{ active: song.id === selectedSongId }">
            <td>{{ song.title }}</td>
            <td>{{ song.artist }}</td>
            <td>{{ song.length }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})