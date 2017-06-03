$(document).ready(function(){
    //Burger menu
    $("#burger-container").on('click', function(){
        $("nav ul").toggleClass("open");
        $(this).toggleClass("open");
    });
    //Viewport Width
    let viewPortWidth = $( window ).width();

    //Changes active class on changing viewports
    $(window).resize(function() {
      viewPortWidth = $( window ).width();
      console.log(viewPortWidth);
      activeNavigation(viewPortWidth);
    });

    //Initializing active class
    //$("nav ul li a.home").addClass('active');
    activeNavigation(viewPortWidth);

});

function activeNavigation(viewPortWidth) {
  const home = $("nav ul li a.home");
  const projects = $("nav ul li a.projects");
  const about = $("nav ul li a.about");
  const contact = $("nav ul li a.contact");
  const homePos =  $("#home").offset().top -500;
  const projectsPos = $("#projects").offset().top - 500;
  const aboutPos = $("#about").offset().top - 500;
  const contactPos = $("#contact").offset().top - 500;
  let last_known_scroll_position = 0;

  last_known_scroll_position = window.scrollY;
  if (last_known_scroll_position > contactPos){
    home.removeClass("active");
    projects.removeClass("active");
    about.removeClass("active");

    contact.addClass("active");

  } else if (last_known_scroll_position > aboutPos){
    home.removeClass("active");
    projects.removeClass("active");
    contact.removeClass("active");

    about.addClass("active");
  } else if (last_known_scroll_position > projectsPos){
    home.removeClass("active");
    about.removeClass("active");
    contact.removeClass("active");

    projects.addClass("active");
  } else {
    about.removeClass("active");
    projects.removeClass("active");
    contact.removeClass("active");

    home.addClass("active");
  }

  $( window ).scroll(function() {
    last_known_scroll_position = window.scrollY;
    if (last_known_scroll_position > contactPos){
      home.removeClass("active");
      projects.removeClass("active");
      about.removeClass("active");

      contact.addClass("active");

    } else if (last_known_scroll_position > aboutPos){
      home.removeClass("active");
      projects.removeClass("active");
      contact.removeClass("active");

      about.addClass("active");
    } else if (last_known_scroll_position > projectsPos){
      home.removeClass("active");
      about.removeClass("active");
      contact.removeClass("active");

      projects.addClass("active");
    } else {
      about.removeClass("active");
      projects.removeClass("active");
      contact.removeClass("active");

      home.addClass("active");
    }
  });
}
