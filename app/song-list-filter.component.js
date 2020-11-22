app.component('app-song-filter', {
  name: 'appSongFilter',
  computed: {
    filterText() {
      return this.$store.getters.filter;
    }
  },
  template: `
    <div class="filter-container">
      Filter:
      <input type="text"
        :value="filterText"
        @input="$store.commit('songs_setFilter', $event.target.value)"
      />
    </div>
  `
});