particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 25,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": .5,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 6,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        // ////
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        // ////
        "direction": "bottom",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        // ///
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        // ///
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

)

const textHeader = document.querySelectorAll('.text-header')
const videoContainer = document.querySelector('.video-container')
const secondSection = document.querySelector('#second')
const thirdSection = document.querySelector('#third')
const fourthSection = document.querySelector('#fourth')
const fifthSection = document.querySelector('#fifth')
const sixthSection = document.querySelector('#sixth')
const footer = document.querySelector('footer')

let x = 0

window.addEventListener('scroll', () => {
  let st = parseInt(window.scrollY)
  console.log(st)

  // first section
  if (st >= 0 && st <= 2000) {
    let opacityValue = 1 - (st / 2000)
    textHeader.forEach(txt => {
      txt.style.opacity = opacityValue
    })
    let scaleValue = 1 + (st / 2000)
    videoContainer.style.transform = 'scale(' + scaleValue + ')'

  } else {
    textHeader.forEach(txt => {
      txt.style.opacity = 1
    })
    videoContainer.style.transform = 'scale(1)'
  }
  // first section

  // second section
  if (st >= 601 && st <= 2700) {
    if (st < 1700) {
      x = ((1700 - (st)) / 10)
      if (x <= 10) {
        secondSection.style.top = ((1700 - (st + 50)) / 10) + '%'
      } else if (x >= 90) {
        secondSection.style.top = ((1700 - (st - 50)) / 10) + '%'
      } else {
        secondSection.style.top = ((1700 - (st)) / 10) + '%'
      }
    }
  }
  // second section

  // third section
  if (st >= 2000 && st <= 6000) {
    thirdSection.style.position = 'fixed'
    if (st < 5000) {
      x = ((3200 - (st)) / 10)
      if (x <= 10) {
        thirdSection.style.top = ((3200 - (st + 50)) / 10) + '%'
      } else if (x >= 90) {
        thirdSection.style.top = ((3200 - (st - 50)) / 10) + '%'
        thirdSection.children[0].style.opacity = '1'
      } else {
        thirdSection.style.top = ((3200 - (st)) / 10) + '%'
      }
    }

    if (thirdSection.offsetTop < 10) {
      thirdSection.children[0].children[0].style.opacity = '1'
    } else {
      thirdSection.children[0].children[0].style.opacity = '0'
    }
  }
  // third section

  // fourth section
  if (st >= 5000 && st <= 9000) {
    fourthSection.style.position = 'fixed'
    if (st < 6500) {
      x = ((6500 - (st)) / 10)
      if (x <= 10) {
        fourthSection.style.top = ((6500 - (st + 50)) / 10) + '%'
      } else if (x >= 90) {
        fourthSection.style.top = ((6500 - (st - 50)) / 10) + '%'
        fourthSection.children[0].style.opacity = '1'
      } else {
        fourthSection.style.top = ((6500 - (st)) / 10) + '%'
      }
    }
  }
  // fourth section

  // fifth section
  if (st >= 8000 && st <= 12000) {
    fifthSection.style.position = 'fixed'
    if (st < 9000) {
      x = ((9000 - (st)) / 10)
      if (x <= 10) {
        fifthSection.style.top = ((9000 - (st + 50)) / 10) + '%'
      } else if (x >= 90) {
        fifthSection.style.top = ((9000 - (st - 50)) / 10) + '%'
        fifthSection.children[0].style.opacity = '1'
      } else {
        fifthSection.style.top = ((9000 - (st)) / 10) + '%'
      }
    }
  }
  // fifth section

  // sixth section
  if (st >= 11000 && st <= 14000) {
    sixthSection.style.position = 'fixed'
    if (st < 12000) {
      x = ((12000 - (st)) / 10)
      if (x <= 10) {
        sixthSection.style.top = ((12000 - (st + 50)) / 10) + '%'
      } else if (x >= 90) {
        sixthSection.style.top = ((12000 - (st - 50)) / 10) + '%'
      } else {
        sixthSection.style.top = ((12000 - (st)) / 10) + '%'
      }
    }
  }
  // sixth section

  // footer
  if (st >= 13000 && st <= 15000) {
    footer.style.position = 'fixed'
    if (st < 14000) {
      x = ((14000 - (st)) / 10)
      if (x <= 10) {
        footer.style.top = ((14000 - (st + 50)) / 10) + '%'
      } else if (x >= 90) {
        footer.style.top = ((14000 - (st - 50)) / 10) + '%'
      } else {
        footer.style.top = ((14000 - (st)) / 10) + '%'
      }
    }
  }
  // footer
})