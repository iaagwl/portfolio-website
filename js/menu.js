$(document).ready(function(){
    //Burger menu
    $("#burger-container").on('click', function(){
        $("nav ul").toggleClass("open");
        $(this).toggleClass("open");
    });
    //Initializing active class
    activeNavigation();
});

function activeNavigation() {
  const home = $("nav ul li a.home"),
        projects = $("nav ul li a.projects"),
        about = $("nav ul li a.about"),
        contact = $("nav ul li a.contact"),
        homePos =  $("#home").offset().top -500,
        projectsPos = $("#projects").offset().top - 500,
        aboutPos = $("#about").offset().top - 500,
        contactPos = $("#contact").offset().top - 500;
  let last_known_scroll_position = 0;

  last_known_scroll_position = window.scrollY;
  if (last_known_scroll_position > contactPos){
    home.add(projects).add(about).removeClass("active");
    contact.addClass("active");
  } else if (last_known_scroll_position > aboutPos){
    home.add(projects).add(contact).removeClass("active");
    about.addClass("active");
  } else if (last_known_scroll_position > projectsPos){
    home.add(contact).add(about).removeClass("active");
    projects.addClass("active");
  } else {
    about.add(projects).add(contact).removeClass("active");
    home.addClass("active");
  }

  $( window ).scroll(function() {
    last_known_scroll_position = window.scrollY;
    if (last_known_scroll_position > contactPos){
      home.add(projects).add(about).removeClass("active");
      contact.addClass("active");
    } else if (last_known_scroll_position > aboutPos){
      home.add(projects).add(contact).removeClass("active");
      about.addClass("active");
    } else if (last_known_scroll_position > projectsPos){
      home.add(contact).add(about).removeClass("active");
      projects.addClass("active");
    } else {
      about.add(projects).add(contact).removeClass("active");
      home.addClass("active");
    }
  });
}
