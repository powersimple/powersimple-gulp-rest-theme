
var increment = 'vw'
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
      size: 73,//use number, it needs to be divided
      increment:"vw"
    },
    { id:"#inner-subring",
      size: 66,//use number, it needs to be divided
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

      } else {
      
       calibrateCircle(ob.id,ob.size,ob.increment)

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

function setContent(dest,object_id,object){

    console.log("setContent",object_id,object)
    console.log("posts",posts,posts.length)
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
        if(posts[object_id]!=undefined){
         console.log("set_content post",object_id,posts[object_id]);
         jQuery("#page-title").html(posts[object_id].title)
         jQuery("#content").html(posts[object_id].content)
        }
      }

    
} 
