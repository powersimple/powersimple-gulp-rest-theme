
var increment = 'vw'
var orientation = 'vertical'// this var is used by the slider
var _w = jQuery(window).width()
var _h = jQuery(window).height()
jQuery(document).ready(function () {
    
    reposition_screen()
})
function calibrateCircle(id,size,increment){
  //console.log("calibrate",id,size,increment)
  jQuery(id).css('width', size+increment)
  jQuery(id).css('height', size+increment)
  jQuery(id).css('margin-left', ((size/2)*-1)+increment)
  jQuery(id).css('margin-top', ((size/2)*-1)+increment)

}


function reposition_screen () {
  jQuery('#main').css('height', '100vw')
  jQuery('#main').css('width', '100vh')

  if (_w > _h) {
    orientation = 'vertical'
  } else {
    orientation = 'horizontal'
   
  }
  setSlider()
  var  calibrate_elements = [
    { id:".phi-centered",
      size: 61.8,//use number, it needs to be divided
      increment:"vw"
    },
    { id:"#outer-ring",
      size: 80,//use number, it needs to be divided
      increment:"vw"
    },
    { id:"#inner-ring",
      size: 75,//use number, it needs to be divided
      increment:"vw"
    },
    { id:"#inner-subring",
      size: 68,//use number, it needs to be divided
      increment:"vw"
    }
    
  ]

  
  for(var e=0; e<calibrate_elements.length;e++) {
    var ob = calibrate_elements[e]
    if(_w<540){
      ob.size+=14;
    }
    
      if (_w > _h) {

        if(ob.increment == 'vw'){
          ob.increment = 'vh' //because if landscape orientation needs to be measured to viewer height;
        }

        calibrateCircle(ob.id,ob.size,ob.increment)

        jQuery(".slick-track").css('height', "61.8vh")

      } else {
      
       calibrateCircle(ob.id,ob.size,ob.increment)
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
   
  reposition_screen()

})

function setSlideContent(slide,id){
   console.log("setSlideContent", slide, id, posts)
  jQuery("#slide"+slide+" h2").html(posts["p"+id].title)
  jQuery("#slide" + slide + " section div.content").html(posts["p" + id].content)
  $carousel.slick('slickGoTo', slide);
 
}


function setContent(dest,object_id,object){
    var slide = posts_nav[object_id]
    console.log("setContent",object_id,object)

    //console.log("posts",posts,posts.length)
      var page_title = site_title;

      if(object == 'category'){
        console.log("set_content cat",object_id,categories[object_id].children);
        //
        var data = []
        var cat_children = categories[object_id].children;
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

        }

      } else {
        if (posts["p" + object_id] != undefined) {
        page_title = posts["p" + object_id].title + " | " + site_title;
          document.title = page_title
         
        }
      }
      setSlideContent(slide,object_id)
     


    
} 
