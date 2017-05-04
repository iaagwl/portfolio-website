$(document).ready(function(){
    //Burger menu
    $("#burger-container").on('click', function(){
        $("nav ul").toggleClass("open");
        $(this).toggleClass("open");
    });
    //Viewport Width
    var viewPortWidth = $( window ).width();


    //Changes active class on changing viewports
    $(window).resize(function() {
      viewPortWidth = $( window ).width();
      activeNavigation(viewPortWidth);
    });

    //Initializing active class
    $("nav ul li a.home").addClass('active');
    activeNavigation(viewPortWidth);

});

var activeNavigation = function(viewPortWidth){
  var home = $("nav ul li a.home");
  var projects = $("nav ul li a.projects");
  var about = $("nav ul li a.about");
  var contact = $("nav ul li a.contact");

  //Active navigation on scroll on larger viewports
  if (viewPortWidth >= 768 ){
    var last_known_scroll_position = 0;
    var homePos =  $("#home").offset().top - 500;
    var projectsPos = $("#projects").offset().top - 500;
    var aboutPos = $("#about").offset().top - 500;
    var contactPos = $("#contact").offset().top - 500;

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
  } else {
  //Removes event and active class on smaller viewports
    $( window ).off("scroll");
    home.removeClass("active");
    about.removeClass("active");
    projects.removeClass("active");
    contact.removeClass("active");
  }
}
