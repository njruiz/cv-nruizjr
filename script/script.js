$(document).ready(function(){
    
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop()) {
          $('.btn-back-to-top').fadeIn(200);
        } else {
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