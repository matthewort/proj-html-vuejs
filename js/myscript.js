var app = new Vue({
  el: '#app',
  data: {
    clock: 'fas fa-clock',
    hours: 'Open Hours: Mon - Sat - 9:00 - 18:00',
    facebook: 'fab fa-facebook-f',
    twitter: 'fab fa-twitter',
    instagram: 'fab fa-instagram',
    info: [
      {message: '+1(305)1234-5678'},
      {message: 'hello@example.com'}
    ],
    navimage: 'img/bg-4.jpg',
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
