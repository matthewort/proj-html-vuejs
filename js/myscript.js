var app = new Vue({
  el: '#app',
  data: {
    icons: [
      {clock: 'fas fa-clock'},
      {facebook: 'fab fa-facebook-f'},
      {twitter: 'fab fa-twitter'},
      {instagram: 'fab fa-instagram'},
      {phone: 'fas fa-phone-alt'},
      {envelope: 'fas fa-envelope'},
      {position: 'fas fa-map-marker-alt'}
    ],
    hours: 'Open Hours: Mon - Sat - 9:00 - 18:00',
    info: [
      {message: '+1(305)1234-5678'},
      {message: 'hello@example.com'},
      {message: 'Main Avenue, 987'}
    ],
    navimage: 'img/bg-4.jpg',
    nexgen: 'NEXGEN',
    navtext: [
      {text: 'HOME'},
      {text: 'ABOUT'},
      {text: 'PROJECTS'},
      {text: 'PROCESS'},
      {text: 'TESTIMONIALS'}
    ],
    touch: 'GET IN TOUCH',
    user: 'fas fa-user',
    // paragraphleft: [
    //   {par: 'SEND A MESSAGE'},
    //   {par: 'Get in Touch'},
    //   {par: 'We will respond to your message as soon as possible'}
    // ],
    send: 'SEND A MESSAGE',
    send2: 'SEND',
    getintouch: 'Get in Touch',
    respond: 'We will respond to your message as soon as possible',
    example: 'Example Inc.',
    paragraphright: [
      {par: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {par: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
    ],
    map: 'VIEW MAP',
  }
});
