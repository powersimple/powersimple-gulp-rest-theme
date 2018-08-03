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

  if (posts[id] != undefined) {
    jQuery("#slide" + slide + " h2").html(posts[+id].title)
    jQuery("#slide" + slide + " section div.content").html(posts[+id].content)
    $carousel.slick('slickGoTo', slide);
  } else {
    //console.log("post undefined", slide, id, posts)
  }
}

function setRelated(post) {

  var this_post = null,
  this_cat = null //defaults

  related = {} // create empty object
  related.cats = {}//vessel for related categories
  related.tags = {}//vessel for related tags 
  //if you put in another taxonomy, add it to the loop above.

  var local_data =  {
      'cats':categories,
      'tags':tags
    }//put taxonomies into object using alias in post


  /*
    ready for a ridiculous triple summersault? Let's do this!
    You see, the nested loop for related content will work the same for categories and tags, so why not put an outer loop of the local data to loop through them, so if this function changes, it does so once. 
  */
  for(var r in related){ //loop through related taxonomy aliases to get name dynamically
    // r is the taxonomy alias =>string

    for (var t = 0; t < post[r].length; t++) { // loop through array of taxonomies of the post object that got passed in.
      //t is the array key of the taxonomy =>int
     // console.log(r,posts[r])
      for (var p = 0; p < local_data[r][post[r][t]].posts.length; p++) {
        //p is the post_id of the related post from the taxonomy
        this_post = local_data[r][post[r][t]].posts[p] // id of post in question
        if(post.id != this_post){ // exclude self
          if(posts[this_post] != undefined){ //proceed if post exists
            var type = posts[this_post].type // set the post type locally
            if(related[r][type]==undefined){ // if this related post type doesn't have an object yet
              related[r][type] = {}//then create one to stuff the posts in 

            }
            related[r] [type][this_post] = this_post; // by using an object by id prevents duplicates


          }

        }
      }
    }
  }

    delete local_data // no reason keeping the aliased taxonomies in memory

    console.log("related",related)
    return related
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
    if (posts[object_id].screen_images.length >0){

        setScreenImages(posts[object_id].screen_images,"#screen-image","circleViewer");//array of images, destination, imagedisplaycallback
    } else {
      jQuery('#screen-image-container').html('')
    }
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