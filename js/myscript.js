var app = new Vue({
  el: '#app',
  data: {
    hours: 'Open Hours: Mon - Sat - 9:00 - 18:00',
    info: [
      {message: '+1(305)1234-5678'},
      {message: 'hello@example.com'}
    ]
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
