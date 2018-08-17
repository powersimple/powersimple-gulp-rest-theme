


var increment = 'vw',
  orientation = 'vertical', // this var is used by the slider
  _w = jQuery(window).width(),
  _h = jQuery(window).height(),
  aspect = _w / _h,
  current_notch = 0
jQuery(document).ready(function () {


  jQuery(".wheelnav-outer-nav-title").css("display:none;");
  reposition_screen()
  

})

function initSite(){ // called from the menus callback
    //console.log("load",data_loaded.length,data_score)
    if(menu == undefined){
        window.setTimeout(initSite(), 100);
    }
   
      var m = 'wheel-menu'
      var slug = location.hash = '#about'
      setSlider(m)
      setSlides(m)


      //console.log("menu", menu_config[m].location, items)
      //  jQuery(menu_config[m].location).html(items)
      setSlideShow('wheel-menu'); // creates slides for the slick carousel
      makeWheelNav("outer-nav", menu_levels, wheel_nav_params)
     
      if (location.hash != '') {
        slug = location.hash.replace("#", "");
        //console.log("set by slugHash", slug, slug_nav[slug])
        
        setSliderNotch(slug_nav[slug])

      } else {

        if (menu_config[m].menu_type == "wheel") {
          // THIS IS THE INITIAL LOADING OF THE WHEEL


        }
      }
      setSliderNotch(slug_nav[slug])


      initMatrix();
      //console.log(menus)
}




function calibrateCircle(id, size, increment) {
  //console.log("calibrate",id,size,increment)
  jQuery(id).css('width', size + increment)
  jQuery(id).css('height', size + increment)
  jQuery(id).css('margin-left', ((size / 2) * -1) + increment)
  jQuery(id).css('margin-top', ((size / 2) * -1) + increment)

}

function positionNavElements() {

  if (_w >= _h) {
    orientation = 'vertical'
    slider_left = (_w / 2) + ((_h * 0.8) / 2) + _w / 10 + "px"

    //console.log(slider_left);
    if(aspect >1 && aspect<1.25){
      jQuery("#slider-wrap, #related").addClass("narrow")
    } else {
      jQuery("#slider-wrap, #related").removeClass("narrow")
    }
   

    jQuery("#slider-wrap, #related").addClass("vertical")
    jQuery("#slider-wrap, #related").removeClass("horizontal")


  } else {
    orientation = 'horizontal'
    slider_top = (_h / 2) + ((_w * 0.8) / 2) + 24 + "px"
    if (aspect < 1 && aspect > 0.75) {
      jQuery("#slider-wrap, #related").addClass("narrow")

    } else {
      jQuery("#slider-wrap, #related").removeClass("narrow")

    }

    jQuery("#slider-wrap, #related").addClass("horizontal")
    jQuery("#slider-wrap, #related").removeClass("vertical")
    
  

  }
}

function positionProjector() {
  var top = 50,
      width = "20vw",
      height = "20vw";

  if (aspect > 1.15 && aspect < 1.5) {
    top = ((aspect - 1) * 100) + "%";
    width = "10vw"
    height = "10vw"
    fontSize = 1.2
  } else if (aspect > 0.50 && aspect <= 1.15) {
    top = "20%"
    width = "15vw"
    height = "15vw"
    fontSize = 1
  } else if (aspect >= 1.5) {
    top = "50%";
    width = '20vw'
    height = '20vw'
    fontSize = 1.5
  }
  jQuery("#featured-image-wrap").css("top", top)
  jQuery("#featured-image-wrap").css("width", width)
  jQuery("#featured-image-wrap").css("height", height)

  jQuery("#featured-image-header").css("fontSize", fontSize+'em')
  jQuery("#featured-image-footer").css("fontSize", fontSize*0.8+"em")
   //console.log("aspect",aspect,top);


}


function logoSize() {

  if (aspect > 1.75) {

    //jQuery('#logo').css('width',(aspect*10)+"vh");


  }
}


function reposition_screen() {
  jQuery('#main').css('height', '100vw')
  jQuery('#main').css('width', '100vh')






  setSlider('wheel-menu')
  positionProjector()
  positionNavElements();
  logoSize();
  jQuery("#slider").css("visibility", "visible")


  var calibrate_elements = [{
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


  for (var e = 0; e < calibrate_elements.length; e++) {
    var ob = calibrate_elements[e]

    

    if (_w < 540) {
     // ob.size += 14;
    }

    if (_w > _h) {

      if (ob.increment == 'vw') {
        ob.increment = 'vh' //because if landscape orientation needs to be measured to viewer height;
      }

      calibrateCircle(ob.id, ob.size, ob.increment)

      jQuery(".slick-track").css('height', "61.8vh")

    } else {
     // ob.size += 14
      calibrateCircle(ob.id, ob.size, ob.increment)
      jQuery(".slick-track").css('height', "61.8vw")
    }
  }


  jQuery('#stars').css('height', '100vh')
  jQuery('#stars').css('width', '100vw')
}


jQuery(window).resize(function () {
  _w = jQuery(window).width()
  _h = jQuery(window).height()

  if (_w > _h) {
    increment = 'vh'
  } else {
    increment = 'vw'
  }
  aspect = _w / _h
  reposition_screen()

})

function setSlideContent(slide, id) {
console.log("setSlideContent", slide, id )
  if (posts[id] != undefined) {
    jQuery("#slide" + slide + " h2").html(posts[id].title)
    jQuery("#slide" + slide + " section div.content").html(posts[id].content)
    $carousel.slick('slickGoTo', slide);
  } else {
    //console.log("post undefined", slide, id, posts)
  }
}





function setText(){
  if (typeof languages !== 'undefined') { // wpml present

    if(state.language == languages.default){//use defaults
      page_title = posts[state.post_id].title + " | " + site_title;
    } else { // get data. 

      page_title = retreiveML('posts',"title",state.post_id,state.language)
      console.log("new page title " + page_title)

    }

  } else { // wpml not present, use default
    

    page_title = posts[state.post_id].title + " | " + site_title;
    
  }
  //set variables
  document.title = page_title;
}




function setContent(dest, object_id, object) {
  state.slide = posts_nav[object_id]
  var featured_image = posts[object_id].featured_media;

  //console.log("setContent",object_id,object,posts[object_id])
  if (posts[object_id] != undefined) {
    //console.log("selected post", posts[object_id])
    state.post_id = object_id;
    setText();
    

    setImage(posts[object_id].featured_media, "#featured-image", "square");

    //jQuery("#featured-image-projected").attr('src', featured_image)
    var video_path = uploads_path + "" + posts[object_id].featured_video.video_path;

    
    setVideo(posts[object_id].featured_video.video_id,"#bg-video")
    setRelated(posts[object_id])
    if (posts[object_id].screen_images.length >0){
      
      setScreenImages(posts[object_id].screen_images,"#screen-image","circleViewer");//array of images, destination, imagedisplaycallback
    } else {
      jQuery('#screen-image-container').html('')
    }
//   console.log("tags", posts[object_id].tags)

  }

  setSlideContent(dest, object_id)

  /*
        for category wheels
        if(cat_children.length>0){
          for(c=0;c<cat_children.length;c++){
            
            data.push({
                  id : categories[cat_children[c]].id,
                  title : categories[cat_children[c]].name,
                  type: "category",
                  children: categories[cat_children[c]].children
              }
            )
            
          }
          

          makeWheelNav(dest, data, inner_subnav_params)
          //

        

      } else {
        
      }*/

}