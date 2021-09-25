// Thumbnail section
var thumbnail = new Splide("#splide", {
  type: "slide",
  autoplay: false,
  direction: "ttb",
  height: "540px",
  fixedWidth: 200,
  fixedHeight: 100,
  focus: "center",
  arrows: false,
  cover: true,
  rewind: false,
  gap: 10,
  isNavigation: true,
  pagination: false,
  breakpoints: {
    600: {
      fixedWidth: 300,
      fixedHeight: 150,
    },
    768: {
      fixedWidth: 400,
      fixedHeight: 200,
    },
  },
}).mount();

// View Section
var view = new Splide("#view", {
  type: "loop",
  fixedHeight: 430,
  focus: "center",
  arrows: true,
  cover: true,
  rewind: true,
  gap: 10,
  isNavigation: true,
  pagination: false,
  breakpoints: {
    600: {
      fixedWidth: 400,
      fixedHeight: 330,
    },
    768: {
      fixedWidth: 500,
      fixedHeight: 400,
    },
  },
});

// Mounting together
view.sync(thumbnail).mount();
