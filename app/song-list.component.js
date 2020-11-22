app.component('app-song-list', {
  name: 'songList',
  data() {
    return {
      songs: [
        { id: 1, title: 'Pride in the Name of Love', artist: 'U2', length: '3' },
        { id: 2, title: 'Welcome to the Jungle', artist: 'Guns n Roses', length: '3.5' }
      ],
      selectedSongId: 0
    }
  },
  methods: {
    selectSong(song) {
      this.selectedSongId = song.id;
    }
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
        <tr v-for="song in songs" :key="id" @click="selectSong(song)" :class="{ active: song.id === selectedSongId }">
          <td>{{ song.title }}</td>
          <td>{{ song.artist }}</td>
          <td>{{ song.length }}</td>
        </tr>
      </tbody>
    </table>
    {{ selectedSongId }}
  `
})