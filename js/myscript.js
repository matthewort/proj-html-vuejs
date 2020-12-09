var app = new Vue({
  el: '#app',
  data: {
    title:'prova',
    styleObject: {
      backgroundColor: 'darkblue',
      height: '100px'
    }
  },
  methods: {
    addfilm: function () {
      axios.get(film + this.message)
      .then((response) => {
      const filmcontent = response.data.results;
      this.film = filmcontent
      });
    },
    addseries: function () {
      axios.get(series + this.message)
      .then((response) => {
      const seriescontent = response.data.results;
      this.series = seriescontent
      });
    }
  }
});
