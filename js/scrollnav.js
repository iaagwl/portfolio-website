$(document).ready(function(){

  //Smooth scrolling on nav clicks
  $('.slide-section').click(function(e){
    const linkHref = $(this).attr('href'),
          viewPortWidth = $(window).width()

    if (viewPortWidth >= 768){
      $('html, body').animate({
        scrollTop: $(linkHref).offset().top
      }, 1000)
    }

    if (viewPortWidth < 768){
      const difference = (linkHref !== "#projects") ? 75 : 0
      $('html, body').animate({
        scrollTop: $(linkHref).offset().top - difference
      }, 1000)

      $("nav ul").toggleClass("open")
      $("#burger-container").toggleClass("open")
    }
    e.preventDefault()
  })

  //Smooth scrolling on Home arrow and Logo clicks
  $('.slide-section-home').click(function(e){
    const linkHref = $(this).attr('href')

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    }, 1000)

    e.preventDefault()
  })

})
