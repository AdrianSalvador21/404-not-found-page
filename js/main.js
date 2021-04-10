var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(50)
  .typeString('We have bad news for you')
  .pauseFor(300)
  .start();
