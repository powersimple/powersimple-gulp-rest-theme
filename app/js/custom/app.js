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

function calibrateCircle(id, size, increment) {
  //console.log("calibrate",id,size,increment)
  jQuery(id).css('width', size + increment)
  jQuery(id).css('height', size + increment)
  jQuery(id).css('margin-left', ((size / 2) * -1) + increment)
  jQuery(id).css('margin-top', ((size / 2) * -1) + increment)

}

function pinSlider() {

  if (_w >= _h) {
    orientation = 'vertical'
    slider_left = (_w / 2) + ((_h * 0.8) / 2) + _w / 10 + "px"

    //console.log(slider_left);

    jQuery("#slider-wrap").css("left", slider_left)
    jQuery("#slider-wrap").css("top", "19.9%")
    jQuery("#slider-wrap").css("height", "67%")
    jQuery("#slider-wrap").css("width", "auto")

    jQuery("#up-arrow").addClass("up-arrow-vertical")
    jQuery("#up-arrow").removeClass("up-arrow-horizontal")

    jQuery("#down-arrow").addClass("down-arrow-vertical")
    jQuery("#down-arrow").removeClass("down-arrow-horizontal")

  } else {
    orientation = 'horizontal'
    slider_top = (_h / 2) + ((_w * 0.8) / 2) + 24 + "px"
    jQuery("#slider-wrap").css("top", slider_top)
    jQuery("#slider-wrap").css("left", "19.9%")
    jQuery("#slider-wrap").css("width", "68%")
    jQuery("#slider-wrap").css("height", "auto")

    jQuery("#up-arrow").removeClass("up-arrow-vertical")
    jQuery("#up-arrow").addClass("up-arrow-horizontal")

    jQuery("#down-arrow").removeClass("down-arrow-vertical")
    jQuery("#down-arrow").addClass("down-arrow-horizontal")

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
   console.log("aspect",aspect,top);


}


function logoSize() {

  if (aspect > 1.75) {

    //jQuery('#logo').css('width',(aspect*10)+"vh");


  }
}


function reposition_screen() {
  jQuery('#main').css('height', '100vw')
  jQuery('#main').css('width', '100vh')






  setSlider()
  positionProjector()
  pinSlider();
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
      ob.size += 14;
    }

    if (_w > _h) {

      if (ob.increment == 'vw') {
        ob.increment = 'vh' //because if landscape orientation needs to be measured to viewer height;
      }

      calibrateCircle(ob.id, ob.size, ob.increment)

      jQuery(".slick-track").css('height', "61.8vh")

    } else {

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

  if (posts[id] != undefined) {
    jQuery("#slide" + slide + " h2").html(posts[+id].title)
    jQuery("#slide" + slide + " section div.content").html(posts[+id].content)
    $carousel.slick('slickGoTo', slide);
  } else {
    //console.log("post undefined", slide, id, posts)
  }
}

function setRelated(post) {
  // console.log("related",post,post.cats, post.tags,posts)
  related = {
    'project': [],
    'page': [],
    'post': []
  }
  var this_post = null,
    this_cat = null
  for (var c = 0; c < post.cats.length; c++) {
    //this_cat = categories[post.cats[c]].name
    console.log("cat", post.cats[c], categories[post.cats[c]].name, categories[post.cats[c]].posts);
    for (var p = 0; p < categories[post.cats[c]].posts.length; p++) {
      this_post = categories[post.cats[c]].posts[p]
      console.log(this_cat, "post", p, this_post, posts[this_post])
    }
  }




}



function setContent(dest, object_id, object) {
  var slide = posts_nav[object_id]
  var featured_image = posts[object_id].featured_media;

  console.log("setContent",object_id,object,posts[object_id])
  if (posts[object_id] != undefined) {
    console.log("selected post", posts[object_id])
    page_title = posts[object_id].title + " | " + site_title;
    document.title = page_title

    setImage(posts[object_id].featured_media, "#featured-image", "square");

    //jQuery("#featured-image-projected").attr('src', featured_image)
    var video_path = uploads_path + "" + posts[object_id].featured_video.video_path;

    
    setVideo(posts[object_id].featured_video.video_id,"#bg-video")
    setRelated(posts[object_id])

    console.log("tags", posts[object_id].tags)

  }
  setSlideContent(slide, object_id)

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