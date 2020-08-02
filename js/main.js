/* Modal window but on ES6 */

// const {
//   on
// } = require("gulp");

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
    //object rule
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
    },
    //object rule
    modalPolicyCheckbox: {
      required: true,
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
    },
    //object rule
    modalPolicyCheckbox: {
      required: "Cогласитесь с политикой обработки данных"
    }
  },

  /* Ajax */

  submitHandler: function (form) {
    var modal = $('.modal')
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function (response) {
        alert('Все OK');
        $(form)[0].reset(); // W!
        modal.removeClass('modal--visible');

      }
    });
  }
});

/* Validation */

$('.control__form').validate({
  errorClass: "invalid",
  rules: {
    //object rule
    userName: {
      required: true,
      minlength: 2
    },
    //string rule
    userPhone: "required",
    //object rule
    controlPolicyCheckbox: {
      required: true,
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
    //object rule
    controlPolicyCheckbox: {
      required: "Cогласитесь с политикой обработки данных"
    }
  },

  /* Ajax */

  submitHandler: function (form) {
    var modal = $('.modal')
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function (response) {
        alert('Все OK');
        $(form)[0].reset(); // W!
        modal.removeClass('modal--visible');

      }
    });
  }
});

/* Validation */

$('.footer__form').validate({
  errorClass: "invalid",
  rules: {
    //object rule
    userName: {
      required: true,
      minlength: 2
    },
    //object rule
    userQuestion: {
      required: true,
      minlength: 10
    },
    //string rule
    userPhone: "required",
    //object rule
    footerPolicyCheckbox: {
      required: true,
    }
  }, // messages
  messages: {
    userName: {
      required: "Имя должно быть обязательно",
      minlength: "Имя не короче двух букв"
    },
    userQuestion: {
      required: "Задайте пожалуйста вопрос",
      minlength: "Опишите вопрос более развернуто"
    },
    userPhone: {
      required: "Телефон должен быть обязательно"
    },
    //object rule
    footerPolicyCheckbox: {
      required: "Cогласитесь с политикой обработки данных"
    }
  },

  /* Ajax */

  submitHandler: function (form) {
    var modal = $('.modal')
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function (response) {
        alert('Все OK');
        $(form)[0].reset(); // W!
        modal.removeClass('modal--visible');

      }
    });
  }
});

/* Validation */

$('.plan__form').validate({
  errorClass: "invalid",
  rules: {
    //object rule
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
    },
    //object rule
    planPolicyCheckbox: {
      required: true,
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
    },
    //object rule
    planPolicyCheckbox: {
      required: "Cогласитесь с политикой обработки данных"
    }
  },

  /* Ajax */

  submitHandler: function (form) {
    var modal = $('.modal')
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function (response) {
        alert('Все OK');
        $(form)[0].reset(); // W!
        modal.removeClass('modal--visible');

      }
    });
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
      zoom: 15
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

  function toggle() {
    bigMap = !bigMap;

    // Добавляем/убираем CSS-класс, определяющий размеры контейнера карты,
    // заданные в абсолютных единицах (300x200 px).
    if (bigMap) {
      $('#map').removeClass('smallMap');
    } else {
      $('#map').addClass('smallMap');
    }

    // Если выставлен флаг, сообщаем карте, что ей следует
    // привести свои размеры к размерам контейнера.
    if ($('#checkbox').prop('checked')) {
      myMap.container.fitToViewport();
    }
  }

  /* Map disable scrolling */

  myMap.behaviors.disable('scrollZoom');


  /* IFrame Player API */



});

var player;
$('.video__play').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '460',
    width: '100%',
    videoId: '54bAimQUGi4',
    events: {
      'onReady': videoPlay,

    }
  });
})

function videoPlay(event) {
  event.target.playVideo();
}