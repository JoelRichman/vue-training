app.component('app-header', {
  name: 'appHeader',
  data() {
    return {
      title: 'Music Database'
    }
  },
  template: `
    <header>
      <h1>{{ title }}</h1>
    </header>
  `
});