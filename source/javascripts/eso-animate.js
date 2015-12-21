var Eso = {
  client: { height: 0, width: 0, scrollPosition: $(window).scrollTop() },
   initialize: function() {
    Eso.bind();
  },

  bind: function() {
    EsoWidth = $(window).width();
    EsoHeight = $(window).height();
    $(window).resize(Eso.resizeHandler);
    $(window).load(Eso.resizeHandler);
    $(window).on('scroll', Eso.scrollHandler);

    $('#shuffle > div').click(function () {
      Eso.shuffle();
      $(this).addClass('magnify');
    });

    window.sr = new scrollReveal();

    $('[data-behavior="show-bell"]').on('click', function() {
      $('.show').hide();
      $('.show.bell').show();
    });
    $('[data-behavior="show-judith"]').on('click', function() {
      $('.show').hide();
      $('.show.judith').show();
    });
    $('[data-behavior="show-randy"]').on('click', function() {
      $('.show').hide();
      $('.show.randy').show();
    });
    $('[data-behavior="show-iris"]').on('click', function() {
      $('.show').hide();
      $('.show.iris').show();
    });
    $('[data-behavior="read-more"]').on('click', function() {
      $(this).next('ul').show();
      $(this).hide();
    });
  },

  resizeHandler: function() {
    EsoWidth = $(window).width();
    EsoHeight = $(window).height();

    var module = $('.esoesoeso');
    module.css('height', EsoHeight);
  },

  scrollHandler: function() {
    var dates = $('.dates').offset().top - 200,
    lyricGrid = $('.lyric-grid').offset().top,
    top = $(window);

    if (top.scrollTop() >= dates ) {
      $('.main-header').hide();
      $('.show-header').show();
      $('.secondary').hide();
    } else {
      $('.main-header').show();
      $('.show-header').hide();
      $('.secondary').hide();
    }

    if (top.scrollTop() >= lyricGrid ) {
      $('.secondary').show();
      $('.main-header').hide();
      $('.show-header').hide();
    }
  },

  shuffle: function () {
    var parent = $("#shuffle");
    var divs = parent.children();
    while (divs.length) {
      parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
  }
}
