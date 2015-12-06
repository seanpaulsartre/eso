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
    $(window).scroll(Eso.scrollHandler);
    $('body').css('border', '2px solid purple');
    $('#shuffle > div').click(function () {
      Eso.shuffle();
      $(this).addClass('magnify');
    });
  },

  resizeHandler: function() {
    EsoWidth = $(window).width();
    EsoHeight = $(window).height();

    var module = $('.esoesoeso');
    module.css('height', EsoHeight);
  },

  shuffle: function () {
    var parent = $("#shuffle");
    var divs = parent.children();
    while (divs.length) {
      parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
  },

}
