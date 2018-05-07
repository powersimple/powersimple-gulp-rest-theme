function reposition_screen () {
  var _w = jQuery(window).width()
  var _h = jQuery(window).height()
  if (_w > _h) { // resizes screen to use width or height depending on orientation
    jQuery('#screen').css('width', '61.8vh')
    jQuery('#screen').css('height', '61.8vh')
    jQuery('#screen').css('margin-left', '-30.9vh')
    jQuery('#screen').css('margin-top', '-30.9vh')
  } else {
    jQuery('#screen').css('width', '61.8vw')
    jQuery('#screen').css('height', '61.8vw')
    jQuery('#screen').css('margin-left', '-30.9vw')
    jQuery('#screen').css('margin-top', '-30.9vw')
  }
  //body
  jQuery('body').css('max-width', '100vw')
  jQuery('body').css('max-height', '100vh')
  jQuery('body').css('max-width', '100vw')
  jQuery('body').css('max-height', '100vh')
  //stars
  jQuery('#stars').css('height', '100vh')
  jQuery('#stars').css('width', '100vw')
}

jQuery(window).resize(function () {
  reposition_screen()
})
reposition_screen()
