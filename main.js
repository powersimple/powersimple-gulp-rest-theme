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

    var photoCount = 6;
    var pieceCount = 6;
    var onPhoto = 0;
    var pieceCompleteCount = 0;
    var delay;

    var transitions = ['center', 'random']
    var transitionType = 0;
    var images = []
    var viewerDest = null
    console.log("circleviwer loaded")
    function circleViewer(dest,images) {
        console.log("CIRCLE VIEWER PRELOAD",dest,images)
        images = images
        viewerDest = dest
        for (var i = 0; i < images.length; i++) {
            jQuery('#preload').append('<img src="'+images[i].src+'">')
        };
        loadCircleViewer(dest,images);
       
    }

    function loadCircleViewer(dest,images) {
        jQuery(dest+'-container').html('');
        for ( var i = 0; i < images.length; i++) {
            var newWidth = (((100 - (100 / pieceCount) * i)) / 100) * 100; //((pieceWidth - ((pieceWidth / pieceCount) * i)) / pieceWidth) * 100;
            var newBackgroundSize = 100 + (100 - newWidth) / newWidth * 100; //100 + (100 - newWidth);
            var newTop = ((100 / pieceCount) * i) / 2;

            jQuery(dest+'-container').append('<div class="section" id="piece' + i + '" style="top: ' + newTop + '%; left: ' + newTop + '%; width: ' + newWidth + '%; height: ' + newWidth + '%; background-size:' + newBackgroundSize + '%; background-image: url('+images[i].src+')"></div>')
        };
        nextSlide(images);
    }

    function nextSlide(images) {
        clearInterval(delay);
        pieceCompleteCount = 0;
        ++onPhoto;
        if (onPhoto >= photoCount) {
            onPhoto = 0;
        }
        console.log("next",images)
        for (var i = 0; i < images.length; i++) {
            var spinDelay = 0;
            var spin = 360;
            var piece = jQuery('#piece' + i);
            var image = images[i]
            switch (transitions[transitionType]) {
                case 'random':
                    spinDelay = Math.random() / 2;
                    spin = Math.random() * 360;
                    break;
                case 'center':
                    spinDelay = (pieceCount - i) / 10;
                    spin = 181;
                    break;
            }

            TweenMax.to(piece, 1, {
                delay: spinDelay,
                directionalRotation: spin + '_long',
                onComplete: completeRotation,
                onCompleteParams: [piece,image],
                ease: Power4.easeIn
            })
        }
    }

    function completeRotation(piece,image) {
        console.log("piece",piece)
        piece.css('background-image', 'url('+image.src+')');
        TweenMax.to(piece, 2, {
            directionalRotation: '0_short',
            onComplete: finishPieceanimation,
            ease: Elastic.easeOut
        })
    }

    function finishPieceanimation() {
        ++pieceCompleteCount;
        if (pieceCompleteCount == pieceCount) {
            delay = setInterval(nextSlide, 1000);
        }
    }

function displayPage(dest, posts) {
  var cards = ''
  // console.log(posts)

  if (posts.length > 0) {
    cards = "<ul class='nav_project'>"
    for (i = 0; i < post_ids.length; i++) {
      displayProjectCard(posts[i])
    }
    cards += '</ul>'
  }
  jQuery('#project-nav').html(cards)
}

function displayPosts(dest, posts) {
  var cards = ''
  // console.log(posts)
  if (posts.length > 0) {
    cards = "<ul class='nav_project'>"
    for (i = 0; i < post_ids.length; i++) {
      //displayProjectCard(posts[i])
    }
    cards += '</ul>'
  }

  //jQuery(dest).html(cards)
}

function displayProjects(dest, posts) {
  var cards = ''
  if (posts.length > 0) {
    type = data[i].type // set the type for the log

    posts["p" + data[i].id] = data[i] // adds a key of the post id to address all data in the post as a JSON object


    cards = "<ul class='nav_project'>"
    for (i = 0; i < post_ids.length; i++) {

      displayProjectCard(posts[i])
    }
    cards += '</ul>'
  }
  jQuery('#project-nav').html(cards)
}

function displayProjectCard(id) {
  var project = posts[id]
  //console.log('project', id, project)
  var card = '<li class="project-card">'
  card += project.title
  card += '</li>'
  return card
}

function menu_order(a, b) {
  if (a.menu_order < b.menu_order)
    return -1;
  if (a.menu_order > b.menu_order)
    return 1;
  return 0;
}

function post_order(a, b) {
  if (a < b)
    return -1;
  if (a > b)
    return 1;
  return 0;
}

function setLinearNav(menu) {
  var counter = 0

  for (var i in menu.items) {


    menu.items[i].post = posts[menu.items[i].object_id]
    menu.items[i].slug = posts[menu.items[i].object_id].slug


    id = menu.items[i].object_id.toString()
    linear_nav.push(menu.items[i])

    posts_nav[id] = counter;
    counter++;
  }
  linear_nav.sort(menu_order);
  //SET SLUG NAV
  for (var n = 0; n < linear_nav.length; n++) {

  }

  setSlider(linear_nav)
  setSlides(linear_nav)
  //console.log("linear_nav", linear_nav);
  //console.log("posts_nav", posts_nav);


}

function setLinearDataNav(data) { // sets local data into linear array for wheel

  var counter = 0,
      outer_counter = 0,
      inner_counter = 0,
      inner_subcounter = 0,
      grandparent = 0,
      next_parent = 0,
      dest = 'outer-nav'

  // THESE 3 NESTED LOOPS POPULATE THE data_nav array WITH WHAT IT NEEDS TO BUILD THE WHEEL AND HAVE IT BE CONTROLLED BY THE ORDERED NOTCHES FROM THE NAV

  for (var d = 0; d < data.length; d++) { //outer
    dest = 'outer-nav'
    data[d].dest = dest;
    data[d].slice = outer_counter;
    data[d].notch = counter;
    grandparent = counter;
    data_nav.push(data[d]);
    slug_nav[data[d].slug] = counter;

    counter++;
    for (var c = 0; c < data[d].children.length; c++) { //children
      data[d].children[c].dest = "inner-nav"
      data[d].children[c].slice = c
      data[d].children[c].notch = counter
      data[d].children[c].parent = grandparent
      next_parent = counter
      data_nav.push(data[d].children[c])
      slug_nav[data[d].children[c].slug] = counter;
      counter++
      for (var g = 0; g < data[d].children[c].children.length; g++) { //grandchildren
        data[d].children[c].children[g].dest = "inner-subnav"
        data[d].children[c].children[g].slice = g
        data[d].children[c].children[g].notch = counter
        data[d].children[c].children[g].grandparent = grandparent
        data[d].children[c].children[g].parent = next_parent

        data_nav.push(data[d].children[c].children[g])
        slug_nav[data[d].children[c].children[g].slug] = counter;
        counter++
      }
     // console.log("dataNav", data);
    }

    outer_counter++;

  }

 console.log("dataNav", data_nav);
 // console.log("slug_nav", slug_nav);
}


function displayMenus() {
  var data = [];

  for (var m in menus) {
    if (menu_config[m] != undefined) {
      var items = ''

      //menus[m].items.sort(function(a,b){return a.menu_order-b.menu_order})



      menu_array = [];
      for (var i in menus[m].items) {
        // console.log('menu item', menus[m].items[i], menu_config[m].location)
        if (menus[m].items[i].parent == 0) {
          // console.log("menu", menus[m].items[i].title)

          menu_array.push(menus[m].items[i]);
        }
        // items += '<a href="#" class="">' + menus[m].items[i].title + '</a>'

      }
      menu_array.sort(menu_order);


      var children = [];


      for (var a = 0; a < menu_array.length; a++) {
        children = [];

        for (var c = 0; c < menu_array[a].children.length; c++) {
          var grandchildren = [];
          var nested_children = menus[m].items[menu_array[a].children[c]].children;
          for (var g = 0; g < nested_children.length; g++) {
            grandchildren.push( // data for childe menus
              {
                "title": menus[m].items[nested_children[g]].title,

                "slug": posts[menus[m].items[nested_children[g]].object_id].slug,
                "object": menus[m].items[nested_children[g]].object,
                "object_id": menus[m].items[nested_children[g]].object_id, // the post id

              }
            )

          }



          children.push( // data for childe menus
            {
              "title": menus[m].items[menu_array[a].children[c]].title,
              "slug": posts[menus[m].items[menu_array[a].children[c]].object_id].slug,
              "object": menus[m].items[menu_array[a].children[c]].object,
              "object_id": menus[m].items[menu_array[a].children[c]].object_id, // the post id
              "children": grandchildren
            }
          )

        }


        data.push({ // data for top level
          "title": menu_array[a].title,
          //"id": menu_array[a].id,
          "slug": posts[menu_array[a].object_id].slug,
          "object": menu_array[a].object,
          "object_id": menu_array[a].object_id, //the post_id
          "children": children
        })

      }
      menu_levels = data;
      setLinearDataNav(data);
      setLinearNav(menus[m])


      jQuery(menu_config[m].location).html(items)
     setSlideShow(); // creates slides for the slick carousel
      makeWheelNav("outer-nav", menu_levels, menu_config[m]._p)
      if (location.hash != '') {
        var slug = location.hash.replace("#", "");
        console.log("set by slugHash", slug, slug_nav[slug])
        
        setSliderNotch(slug_nav[slug])
      } else {

        if (menu_config[m].menu_type == "wheel") {
          // THIS IS THE INITIAL LOADING OF THE WHEEL

          
        }
      }
      console.log('makeouterwheel',menu_levels);

     
    
      

      //circleMenu('.circle a')
    }
  }


}

function displayTags(dest, tags) {
  for (var i in tags) {
    //console.log('tag', tags[i].id)
  }
}

function displayCategories(dest, categories) {
  var tabs = "<ul class='nav_cat'>"
  for (var i in categories) {
    tabs += navTab(categories[i])
    //  console.log(dest, 'cat', categories[i].id)
  }
  tabs += '</ul>'
  jQuery(dest).html(tabs)
}

// EVENTS
jQuery('#portfolio').on('click', '.nav__item', function () {
  var cat = jQuery(this).data('id')
  displayProjects(categories[cat].category_posts)

  // console.log('posts', categories[cat].category_posts)
})
// pass the type in the route
// param = url arguments for the REST API
// callback is a dynamic function name 
// Pass the name of a function and it will return the data to that function

var posts = {}, taxonomies = {}, categories = {}, tags = {}, menus = {}, media = {}, linear_nav = [], posts_nav= {}, posts_slug_ids = {}, slug_nav = {}, data_nav = [], last_dest = 'outer-nav',menu_levels = [], related = {}
function getStaticJSON (route, callback, dest) {
  // route =  the type 
  // param = url arguments for the REST API
  // callback = dynamic function name 
  // Pass in the name of a function and it will return the data to that function

   // local absolute path to the REST API + routing arguments
  var json_data = json_path+route+".json"
console.log("jsonfile",json_data);
  jQuery.ajax({
    url: json_data, // the url
    data: '',
    success: function (data, textStatus, request) {
      //console.log(endpoint,data)
      return data,
      
        callback(data, dest) // this is the callback that sends the data to your custom function
        
    },
    error: function (data, textStatus, request) {
      //console.log(endpoint,data.responseText)
    },

    cache: false
  })
}

getStaticJSON('posts', setPosts, '#posts') // get posts

// retrieves all projects, with fields from REST API
getStaticJSON('pages', setPosts, '#pages') // get pages

// retrieves all projects, with fields from REST API
getStaticJSON('project', setPosts, '#projects') // get the projects

// retrieves all categories for the development category
getStaticJSON('categories',  setCategories, '#category-menu') // returns the children of a specified parent category

// retrieves all categories for the development category
getStaticJSON('tags', setTags, '#tags') // returns the tags

// retrieves top menu
getStaticJSON('menus', setMenus, '#main-menu') // returns the tags

getStaticJSON('media', setMedia, '#media')

function setMedia(data, dest) {
  for(var m=0;m<data.length;m++){
    media[data[m].id] = data[m].data;
  }
  console.log("media",media);
}

function setPosts (data, dest) { // special function for the any post type

  var type = 'post'
 

if(Array.isArray(data)){

  for (var i = 0;i < data.length;i++) { // loop through the list of data
    //console.log("home", data[i].id)
    /*
      The REST API nests the output of title and content in the rendered variable, 
      so we must unpack and set it our way, which is just .title and .content
    */
    if (data[i].title !== undefined && data[i].title.rendered !== undefined) { // make sure the var is there
      data[i].title = data[i].title.rendered // lose that stupid rendered parameter
    }

    if (data[i].content !== undefined && data[i].content.rendered !== undefined) { // make sure the var is there
      data[i].content = data[i].content.rendered // lose the unnecessary "rendered" parameter
    }
    
    
    //console.log(dest,data[i]);
    if (data[i].type !== undefined) { // make sure the var is there
      type = data[i].type // set the type for the log
      
      posts[data[i].id] = data[i] // adds a key of the post id to address all data in the post as a JSON object
    }
    
  } 
}  else {
    type = data.type // set the type for the log
      
      posts[data.id] = data // adds a key of the post id to address all data in the post as a JSON object

}

  if (type !== undefined) {
    switch (type) {
      case type = 'project':
     
        break
      case type = 'post':
     
        break
      case type = 'page':
  
        break
    }
  }
console.log(type, posts)
   
   
  return posts
}

function setMenuItem (dest,item) {
  //console.log("setMenuItem",item)
  this_item = {}
  this_item.menu_id = item.ID
  this_item.title = item.title

  this_item.menu_order = item.menu_order
  this_item.object = item.object
  this_item.object_id = item.object_id
  this_item.parent = item.menu_item_parent
  this_item.dest = dest

  
  this_item.children = []

  return this_item
}

function setMenu (dest,slug, items) {
  menu = {}
  for (var i = 0; i < items.length; i++) {
    menu[items[i].ID] = setMenuItem(dest,items[i])
    if (items[i].menu_item_parent != 0) { //recursive
      menu[items[i].menu_item_parent].children.push(items[i].ID)
     
    } else {
      
    }
    menus[dest].menu_array.push(menu[items[i].ID])

  }
  //console.log("MENU ARRAY",menus[dest].menu_array)
 //console.log("SetMenu",slug, menu)
  return menu
}
function setMenus (data, dest) {
  //console.log("raw menu data",data)
  menus[dest] = {};
  menus[dest].menu_array = [];
  for (var i = 0; i < data.length; i++) {
    menus[data[i].slug] = {}
    menus[data[i].slug].name = data[i].name
   // menus[data[i].slug].slug = data[i].slug
    menus[data[i].slug].items = setMenu(dest,data[i].slug, data[i].items)
  }

  
  
  //console.log("MENUS", menus)
  //console.log("menu array",menus[dest])
  displayMenus();

}




function setChildCategories (data, dest) {
  for (var i = 0;i < data.length;i++) {
    categories[data[i].id] = data[i]
  }
  // console.log('categories', categories)
  //displayCategories(dest, categories)
  return data
}

function setCategories (data, dest) {
  //console.log("categories json", dest, data)
  for (var i = 0;i < data.length;i++) {//creates object of categories by key
    categories[data[i].id] = data[i]
  }
   console.log('categories', categories)
  //displayCategories(dest, categories)
  return data
}
function setTags (data, dest) {
  for (var i = 0; i < data.length; i++) {
    tags[data[i].id] = data[i]
  }
 console.log('tags', tags)
 // displayTags(dest, tags)
  return data
}







/* 
=== 
  HERE LIES THE GRAVE OF THE VERSION THAT HIT THE REST API EVERY TIME THE USER HIT THE PAGE
  ALAS, SO INEFFICIENT THAT WAS. NOW, in functions/rest-json.php, the json is rendered statically upon save
====

// THE FORMER FUNCTION GET REST WHICH CONCATENATED THE VARIABLES NEEDED TO RETRIEVE.
function getREST(route, params, callback, dest) {
  // route =  the type 
  // param = url arguments for the REST API
  // callback = dynamic function name 
  // Pass in the name of a function and it will return the data to that function

  var endpoint = '/wp-json/wp/v2/' + route // local absolute path to the REST API + routing arguments
  console.log('endpoint', endpoint + "?" + params)
  jQuery.ajax({
    url: endpoint, // the url 
    data: params,
    success: function (data, textStatus, request) {
      //console.log(endpoint,data)
      return data,

        callback(data, dest) // this is the callback that sends the data to your custom function

    },
    error: function (data, textStatus, request) {
      console.log(endpoint, data.responseText)
    },

    cache: false
  })
}


//HERE ARE ALL THE FUNCTION CALLS, LEFT HERE FOR POSTERITY IN CASE YOU WISH TO ATTEMPT SUCH TOMFOOLERY
var REST_post_filter = "filter[orderby]=ID&order=asc&per_page=100";

getREST('posts', 'fields=id,type,title,content,slug,excerpt,thumbnail_url,project_info,thumbnail_versions,featured_video,type&'+REST_post_filter, setPosts, '#posts') // get posts

// retrieves all projects, with fields from REST API
getREST('pages', 'fields=id,type,title,content,slug,excerpt,thumbnail_url,video,type&'+REST_post_filter, setPosts, '#pages') // get pages

// retrieves all projects, with fields from REST API
getREST('project', 'fields=id,type,title,content,slug,excerpt,thumbnail_url,project_info,thumbnail_versions,featured_videotype&'+REST_post_filter, setPosts, '#projects') // get the projects

// retrieves all categories for the development category
getREST('categories', 'fields=id,name,count,slug,description,category_posts,children', setCategories, '#category-menu') // returns the children of a specified parent category

// retrieves all categories for the development category
getREST('tags', 'fields=id,name,slug,tag_posts', setTags, 'tags') // returns the tags

// retrieves top menu
getREST('menus', '', setMenus, '#main-menu') // returns the tags
*/
var canvas = document.getElementById('matrix');
var ctx = canvas.getContext('2d');
var fontSize = 18;
var chars = generateChars();
var columns;
var drops; // Current position of last letter (for each column)
var drawnToBottom;

// Generate Matrix code characters
function generateChars() {
    var chars = '0123456789';

    // Get ALL half-width katakana characters by unicode value
    for (var i = 0; i <= 55; i++) {
        chars += String.fromCharCode(i + 65382);
    }

    return chars.split('');
}

// Initialize default canvas state
function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = Math.round(canvas.width / fontSize);
    drops = [];

    // Set initial position on y coordinate for each column
    for (var i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    drawnToBottom = false;
}

// Resize canvas to fit window
window.onresize = function () {
    initCanvas();
};

function draw() {
    // Set nearly transparent background so character trail is visible
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set color and font of falling letters
    ctx.fillStyle = '#19FF19';
    ctx.font = 'bold ' + fontSize + 'px monospace';

    var dropCount = drops.length;
    var charCount = chars.length;

    for (var i = 0; i < dropCount; i++) {
        // Choose a random letter
        var text = chars[Math.floor(Math.random() * charCount)];
        // Get the y position of the letter
        var rowNum = drops[i] * fontSize;
        // Draw it!
        ctx.fillText(text, i * fontSize, rowNum);

        // Check if the canvas has been drawn to the bottom
        if (rowNum > canvas.height) drawnToBottom = true;

        // Randomly reset the y position of a column
        if ((!drawnToBottom && Math.random() > 0.925) || (drawnToBottom && Math.random() > 0.95)) drops[i] = 0;

        drops[i]++;
    }
}

initCanvas();
setInterval(draw, 160);
function setImage(id,dest,size){
    setMediaText(id,dest)
    if(media[id]!=undefined){
                jQuery(dest+"-wrap").attr("visibility",'hidden')

        var full_path = uploads_path + media[id].path // uploads path is in header
        var src = media[id].file; // this defaults to the basic file
    
      

        if (media[id].mime == "image/svg+xml"){// if it's an SVG, let the src pass through

        } else {//for real images

            if(size == 'square'){ // if for a square area
                src = getSquareVersion(media[id].meta.sizes,dest) // get the size version of the sq
                console.log(src)
            } else{
                src = media[id].meta.sizes[size] // returns specified size
            }

        }
      
        if(dest == ''){//set path to '' to return the src only
        console.log("Src return", full_path + src)
            return full_path+src;
        } else { // if dest is specified, set the src to the id and 
            jQuery(dest).attr("src",full_path+src)
            setMediaText(id,dest)
        }
        jQuery(dest+"-wrap").css("visibility",'visible')

    } else {
        jQuery(dest+"-wrap").css("visibility",'hidden')
    }
}



function wrapTag(tag,str){
    return "<"+tag+">"+str+"</"+tag+">"
}
function setMediaText(id,dest){

    if(media[id]!=undefined){
        console.log("caption",media[id]);
        jQuery(dest+"-title").html(media[id].title)
        jQuery(dest+"-caption").html(media[id].caption)
        jQuery(dest+"-description").html(media[id].desc)
        jQuery(dest).attr("alt", media[id].alt);
    } else {
        console.log("clear media text",dest);
        jQuery(dest+"-title").html('')
        jQuery(dest+"-caption").html('')
        jQuery(dest+"-description").html('')
        jQuery(dest).attr("alt", '');
    }
    
}

function getSquareVersion(sizes,dest){

   box = { // object getting the container dimensions
           w: jQuery(dest).parent().width(),
           h: jQuery(dest).parent().height()
   }
   console.log("box",box)

    if (box.w > 1280 || box.h > 1280) { //over 1500 use large
        console.log("sq-lg")
        return sizes['sq-lg']
    } else if ((box.w > 250 || box.h > 250) && (box.w <= 1280 || box.h <= 1280)) {
        console.log("sq-med")
        return sizes['sq-med']
    } else {
        console.log("sq-sm")
        return sizes['sq-sm']
    }


} 
function setVideo(id,dest){
    

    if (media[id] != undefined) {

        var full_path = uploads_path + media[id].path // uploads path is in header
        var src = media[id].file; // this defaults to the basic file

        var video = jQuery(dest+' video source').attr("src", full_path+src);
        jQuery(dest).css("display", "block");
        console.log("unhide video player")

        jQuery(dest + ' video')[0].load();
        
        video = jQuery(dest + ' video source').attr("src", full_path + src);
    } else {
        console.log("no video, hide player")
        jQuery(dest).css("display", "none");
    }
}
function setScreenImages(screen_images,dest,callback){
    var images = []
    for(var i=0;i<screen_images.length;i++){
         images.push({
            "src": setImage(screen_images[i],'',"square"),
            "data": media[screen_images[i]]
         })
       
    }
    circleViewer(dest,images)
  //  callback(dest,images)
    console.log("setScreenImages", screen_images, dest, images);


}


/*
window.onload = init;
console.ward = function() {}; // what warnings?

function init() {
  var root = new THREERoot({
    createCameraControls: !true,
    antialias: (window.devicePixelRatio === 1),
    fov: 80
  });

  root.renderer.setClearColor(0x000000, 0);
  root.renderer.setPixelRatio(window.devicePixelRatio || 1);
  root.camera.position.set(0, 0, 60);

  var width = 100;
  var height = 60;

  var slide = new Slide(width, height, 'out');
	var l1 = new THREE.ImageLoader();
	l1.setCrossOrigin('Anonymous');
  slide.setImage(l1.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/winter.jpg'));
  root.scene.add(slide);

  var slide2 = new Slide(width, height, 'in');
  var l2 = new THREE.ImageLoader();
	l2.setCrossOrigin('Anonymous');
	slide2.setImage(l2.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/spring.jpg'));
  root.scene.add(slide2);

  var tl = new TimelineMax({repeat:-1, repeatDelay:1.0, yoyo: true});

  tl.add(slide.transition(), 0);
  tl.add(slide2.transition(), 0);

  createTweenScrubber(tl);

  window.addEventListener('keyup', function(e) {
    if (e.keyCode === 80) {
      tl.paused(!tl.paused());
    }
  });
}

////////////////////
// CLASSES
////////////////////

function Slide(width, height, animationPhase) {
  var plane = new THREE.PlaneGeometry(width, height, width * 2, height * 2);

  THREE.BAS.Utils.separateFaces(plane);

  var geometry = new SlideGeometry(plane);

  geometry.bufferUVs();

  var aAnimation = geometry.createAttribute('aAnimation', 2);
  var aStartPosition = geometry.createAttribute('aStartPosition', 3);
  var aControl0 = geometry.createAttribute('aControl0', 3);
  var aControl1 = geometry.createAttribute('aControl1', 3);
  var aEndPosition = geometry.createAttribute('aEndPosition', 3);

  var i, i2, i3, i4, v;

  var minDuration = 0.8;
  var maxDuration = 1.2;
  var maxDelayX = 0.9;
  var maxDelayY = 0.125;
  var stretch = 0.11;

  this.totalDuration = maxDuration + maxDelayX + maxDelayY + stretch;

  var startPosition = new THREE.Vector3();
  var control0 = new THREE.Vector3();
  var control1 = new THREE.Vector3();
  var endPosition = new THREE.Vector3();

  var tempPoint = new THREE.Vector3();

  function getControlPoint0(centroid) {
    var signY = Math.sign(centroid.y);

    tempPoint.x = THREE.Math.randFloat(0.1, 0.3) * 50;
    tempPoint.y = signY * THREE.Math.randFloat(0.1, 0.3) * 70;
    tempPoint.z = THREE.Math.randFloatSpread(20);

    return tempPoint;
  }

  function getControlPoint1(centroid) {
    var signY = Math.sign(centroid.y);

    tempPoint.x = THREE.Math.randFloat(0.3, 0.6) * 50;
    tempPoint.y = -signY * THREE.Math.randFloat(0.3, 0.6) * 70;
    tempPoint.z = THREE.Math.randFloatSpread(20);

    return tempPoint;
  }

  for (i = 0, i2 = 0, i3 = 0, i4 = 0; i < geometry.faceCount; i++, i2 += 6, i3 += 9, i4 += 12) {
    var face = plane.faces[i];
    var centroid = THREE.BAS.Utils.computeCentroid(plane, face);

    // animation
    var duration = THREE.Math.randFloat(minDuration, maxDuration);
    var delayX = THREE.Math.mapLinear(centroid.x, -width * 0.5, width * 0.5, 0.0, maxDelayX);
    var delayY;

    if (animationPhase === 'in') {
      delayY = THREE.Math.mapLinear(Math.abs(centroid.y), 0, height * 0.5, 0.0, maxDelayY)
    }
    else {
      delayY = THREE.Math.mapLinear(Math.abs(centroid.y), 0, height * 0.5, maxDelayY, 0.0)
    }

    for (v = 0; v < 6; v += 2) {
      aAnimation.array[i2 + v]     = delayX + delayY + (Math.random() * stretch * duration);
      aAnimation.array[i2 + v + 1] = duration;
    }

    // positions

    endPosition.copy(centroid);
    startPosition.copy(centroid);

    if (animationPhase === 'in') {
      control0.copy(centroid).sub(getControlPoint0(centroid));
      control1.copy(centroid).sub(getControlPoint1(centroid));
    }
    else { // out
      control0.copy(centroid).add(getControlPoint0(centroid));
      control1.copy(centroid).add(getControlPoint1(centroid));
    }

    for (v = 0; v < 9; v += 3) {
      aStartPosition.array[i3 + v]     = startPosition.x;
      aStartPosition.array[i3 + v + 1] = startPosition.y;
      aStartPosition.array[i3 + v + 2] = startPosition.z;

      aControl0.array[i3 + v]     = control0.x;
      aControl0.array[i3 + v + 1] = control0.y;
      aControl0.array[i3 + v + 2] = control0.z;

      aControl1.array[i3 + v]     = control1.x;
      aControl1.array[i3 + v + 1] = control1.y;
      aControl1.array[i3 + v + 2] = control1.z;

      aEndPosition.array[i3 + v]     = endPosition.x;
      aEndPosition.array[i3 + v + 1] = endPosition.y;
      aEndPosition.array[i3 + v + 2] = endPosition.z;
    }
  }

  var material = new THREE.BAS.BasicAnimationMaterial(
    {
      shading: THREE.FlatShading,
      side: THREE.DoubleSide,
      uniforms: {
        uTime: {type: 'f', value: 0}
      },
      shaderFunctions: [
        THREE.BAS.ShaderChunk['cubic_bezier'],
        //THREE.BAS.ShaderChunk[(animationPhase === 'in' ? 'ease_out_cubic' : 'ease_in_cubic')],
        THREE.BAS.ShaderChunk['ease_in_out_cubic'],
        THREE.BAS.ShaderChunk['quaternion_rotation']
      ],
      shaderParameters: [
        'uniform float uTime;',
        'attribute vec2 aAnimation;',
        'attribute vec3 aStartPosition;',
        'attribute vec3 aControl0;',
        'attribute vec3 aControl1;',
        'attribute vec3 aEndPosition;',
      ],
      shaderVertexInit: [
        'float tDelay = aAnimation.x;',
        'float tDuration = aAnimation.y;',
        'float tTime = clamp(uTime - tDelay, 0.0, tDuration);',
        'float tProgress = ease(tTime, 0.0, 1.0, tDuration);'
        //'float tProgress = tTime / tDuration;'
      ],
      shaderTransformPosition: [
        (animationPhase === 'in' ? 'transformed *= tProgress;' : 'transformed *= 1.0 - tProgress;'),
        'transformed += cubicBezier(aStartPosition, aControl0, aControl1, aEndPosition, tProgress);'
      ]
    },
    {
      map: new THREE.Texture(),
    }
  );

  THREE.Mesh.call(this, geometry, material);

  this.frustumCulled = false;
}
Slide.prototype = Object.create(THREE.Mesh.prototype);
Slide.prototype.constructor = Slide;
Object.defineProperty(Slide.prototype, 'time', {
  get: function () {
    return this.material.uniforms['uTime'].value;
  },
  set: function (v) {
    this.material.uniforms['uTime'].value = v;
  }
});

Slide.prototype.setImage = function(image) {
  this.material.uniforms.map.value.image = image;
  this.material.uniforms.map.value.needsUpdate = true;
};

Slide.prototype.transition = function() {
  return TweenMax.fromTo(this, 3.0, {time:0.0}, {time:this.totalDuration, ease:Power0.easeInOut});
};


function SlideGeometry(model) {
  THREE.BAS.ModelBufferGeometry.call(this, model);
}
SlideGeometry.prototype = Object.create(THREE.BAS.ModelBufferGeometry.prototype);
SlideGeometry.prototype.constructor = SlideGeometry;
SlideGeometry.prototype.bufferPositions = function () {
  var positionBuffer = this.createAttribute('position', 3).array;

  for (var i = 0; i < this.faceCount; i++) {
    var face = this.modelGeometry.faces[i];
    var centroid = THREE.BAS.Utils.computeCentroid(this.modelGeometry, face);

    var a = this.modelGeometry.vertices[face.a];
    var b = this.modelGeometry.vertices[face.b];
    var c = this.modelGeometry.vertices[face.c];

    positionBuffer[face.a * 3]     = a.x - centroid.x;
    positionBuffer[face.a * 3 + 1] = a.y - centroid.y;
    positionBuffer[face.a * 3 + 2] = a.z - centroid.z;

    positionBuffer[face.b * 3]     = b.x - centroid.x;
    positionBuffer[face.b * 3 + 1] = b.y - centroid.y;
    positionBuffer[face.b * 3 + 2] = b.z - centroid.z;

    positionBuffer[face.c * 3]     = c.x - centroid.x;
    positionBuffer[face.c * 3 + 1] = c.y - centroid.y;
    positionBuffer[face.c * 3 + 2] = c.z - centroid.z;
  }
};


function THREERoot(params) {
  params = utils.extend({
    fov: 60,
    zNear: 10,
    zFar: 100000,

    createCameraControls: true
  }, params);

  this.renderer = new THREE.WebGLRenderer({
    antialias: params.antialias,
    alpha: true
  });
  this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  document.getElementById('three-container').appendChild(this.renderer.domElement);

  this.camera = new THREE.PerspectiveCamera(
    params.fov,
    window.innerWidth / window.innerHeight,
    params.zNear,
    params.zfar
  );

  this.scene = new THREE.Scene();

  if (params.createCameraControls) {
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
  }

  this.resize = this.resize.bind(this);
  this.tick = this.tick.bind(this);

  this.resize();
  this.tick();

  window.addEventListener('resize', this.resize, false);
}
THREERoot.prototype = {
  tick: function () {
    this.update();
    this.render();
    requestAnimationFrame(this.tick);
  },
  update: function () {
    this.controls && this.controls.update();
  },
  render: function () {
    this.renderer.render(this.scene, this.camera);
  },
  resize: function () {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
};

////////////////////
// UTILS
////////////////////

var utils = {
  extend: function (dst, src) {
    for (var key in src) {
      dst[key] = src[key];
    }

    return dst;
  },
  randSign: function () {
    return Math.random() > 0.5 ? 1 : -1;
  },
  ease: function (ease, t, b, c, d) {
    return b + ease.getRatio(t / d) * c;
  },
  fibSpherePoint: (function () {
    var vec = {x: 0, y: 0, z: 0};
    var G = Math.PI * (3 - Math.sqrt(5));

    return function (i, n, radius) {
      var step = 2.0 / n;
      var r, phi;

      vec.y = i * step - 1 + (step * 0.5);
      r = Math.sqrt(1 - vec.y * vec.y);
      phi = i * G;
      vec.x = Math.cos(phi) * r;
      vec.z = Math.sin(phi) * r;

      radius = radius || 1;

      vec.x *= radius;
      vec.y *= radius;
      vec.z *= radius;

      return vec;
    }
  })(),
  spherePoint: (function () {
    return function (u, v) {
      u === undefined && (u = Math.random());
      v === undefined && (v = Math.random());

      var theta = 2 * Math.PI * u;
      var phi = Math.acos(2 * v - 1);

      var vec = {};
      vec.x = (Math.sin(phi) * Math.cos(theta));
      vec.y = (Math.sin(phi) * Math.sin(theta));
      vec.z = (Math.cos(phi));

      return vec;
    }
  })()
};

function createTweenScrubber(tween, seekSpeed) {
  seekSpeed = seekSpeed || 0.001;

  function stop() {
    TweenMax.to(tween, 1, {timeScale:0});
  }

  function resume() {
    TweenMax.to(tween, 1, {timeScale:1});
  }

  function seek(dx) {
    var progress = tween.progress();
    var p = THREE.Math.clamp((progress + (dx * seekSpeed)), 0, 1);

    tween.progress(p);
  }

  var _cx = 0;

  // desktop
  var mouseDown = false;
  document.body.style.cursor = 'pointer';

  window.addEventListener('mousedown', function(e) {
    mouseDown = true;
    document.body.style.cursor = 'ew-resize';
    _cx = e.clientX;
    stop();
  });
  window.addEventListener('mouseup', function(e) {
    mouseDown = false;
    document.body.style.cursor = 'pointer';
    resume();
  });
  window.addEventListener('mousemove', function(e) {
    if (mouseDown === true) {
      var cx = e.clientX;
      var dx = cx - _cx;
      _cx = cx;

      seek(dx);
    }
  });
  // mobile
  window.addEventListener('touchstart', function(e) {
    _cx = e.touches[0].clientX;
    stop();
    e.preventDefault();
  });
  window.addEventListener('touchend', function(e) {
    resume();
    e.preventDefault();
  });
  window.addEventListener('touchmove', function(e) {
    var cx = e.touches[0].clientX;
    var dx = cx - _cx;
    _cx = cx;

    seek(dx);
    e.preventDefault();
  });
}
*/
var gotoslide = function(slide){
 // console.log("click on slick dot ", slide);
  setSlideContent(notch, linear_nav[slide].object_id)
    $( '.slideshow' ).slickGoTo(parseInt(slide));
}
jQuery('.slick-dots li button').on('click', function (e) {
   e.stopPropagation(); // use this
  //console.log("slick dot clicked")
});
function setSlideShow(){
  jQuery('.slideshow').slick({
  //	autoplay: true,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase:  'linear',
    focusoOnSelect: true,
    nextArrow: '<i class="slick-arrow slick-next"></i>',
    prevArrow: '<i class="slick-arrow slick-prev"></i>',
     
  });
   console.log("set slideshow")
}
function setSlide(slide,id){
  /*
  these carousel slides are created here, but their content is populated dynamically
  because it was unreliable populating the content in a loop
  see setSlideContent in app.js
  */
  slide = '\n<div><div id="slide'+slide+'" data-id="'+id+'" class="slide-wrap">'
  slide += '\n\t<h2></h2>'
  slide += '\n\t<div class="img-wrap"></div>'
  slide += '\n\t<section><div class="content"></div></section>'
  slide +='\n</div></div>\n';

  return slide
}


function setSlides(){
  var id="0"
  var content = ''
  var title = ''
  var slides = ''
 //console.log("Begin Render Slides", linear_nav, posts)
 
  if(posts == undefined){
    //console.log("No Posts Data Yet",  posts)
    window.setTimeout(setSlides(), 100);//without this, we cannot relay that the post data is available yet
  } else {
  
  for(i=0;linear_nav[i];i++){
    
     id = linear_nav[i].object_id.toString()
  
      slides += setSlide(i,id)
   
  }
 // console.log("slides rendered")


  jQuery('#article').html(slides);
 
  }


}
var $carousel = jQuery('.slideshow');
jQuery(document).on('keydown', function(e) {
    if(e.keyCode == 37) {
        $carousel.slick('slickPrev');
    }
    if(e.keyCode == 39) {
        $carousel.slick('slickNext');
    }
});

jQuery('a[data-slide]').click(function(e) {
       // console.log("click on slick dot ", slide);
  e.preventDefault();
  var slide = jQuery(this).data('slide');
  //console.log("click on slick dot ", slide);
  setSlideContent(notch, linear_nav[slide].object_id)
  //$carousel.slick('slickGoTo', slideno);

});
function setSlider(){
  //console.log("Set Slider", orientation, linear_nav.length)
   
     jQuery( "#slider" ).slider({
       orientation: orientation,
       range: "max",
       min: 0,
       max: linear_nav.length,
       value: 0,
       slide: function( event, ui ) {
         setSliderNotch(ui.value)
         console.log("slider",ui.value)
        // jQuery( "#amount" ).val( ui.value );
       }
 
 
       
     });
   
     jQuery('.slick-dots li button').on('click', function (e) {
   e.stopPropagation(); // use this
  //console.log("slick dot clicked")
});
 
 
 }
 /*
 jQuery('#slider').on('mousewheel', function(event) {
   event.preventDefault();
   value = jQuery( "#slider" ).slider( "value" );
 
   console.log(event.deltaX, event.deltaY, event.deltaFactor);
 
   //Mousewheel Scrolled up
   if(event.deltaY == -1){
       //alert("scrolled down");
       value = value+1;
       setSliderNotch(value)
   }
   //Mousewheel Scrolled down
   else if(event.deltaY == 1){
      //alert("scrolled up");
       value = value-1;
       setSliderNotch(value)
       
   }
   
 });*/
 (function($){
/*
  $('#slider').bind('mousewheel DOMMouseScroll', function (e) {
    var delta = 0,
      element = $(this),
      value, result, oe;
    oe = e.originalEvent; // for jQuery >=1.7
    value = element.slider('value');

    if (oe.wheelDelta) {
      delta = -oe.wheelDelta;
    }
    if (oe.detail) {
      delta = oe.detail * 40;
    }

    value -= delta / 8;
    if (value > 100) {
      value = 100;
    }
    if (value < 0) {
      value = 0;
    }

    result = element.slider('option', 'slide').call(element, e, {
      value: value
    });
    if (result !== false) {
      element.slider('value', value);
    }
    return false;
  });
  */

  $('div.arrow').on('click', function (e) {
    e.stopPropagation(); // use this
    var id = $(this).attr("id");
    
    var next_notch = current_notch;

    if(id == 'down-arrow'){
      
      if(next_notch == 0){
        next_notch = linear_nav.length-1
      } else {
        next_notch--
      }
      
      
      
    } else if(id == 'up-arrow'){



       if (next_notch == linear_nav.length-1) {
         next_notch = 0
       } else {
         next_notch++
       }
    }
    console.log('arrow_next',next_notch)
    setSliderNotch(next_notch)




  });

})(jQuery)
 

 function setSliderNotch(notch){
 
  console.log("notch",data_nav[notch],notch)
   location.hash = posts[data_nav[notch].object_id].slug

 
   console.log("set slider notch", notch,location.hash)
   jQuery("#slider").slider('value', notch);
    if (linear_nav[notch] != undefined){
      
      setContent(notch, data_nav[notch].object_id, data_nav[notch].object_id)
      triggerWheelNav(notch)
       //selectNavItem(notch);
    }
    current_notch = notch;
  // document.title = linear_nav[notch].title+" | "+site_title
 }


// Declare three.js variables
var camera, scene, renderer, stars = []

// assign three.js objects to each variable
function init () {

  // camera
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.z = 5

  // scene
  scene = new THREE.Scene()

  // renderer
  renderer = new THREE.WebGLRenderer()
  // set the size of the renderer
  renderer.setSize(window.innerWidth, window.innerHeight)

  // add the renderer to the html document body
  jQuery('#stars').append(renderer.domElement)
}

function addSphere () {

  // The loop will move from z position of -1000 to z position 1000, adding a random particle at each position. 
  for ( var z = -1000; z < 1000; z += 20) {

    // Make a sphere (exactly the same as before). 
    var geometry = new THREE.SphereGeometry(0.5, 32, 32)
    var material = new THREE.MeshBasicMaterial({color: 0xffffff})
    var sphere = new THREE.Mesh(geometry, material)

    // This time we give the sphere random x and y positions between -500 and 500
    sphere.position.x = Math.random() * 1000 - 500
    sphere.position.y = Math.random() * 1000 - 500

    // Then set the z position to where it is in the loop (distance of camera)
    sphere.position.z = z

    // scale it up a bit
    sphere.scale.x = sphere.scale.y = 2

    // add the sphere to the scene
    scene.add(sphere)

    // finally push it to the stars array 
    stars.push(sphere)
  }
}

function animateStars () {

  // loop through each star
  for (var i = 0; i < stars.length; i++) {
    star = stars[i]

    // and move it forward dependent on the mouseY position. 
    star.position.z += i / 10

    // if the particle is too close move it to the back
    if (star.position.z > 1000) star.position.z -= 2000
  }
}

function render () {
  // get the frame
  requestAnimationFrame(render)

  // render the scene
  renderer.render(scene, camera)
  animateStars()
}

init()
addSphere()
render()
jQuery(window).on('resize', function () {
  renderer.setSize(window.innerWidth, window.innerHeight)
  
})
//renderer.setSize(window.innerWidth, window.innerHeight)


var menu_config = {
        'top-menu': {
            'menu_type': 'wheel',
            'location': '#outer-nav',
            '_p': {
                'maxPercent': 1,
                'min': 0.91,
                'max': 1,
                'sel_min': 0.91,
                'sel_max': 1,
            }
        }
    },
    inner_nav_params = {
        'maxPercent': 1,
        'min': 0.91,
        'max': 1,
        'sel_min': 0.91,
        'sel_max': 1.0,
    },
    inner_subnav_params = {
        'maxPercent': 1,
        'min': 0.90,
        'max': 1,
        'sel_min': 0.90,
        'sel_max': 1.0,
    },
    last_outer_notch = 0,
    last_inner_notch = 0
    

/**/
var menu_raphael = {}
var wheels = {}

function makeWheelNav(dest, data, _p) {


    if (dest == "outer-nav") {
        child_dest = "inner-nav"
        //console.log("makeWheelNav", dest, data, _p);
        child_params = inner_nav_params;
    } else if (dest == "inner-nav") {
        child_dest = 'inner-subnav'
        child_params = inner_subnav_params;
    }


    var titles = [];
    var ids = []
    wheels[dest] = new wheelnav(dest);
    //console.log(dest,data,_p);
    wheels[dest].spreaderEnable = false;
    //    WebSlice.titleRotateAngle -45;
    wheels[dest].cssMode = true;
    wheels[dest].navAngle = 270;
    wheels[dest].selectedNavItem = 2;
    wheels[dest].selectedNavItemIndex = null;
    wheels[dest].maxPercent = _p.maxPercent;
    // wheels[dest].clickModeRotate = false;
    wheels[dest].slicePathFunction = slicePath().DonutSlice;
    wheels[dest].slicePathCustom = slicePath().PieSliceCustomization();
    wheels[dest].slicePathCustom.minRadiusPercent = _p.min;
    wheels[dest].slicePathCustom.maxRadiusPercent = _p.max;
    wheels[dest].sliceSelectedPathCustom = slicePath().PieSliceCustomization();
    wheels[dest].sliceSelectedPathCustom.minRadiusPercent = _p.sel_min;
    wheels[dest].sliceSelectedPathCustom.maxRadiusPercent = _p.sel_max;
    wheels[dest].titleSelectedAttr = {

    };

    for (i = 0; i < data.length; i++) {
        // console.log(data[i]);
        titles.push(data[i].title);
        ids.push(data[i].id)
    }
    wheels[dest].initWheel(titles) // init before creating wheel so we can define the items.


    var rotation = 90; //first item is is the default rotation
    var degrees = (360 / wheels[dest].navItemCount); //divide circle by number of items
    var tilt = rotation // default the tilt of text to the rotation
    for (i = 0; i < wheels[dest].navItemCount; i++) { // loop through items
        // console.log("tilt"+i,titles[i],tilt);


        wheels[dest].navItems[i].titleRotateAngle = tilt; // set tilt
        tilt = degrees + (rotation - degrees) // rotate angle is additive using this formula


    }

    if (dest == 'outer-nav') {
        //console.log("inner child", data[0].children)
        if (data[0].children.length > 0) {
            //   console.log("inner child", data[0].children)
            makeWheelNav("inner-nav", data[0].children, inner_nav_params)
        }
    }


    wheels[dest].createWheel();

    counter = 0;
    //console.log("NAV ITEMS",data);
    for (var i = 0; i < wheels[dest].navItemCount; i++) {


        // console.log("local-data",i,data[i]);
        /*
        type = data[i].type // set the type for the log
        if(type == "category"){
            data[i].object = "category"
    
            data[i].object_id = data[i].id  
        }
        */
        wheels[dest].navItems[i].data = data[i];




        wheels[dest].navItems[i].navigateFunction = function () {
            // console.log("WheelNav to notch", this.data.notch)
            jQuery("#slider").slider("option", "value", this.data.notch)
            // console.log(child_dest,"this",this.data);
            if (dest != "inner-subnav") {
                if (this.data.children.length > 0) {
                    popAWheelie(dest)



                    //makeWheelNav(child_dest,  this.data.children, child_params)
                    //   console.log("setSLiderNotch", this.data.slug, child_dest)
                    setSliderNotch(slug_nav[this.data.slug])
                } else {
                    //console.log("no-children of",dest)
                    popAWheelie(dest)


                }
            }


            setContent(child_dest, this.data.object_id, this.data.object)

        }

    }
    menu_raphael[dest] = wheels[dest].raphael
    reposition_screen()

    // console.log(dest,menu_raphael[dest]);
}

function triggerWheelNav(notch) {

    var this_notch = data_nav[notch]
    var this_dest = this_notch.dest;

    console.log("trigger wheel, notch:", this_notch, " | dest:", this_dest);




    

    if (this_dest == 'outer-nav') {
        if (wheels["inner-nav"] != undefined) {
            wheels[this_dest].navigateWheel(this_notch.slice)

        }
        popAWheelie("inner-nav")
        if (this_notch.children.length > 0) {

            makeWheelNav("inner-nav", this_notch.children, inner_nav_params)
        }





        last_outer_notch = notch;

    } else if (this_dest == 'inner-nav') {

        
        console.log(last_outer_notch, last_inner_notch,notch,this_notch)
        if (last_outer_notch != this_notch.parent) { //if we go backwards we need to change the parent.
            wheels["outer-nav"].navigateWheel(data_nav[this_notch.parent].slice) //dialback the outer ring to its slice
            makeWheelNav("inner-nav", data_nav[this_notch.parent].children, inner_nav_params) //receate the inner ring for the parent
            wheels[this_dest].navigateWheel(this_notch.slice) //now we can dial the inner ring where it belongs
            last_outer_notch = this_notch.parent

        } else {

            wheels["outer-nav"].navigateWheel(data_nav[this_notch.parent].slice)
            if (wheels["inner-nav"] != undefined) { //if the inner nav exists
               
            console.log(' != undefined')
                wheels[this_dest].navigateWheel(this_notch.slice)
                if (wheels["inner-subnav"] != undefined) { //and there's an inner subnav
                    wheels["inner-subnav"].raphael.remove() //destroy it

                }

            } else {
               
                      console.log('  undefined')
                makeWheelNav("inner-nav", data_nav[this_notch.parent].children, inner_nav_params)
                wheels[this_dest].navigateWheel(this_notch.slice)
            }


            if (this_notch.children.length > 0) { //if there are children 
                makeWheelNav("inner-subnav", this_notch.children, inner_nav_params) //make a ring for them
            } else {
                popAWheelie("inner-subnav") //blow up the ring that that's there.
            }
        }
        last_inner_notch = notch


    } else if (this_dest == 'inner-subnav') { // onto the third inner ring
        //congratulations outer-ring you're a grandparent.




        if (last_outer_notch != this_notch.grandparent) { //if we go backwards we need to change the parent.
            wheels["outer-nav"].navigateWheel(data_nav[this_notch.grandparent].slice) //dialback the outer ring to its slice
            last_outer_notch = this_notch.grandparent // set the outer notch back so we can go forward again.
        }
        if (last_inner_notch != this_notch.parent) { //who's your daddy?
            console.log("where have I gone wrong?", this_notch);
            //receate the inner ring for the parent
            wheels["inner-nav"].navigateWheel(data_nav[this_notch.parent].slice)
            //now we can dial the inner ring where it belongs
            makeWheelNav("inner-subnav", data_nav[this_notch.parent].children, inner_nav_params) //receate the inner ring for the parent
            wheels["inner-subnav"].navigateWheel(this_notch.slice) //steer to right slice

            last_inner_notch = this_notch.parent //I am your father
        } else {
            if (wheels["inner-subnav"] == undefined) {
                makeWheelNav("inner-subnav", this_notch.children, inner_nav_params)//birth of the inner ring

            } else {
                wheels[this_dest].navigateWheel(this_notch.slice) //steer inner ring
            }
        }


    }





    last_dest = this_dest;

    //console.log("trigger_wheelNav",this_notch);

}

function popAWheelie(dest) { // this removes the inner rings when you click on navigation and reloads them as necessary
    if (dest == "outer-nav") { // if outer ring
        if (wheels["inner-nav"] != undefined) { //and inner ring exists
            wheels["inner-nav"].raphael.remove(); // destroy it

            if (wheels["inner-subnav"] != undefined) { //if  inner subnav
                wheels["inner-subnav"].raphael.remove() //destoy that too.
            }
        }

    } else if (dest == "inner-nav") { // if you select from the inner nave
        if (wheels["inner-subnav"] != undefined) { //and there's an inner subnav
            wheels["inner-subnav"].raphael.remove() //destroy it
        }
    }
    /*
     if (wheels["inner-nav"] != undefined) { //and inner ring exists
         wheels["inner-nav"].raphael.remove(); // destroy it
         child_dest = "inner-nav" //outer's inner
         if (wheels["inner-subnav"] != undefined) { //if  inner subnav
             wheels["inner-subnav"].raphael.remove() //destoy that too.
         }
     } 
     */
    /*if (dest == "inner-subnav") { // if you select from the inner nave
        if (wheels["inner-subnav"] != undefined) { //and there's an inner subnav
            wheels["inner-subnav"].raphael.remove() //destroy it
            
        }
    }*/


}