app.component('app-song-filter', {
  name: 'appSongFilter',
  props: ['filterText'],
  template: `
    <div class="filter-container">
      Filter:
      <input type="text"
        :value="filterText"
        @input="$emit('filterChanged', $event.target.value)"
      />
    </div>
  `
});