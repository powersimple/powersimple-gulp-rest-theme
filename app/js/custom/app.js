function reposition_screen () {
  var _w = jQuery(window).width()
  var _h = jQuery(window).height()
  if (_w > _h) { // resizes screen to use width or height depending on orientation
    jQuery('.phi-centered').css('width', '61.8vh')
    jQuery('.phi-centered').css('height', '61.8vh')
    jQuery('.phi-centered').css('margin-left', '-30.9vh')
    jQuery('.phi-centered').css('margin-top', '-30.9vh')
  } else {
    jQuery('.phi-centered').css('width', '61.8vw')
    jQuery('.phi-centered').css('height', '61.8vw')
    jQuery('.phi-centered').css('margin-left', '-30.9vw')
    jQuery('.phi-centered').css('margin-top', '-30.9vw')
  }
  // body
  jQuery('body').css('max-width', '100vw')
  jQuery('body').css('max-height', '100vh')

  // stars
  jQuery('#stars').css('height', '100vh')
  jQuery('#stars').css('width', '100vw')
}

jQuery(window).resize(function () {
  reposition_screen()
})
reposition_screen()

function circleMenu (menu) {

  // Demo by http://creative-punch.net

  var items = document.querySelectorAll(menu)

  for (var i = 0, l = items.length; i < l; i++) {
    items[i].style.left = (50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + '%'

    items[i].style.top = (50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + '%'
  }

  document.querySelector('.menu-button').onclick = function (e) {
    e.preventDefault(); document.querySelector('.circle').classList.toggle('open')
  }

}
circleMenu('.circle a');