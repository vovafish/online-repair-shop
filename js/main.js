/* Modal window but on ES6 */

// document.addEventListener("DOMContentLoaded", function(event) {
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector('.modal__close');
//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   }
  
//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//   });

//   closeBtn.addEventListener('click', switchModal);

// });

/* Modal window */

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');
    
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
});

/* Button to scroll up */

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

/* Swiper slide */

var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  /* Swiper slide paginataion */
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  /* Swiper slide navigation */
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
var nextPN = $('.swiper-button-next__pn');
    prevPP = $('.swiper-button-prev__pp');
    nextSN = $('.swiper-button-next__sn');
    prevSP = $('.swiper-button-prev__sp');
    bullets = $('.swiper-pagination');

nextPN.css('left', prevPP.width() + 10 + bullets.width() + 10)
bullets.css('left', prevPP.width() + 10)

nextSN.css('left', prevSP.width() + 10 + bullets.width() + 10)
bullets.css('left', prevSP.width() + 10)
