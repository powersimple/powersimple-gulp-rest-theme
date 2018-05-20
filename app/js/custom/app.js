var menu_config = {
  'top-menu': {
    'location': '#main-menu',
    'callback': 'circleMenu'
  }
}
var increment = 'vw'
var _w = jQuery(window).width()
var _h = jQuery(window).height()
jQuery(document).ready(function () {
  
  reposition_screen()
})
function reposition_screen () {


  if (_w > _h) { // resizes screen to use width or height depending on orientation
    //console.log("Orientation:Landscape", _w, _h)

    jQuery('.phi-centered').css('width', '61.8vh')
    jQuery('.phi-centered').css('height', '61.8vh')
    jQuery('.phi-centered').css('margin-left', '-30.9vh')
    jQuery('.phi-centered').css('margin-top', '-30.9vh')

    jQuery('#main-menu').css('width', '100vh')
    jQuery('#main-menu').css('height', '100vh')
    jQuery('#main-menu').css('margin-left', '-50vh')
    jQuery('#main-menu').css('margin-top', '-50vh')

    jQuery('#WebSlice').css('width', '100vh')
    jQuery('#WebSlice').css('height', '100vh')
    jQuery('#WebSlice').css('margin-left', '-50vh')
    jQuery('#WebSlice').css('margin-top', '-50vh')

     
  } else {
    //console.log("Orientation:Portrait",_w,_h)

    jQuery('.phi-centered').css('width', '61.8vw')
    jQuery('.phi-centered').css('height', '61.8vw')
    jQuery('.phi-centered').css('margin-left', '-29.9vw')
    jQuery('.phi-centered').css('margin-top', '-30.9vw')

    jQuery('#main-menu').css('width', '100vw')
    jQuery('#main-menu').css('height', '100vw')
    jQuery('#main-menu').css('margin-left', '-50vw')
    jQuery('#main-menu').css('margin-top', '-50vw')

    jQuery('#WebSlice').css('width', '100vw')
    jQuery('#WebSlice').css('height', '100vw')
    jQuery('#WebSlice').css('margin-left', '-50vw')
    jQuery('#WebSlice').css('margin-top', '-50vw')

  }
  // body
  jQuery('body').css('max-width', '100vw')
  jQuery('body').css('max-height', '100vh')

  // stars
  jQuery('#stars').css('height', '100vh')
  jQuery('#stars').css('width', '100vw')
}

jQuery(window).resize(function () {
  _w = jQuery(window).width()
  _h = jQuery(window).height()
  jQuery('body').css('width', _w + 'px')
  jQuery('body').css('height', _h + 'px')
  //console.log('resize', _w, _h, increment)
  if (_w > _h) {
    increment = 'vh'
  } else {
    increment = 'vw'
  }
   
  reposition_screen()
 // circleMenu('.circle a')
})



function circleMenu (menu) {

  // Demo by http://creative-punch.net

  var items = document.querySelectorAll(menu)
  // console.log(items)

  console.log(_w, _h, increment)
  for (var i = 0, l = items.length; i < l; i++) {
    var calc_l = Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)
    items[i].style.left = (50 - 36 * calc_l) + increment

    var calc_t = Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)
    items[i].style.top = (50 + 35 * calc_t) + increment

   // console.log('left=' + 15 * calc_l, 'top=', 85 * calc_t, increment)
  }

  document.querySelector('.menu-button').onclick = function (e) {
    e.preventDefault(); document.querySelector('.circle').classList.toggle('open')
  }
}
jQuery('#logo').on('click', function (e) {
  e.preventDefault()
// reposition_screen()
})
