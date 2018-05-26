
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
    
    jQuery('#main-nav').css('width', '80vh')
    jQuery('#main-nav').css('height', '80vh')
    jQuery('#main-nav').css('margin-left', '-40vh')
    jQuery('#main-nav').css('margin-top', '-40vh')
    
  
  } else {
    //console.log("Orientation:Portrait",_w,_h)

    jQuery('.phi-centered').css('width', '61.8vw')
    jQuery('.phi-centered').css('height', '61.8vw')
    jQuery('.phi-centered').css('margin-left', '-29.9vw')
    jQuery('.phi-centered').css('margin-top', '-30.9vw')

    jQuery('#main-nav').css('width', '80vw')
    jQuery('#main-nav').css('height', '80vw')
    jQuery('#main-nav').css('margin-left', '-40vw')
    jQuery('#main-nav').css('margin-top', '-40vw')


  }
  // body
  //jQuery('body').css('max-width', '100vw')
  //jQuery('body').css('max-height', '100vh')

  // stars
  jQuery('#stars').css('height', '100vh')
  jQuery('#stars').css('width', '100vw')
}

jQuery(window).resize(function () {
  _w = jQuery(window).width()
  _h = jQuery(window).height()
  //jQuery('body').css('width', _w + 'px')
  //jQuery('body').css('height', _h + 'px')
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

  //console.log(_w, _h, increment)
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

function setContent(object_id,object){

    
      if(object == 'category'){
        console.log("set_content cat",categories[object_id]);
      } else {
        if(posts[object_id]!=undefined){
         console.log("set_content post",posts[object_id]);
         jQuery("#page-title").html(posts[object_id].title)
         jQuery("#content").html(posts[object_id].content)
        }
      }

    
} 