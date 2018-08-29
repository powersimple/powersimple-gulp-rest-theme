var increment = 'vw';
oriented = 'horizontal', // BECAUSE iOS doesn't like the variable orientation

orientation_last = '',
slider_orientation = 'vertical', // 
dimension = 'wide',
maxed = false,
maxed_last = false,
maxed_changed = false,
slider_menu = 'wheel-menu',
  _w = jQuery(window).width(),
  _h = jQuery(window).height(),
  aspect = _w / _h,

  current_notch = 0
var wheel_nav_params = {}
jQuery(document).ready(function () {


  jQuery(".wheelnav-outer-nav-title").css("display:none;");

  reposition_screen()


})
jQuery(window).resize(function () {
  _w = jQuery(window).width()
  _h = jQuery(window).height()

  if (_w > _h) {
    increment = 'vh'
    oriented = 'horizontal'
   // orientation_last = 'horizontal'
  } else {
    increment = 'vw'
    oriented = 'vertical'
    //orientation_last = 'vertical'
  }
  aspect = _w / _h
  reposition_screen()

})

function initSite() { // called from the menus callback
  //console.log("load",data_loaded.length,data_score)
  if (menu == undefined) {
    window.setTimeout(initSite(), 100);
  }

 


  setSlider()
  setSlides('wheel-menu')
  setSlides('projects')
  
  //console.log("menu", menu_config[m].location, items)
  //  jQuery(menu_config[m].location).html(items)
  setSlideShow('wheel-menu'); // creates slides for the slick carousel
  makeWheelNav("outer-nav", menus['wheel-menu'].menu_levels)

  if (location.hash != '') {
    slug = location.hash.replace("#", "");
    console.log("set by slugHash", slug, menus['wheel-menu'].slug_nav[slug])

    setSliderNotch(menus['wheel-menu'].slug_nav[slug])

  } else {
    slug = location.hash = '#about'
    
      // THIS IS THE INITIAL LOADING OF THE WHEEL

      setSliderNotch(menus['wheel-menu'].slug_nav[slug])
  }
  


  initMatrix();
  //console.log(menus)
}

function setWheelNavParams(){
  wheel_nav_params = {
      'maxPercent': 1,
      'min': 0.91,
      'max': 1,
      'sel_min': 0.91,
      'sel_max': 1,
  }

    if(maxed == true){
          wheel_nav_params = {
            'maxPercent': 1,
            'min': 0.85,
            'max': 1,
            'sel_min': 0.85,
            'sel_max': 1,
          }
    }




    
}



function positionElements() { // manages classes for sizes, orientation and aspect

  var elements = ["#main","header","footer","#related","#screen"]
  
  slider_orientation: 'vertical'
  dimension = 'wide'
  


  if (_w < _h) { // sets orientation
   
    oriented = 'vertical'
    
    slider_orientation = 'horizontal'
  
  } else {
  
    oriented = 'horizontal'
    slider_orientation = 'vertical'
    
  }
  
  if(orientation_last != oriented){ // this triggers on orientation change
    orientation_last = oriented;
//    console.log("orientation changed to "+oriented,orientation_last)
    setSlider()
  }



  if(aspect<=0.5){
    dimension = "super-narrow"
  } else if(aspect>0.5 && aspect<= 0.75){
    dimension = "narrow"
  } else if(aspect>0.75 && aspect<=0.9){
    dimension = "semi-narrow"
  } else if(aspect>0.9 && aspect<=1.1){
    dimension = "square"
  } else if(aspect>1.1 && aspect<=1.25){
    dimension = "semi-wide"
  } else if(aspect>1.25 && aspect<=1.5){
    dimension = "wide"
  } else if(aspect>1.5 && aspect<=2){
    dimension = "super-wide"
  } else if(aspect>2){
    dimension = "extra-super-wide"
  } 

  for(e=0;e<elements.length;e++){
  //  console.log("set orientation",elements[e],oriented)
    jQuery(elements[e]).removeClass()
    
    jQuery(elements[e]).addClass(dimension)
    jQuery(elements[e]).addClass(oriented)
    

    if(maxed == true){
      jQuery(elements[e]).addClass('maxed')
  
    } else {

    }
  }
  //console.log("slider-wrap",orientation,slider_orientation)

  jQuery('#slider-wrap').removeClass()
  jQuery('#slider-wrap').addClass(slider_orientation)
  jQuery('#slider-wrap').addClass(dimension)
  
}


function positionProjector() {
  var top = 50,
    width = "20vw",
    height = "20vw";

  if (aspect > 1.15 && aspect < 1.5) {
    top = ((aspect - 1) * 100) + "%";
    width = "10vw"
    height = "10vw"
    //fontSize = 1.2
  } else if (aspect > 0.50 && aspect <= 1.15) {
    top = "20%"
    width = "15vw"
    height = "15vw"
    //fontSize = 1
  } else if (aspect >= 1.5) {
    top = "50%";
    width = '20vw'
    height = '20vw'
    //fontSize = 1.5
  }
  jQuery("#featured-image-wrap").css("top", top)
  jQuery("#featured-image-wrap").css("width", width)
  jQuery("#featured-image-wrap").css("height", height)

  //jQuery("#featured-image-header").css("fontSize", fontSize + 'em')
  //jQuery("#featured-image-footer").css("fontSize", fontSize * 0.8 + "em")



}




function reposition_screen() {


  
  var width = '100vw'
  var height = '100vh'
  var top = 0
  var bottom = 0;
  var left = 0;
  var margin_top = 0
  var margin_left = 0;
  var inc = 'vh'

  if (aspect <= 0.5) {
    width = _w + "px"
    height = _w * 2 + "px"
    top = 50
    left = 0
    margin_top = _w * -1
    margin_left = 0
    bottom: _w
    inc = 'px'
  } else if (aspect >= 2) {
    width = _h * 2 + 'px'
    height = _h + 'px'
    top = 0
    left = 50
    margin_top = 0
    botttom: 0
    margin_left = _h * -1
    inc = 'px'
  }
  //jQuery('header').css('width',  width)
  //jQuery('header').css('height', height)
//  jQuery('header').css('top', top + "%")
//  jQuery('header').css('left', left + '%')
//  jQuery('header').css('marginTop', margin_top)
  //jQuery('header').css('marginLeft', margin_left)



  jQuery('#main').css('width', width)
  jQuery('#main').css('height', height)
  jQuery('#main').css('top', top + "%")
  jQuery('#main').css('left', left + "%")
  jQuery('#main').css('marginTop', margin_top + inc)
  jQuery('#main').css('marginLeft', margin_left + inc)




  //console.log("aspect=" + aspect, "_w" + _w, "_h" + _h, "w=" + width, "h=" + height, "t=" + top, "l=" + left, "mt" + margin_top, "ml=" + margin_left);



  positionProjector()
  positionElements();

  jQuery("#slider").css("visibility", "visible")
  
  var calibrate_elements = [{ // default
      id: ".phi-centered",
      size: 61.8, //use number, it needs to be divided
      increment: "vw"
    },
    {
      id: "#outer-ring",
      size: 80, //use number, it needs to be divided
      increment: "vw"
    },
    {
      id: "#inner-ring",
      size: 72, //use number, it needs to be divided
      increment: "vw"
    },
    {
      id: "#inner-subring",
      size: 65, //use number, it needs to be divided
      increment: "vw"
    }

  ]
  maxed_changed = false
  if ((aspect < 0.75 && _w < 768) || (aspect > 1.5 && _h < 640)) { // MAX OUT the wheel size below 768 and wide or narrow 
    maxed = true;
    
    if(maxed_last == false){
      console.log("maxed")
    
    
      maxed_last = true;
      maxed_changed = true
    }
    
  

    calibrate_elements = [{ // for the maxed maxed vdersion
        id: ".phi-centered",
        size: 80, //use number, it needs to be divided
        increment: "vw"
      },
      {
        id: "#outer-ring",
        size: 96, //use number, it needs to be divided
        increment: "vw"
      },
      {
        id: "#inner-ring",
        size: 80, //use number, it needs to be divided
        increment: "vw"
      },
      {
        id: "#inner-subring",
        size: 67, //use number, it needs to be divided
        increment: "vw"
      }

    ]
    
  } else {
   
    maxed = false;
    if(maxed_last == true){
      
      console.log("not maxed")
      maxed_last = false;
      maxed_changed = true

     
    }
 

  }
  if (maxed_changed == true) {
    setWheelNavParams()
    //wheels['outer-nav'].raphael.remove();
    wheels['outer-nav'].createWheel();
    //wheels['inner-nav'].createWheel();
    //wheels['inner-subnav'].createWheel();
    console.log("change", maxed_changed, wheel_nav_params)
  }


  for (var e = 0; e < calibrate_elements.length; e++) { // loops through the rings
    var ob = calibrate_elements[e]

    

    if (_w > _h) {
      ob.increment = 'vh'
     

    } else {
      ob.increment = 'vh'
      

    }
    calibrateCircle(ob.id, ob.size, ob.increment)
      
    //console.log("calibrate",ob.id, ob.size, ob.increment)
  }


  jQuery('#stars').css('height', '100vh')
  jQuery('#stars').css('width', '100vw')
  jQuery('#stars').css('top', 0)
  jQuery('#stars').css('left', 0)
  
  
}
function calibrateCircle(id, size, increment) {
  /*
  console.log("calibrate",id,size,increment)
 
   jQuery(id).css('width', size + increment)
   jQuery(id).css('height', size + increment)
   jQuery(id).css('margin-left', ((size / 2) * -1) + increment)
   jQuery(id).css('margin-top', ((size / 2) * -1) + increment)
*/
 
 }
 


