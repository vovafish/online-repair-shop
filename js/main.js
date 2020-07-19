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

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, '300');
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

nextSN.css('left', prevSP.width() + 10 + bullets.width() + 10 + bullets.width() + 10)
bullets.css('left', prevSP.width() + 15)

/* Animation */

new WOW().init();

/* Validation */

$('.modal__form').validate({
  errorClass: "invalid",
  rules: {
    //string rule
    userName: {
      required: true,
      minlength: 2
    },
    //string rule
    userPhone: "required",
    // object rule
    userEmail: {
      required: true,
      email: true
    }
  }, // messages
  messages: {
    userName: {
      required: "Имя должно быть обязательно",
      minlength: "Имя не короче двух букв"
    },
    userPhone: {
      required: "Телефон должен быть обязательно"
    },
    userEmail: {
      required: "Email должно быть обязательно",
      email: "Введите в формате name@domain.com"
    }
  }
});

/* Validation */

$('.control__form').validate({
  errorClass: "invalid",
  rules: {
    //string rule
    userName: {
      required: true,
      minlength: 2
    },
    //string rule
    userPhone: "required",
    // object rule
    userEmail: {
      required: true,
      email: true
    }
  }, // messages
  messages: {
    userName: {
      required: "Имя должно быть обязательно",
      minlength: "Имя не короче двух букв"
    },
    userPhone: {
      required: "Телефон должен быть обязательно"
    },
    userEmail: {
      required: "Email должно быть обязательно",
      email: "Введите в формате name@domain.com"
    }
  }
});

/* Validation */

$('.footer__form').validate({
  errorClass: "invalid",
  rules: {
    //string rule
    userName: {
      required: true,
      minlength: 2
    },
    //string rule
    userPhone: "required",
    // object rule
    userEmail: {
      required: true,
      email: true
    }
  }, // messages
  messages: {
    userName: {
      required: "Имя должно быть обязательно",
      minlength: "Имя не короче двух букв"
    },
    userPhone: {
      required: "Телефон должен быть обязательно"
    },
    userEmail: {
      required: "Email должно быть обязательно",
      email: "Введите в формате name@domain.com"
    }
  }
});

/* Masks */

$('[type=tel]').mask('+371 00-000-000', {
  placeholder: "+371 __-___-___"
});

/* Map */

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [61.385704, 47.509668],
          zoom: 9
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Место нахождения',
          balloonContent: 'Вот тут'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '../img/footer/marker.png',
          // Размеры метки.
          iconImageSize: [32, 32],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      });
  myMap.geoObjects
      .add(myPlacemark);
});