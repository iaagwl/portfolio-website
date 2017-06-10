$(window).on("load",() => {
  const viewPortWidth = $(window).width()
  if (viewPortWidth >= 768){
    $('#projects-wrapper').perfectScrollbar({
      suppressScrollY: true,
      wheelSpeed: 0.25,
      maxScrollbarLength: 500
    })
  }
})
