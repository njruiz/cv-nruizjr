$(document).ready(function(){

  $(".menu-btn").click(function() {
    $('.navbar-menu-list').addClass("active");
    $('.menu-btn').addClass("hide");
    $('body').addClass("disabledScroll");
  });

  $(".cancel-btn").click(function() {
    $('.navbar-menu-list').removeClass("active");
    $('.menu-btn').removeClass("hide");
    $('body').removeClass("disabledScroll");
  });

  $('.navbar-menu-list').on('click', '.nav-item', function(e) {
    var $this = $(this);

    if ($('.navbar-menu-list').hasClass('active')) {
      $('.navbar-menu-list').removeClass('active');
    }
    if ($('body').hasClass('disabledScroll')) {
      $('body').removeClass('disabledScroll');
    }
    if ($('.menu-btn').hasClass('hide')) {
      $('.menu-btn').removeClass('hide');
    }
  });

  $(document).mouseup(function(e) {
    var container = $('.navbar-menu-list');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('.navbar-menu-list').hasClass('active')) {
        $('.navbar-menu-list').removeClass('active');
      }
      if ($('body').hasClass('disabledScroll')) {
        $('body').removeClass('disabledScroll');
      }
      if ($('.menu-btn').hasClass('hide')) {
        $('.menu-btn').removeClass('hide');
      }
    }
  });

  $(window).scroll(function() {
    // sticky navbar on scroll script
    if(this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }

    if ($(this).scrollTop()) {
      document.getElementsByClassName("btn-back-to-top")[0].style.visibility = "visible";
      $('.btn-back-to-top').fadeIn(200);
    } else {        
      document.getElementsByClassName("btn-back-to-top")[0].style.visibility = "hidden";
      $('.btn-back-to-top').fadeOut(200);
    }
  });
  
  $('.btn-back-to-top').click(function() {
  $('html, body').animate({
      scrollTop: 0
  }, 100);
  });

  // typing text animation script
  var typed = new Typed(".typing", {
      strings: ["Software Engineer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  $('#skillsAccordion .collapsed').click(function() {
      if ($('#skillsAccordion .collapsed').length === 0) {
        $('.collapse-toggle:contains("Collapse")').show();
        $('.collapse-toggle:contains("Expand")').hide();
      }
  
      if ($('#skillsAccordion .collapsed').length === 6) {
        $('.collapse-toggle:contains("Expand")').show();
        $('.collapse-toggle:contains("Collapse")').hide();
      }
  });
  
  $('.collapse-toggle').click(function() {
    const buttonText = $(this).text()
    $('.collapse-toggle').toggle();

    let skillList = [].slice.call($('.collapse'))

    skillList = skillList.filter(e => {
      switch (buttonText) {
        case 'Expand All':
          return !$(e).hasClass('show')
        case 'Collapse All':
          return $(e).hasClass('show')
      }
    })

    skillList.forEach(e => {
      new bootstrap.Collapse(e)
    })
  });

  $('#contactMeBtn').on('click', function(event) {
    window.location = "mailto:njruiz.nr@gmail.com";
  });
});