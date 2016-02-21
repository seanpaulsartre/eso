var Eso = {
  client: { height: 0, width: 0, scrollPosition: $(window).scrollTop() },
   initialize: function() {
    Eso.bind();
  },

  bind: function() {
    $(window).load(function() {
      $("#preload").velocity('fadeOut', { duration: 1000 });
    });

    EsoWidth = $(window).width();
    EsoHeight = $(window).height();
    $(window).resize(Eso.resizeHandler);
    $(window).on('scroll', Eso.scrollAnimations);
    window.sr = new scrollReveal();
    Eso.fillBrowser();
    $('[data-behavior="show-mystic-content"]').on('click', Eso.showMystics);

    $('[data-behavior="read-more"]').on('click', function() {
      $(this).next('ul').velocity('slideDown', { duration: 200 });
      $(this).hide();
    });
    $('[data-behavior="scroll-to-top"]').on('click', function() {
      Eso.scrollToEl('.one');
    });
    $('[data-behavior="scroll-to-follo"]').on('click', function() {
      Eso.scrollToEl('.four');
    });
    $('[data-behavior="scroll-to-press"]').on('click', function() {
      Eso.scrollToEl('.press');
    });
    $('#shuffle > div').click(function () {
      Eso.shuffle();

      $(this).addClass('magnify');
    });
  },

  scrollToEl: function(element) {
    $(element).velocity("scroll", { duration: 1000});
  },

  showMystics: function() {
    $('.show').hide();
    if ($(this).data("name") === 'bell') {
      $('.bell').velocity('fadeIn', { duration: 500 });
    } else if ($(this).data("name") === 'judith') {
      $('.judith').velocity('fadeIn', { duration: 500 });
    } else if ($(this).data("name") === 'randy') {
      $('.randy').velocity('fadeIn', { duration: 500 });
    } else {
      $('.iris').velocity('fadeIn', { duration: 500 });
    }
  },

  fillBrowser: function() {
    EsoWidth = $(window).width();
    EsoHeight = $(window).height();

    var module = $('.esoesoeso');
    module.css('height', EsoHeight);
  },

  resizeHandler: function() {
    Eso.fillBrowser();
  },

  scrollAnimations: function() {
    var dates = $('.dates').offset().top - 200,
    lyricGrid = $('.lyric-grid').offset().top,
    esoWindow = $(window);

    if (esoWindow.scrollTop() >= dates ) {
      $('.main-header, .secondary').hide();
      $('.show-header').show();
      $('header').addClass('light');
      $('.arrow').show();
    } else {
      $('.arrow').hide();
      $('header').removeClass('light');
      $('.main-header').show();
      $('.show-header, .secondary').hide();
    }

    if (esoWindow.scrollTop() >= lyricGrid ) {
      $('.arrow').show();
      $('.secondary').show();
      $('header').addClass('light');
      $('.main-header, .show-header').hide();
    }
  },

  shuffle: function () {
    var parent = $("#shuffle");
    var divs = parent.children();
    do {
      parent.append(divs.splice(Math.floor(Math.random() * divs.length)));
    } while (divs.length);
  }
}
