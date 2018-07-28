
var increment = 'vw'
var orientation = 'vertical'// this var is used by the slider
var _w = jQuery(window).width()
var _h = jQuery(window).height()
jQuery(document).ready(function () {
  
   
    jQuery(".wheelnav-outer-nav-title").css("display:none;");
    reposition_screen()
})
function calibrateCircle(id,size,increment){
  //console.log("calibrate",id,size,increment)
  jQuery(id).css('width', size+increment)
  jQuery(id).css('height', size+increment)
  jQuery(id).css('margin-left', ((size/2)*-1)+increment)
  jQuery(id).css('margin-top', ((size/2)*-1)+increment)

}

function pinSlider(){
 
    if (_w >= _h) {
      orientation = 'vertical'
      slider_left = (_w / 2) + ((_h * 0.8) / 2) + _w/10 + "px"
      //console.log(slider_left);
      
      jQuery("#slider.ui-slider-vertical").css("left", slider_left)
      jQuery("#slider.ui-slider-vertical").css("top", "19.9%")

    } else {
      orientation = 'horizontal'
      slider_top = (_h / 2) + ((_w * 0.8) / 2) + 24 + "px"
      jQuery("#slider.ui-slider-horizontal").css("top", slider_top)
      jQuery("#slider.ui-slider-horizontal").css("left", "19.9%")
    }
}



function reposition_screen () {
  jQuery('#main').css('height', '100vw')
  jQuery('#main').css('width', '100vh')


  setSlider()
  pinSlider ();
 jQuery("#slider").css("visibility", "visible")
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
      size: 72,//use number, it needs to be divided
      increment:"vw"
    },
    { id:"#inner-subring",
      size: 65,//use number, it needs to be divided
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
   
  if(posts[id] !=undefined){ 
    jQuery("#slide"+slide+" h2").html(posts[+id].title)
    jQuery("#slide" + slide + " section div.content").html(posts[ + id].content)
    $carousel.slick('slickGoTo', slide);
  } else {
    //console.log("post undefined", slide, id, posts)
  }
}


function setContent(dest,object_id,object){
    var slide = posts_nav[object_id]
   // console.log("setContent",object_id,object)
        if (posts[object_id] != undefined) {
          page_title = posts[object_id].title + " | " + site_title;
          document.title = page_title


          jQuery("#featured-image").attr('src', posts[object_id].thumbnail_url['square-large'])
          //console.log(posts[object_id].thumbnail_url['square-small']);
         

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
    grandparent = counter,
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

var posts = {}, categories = {}, tags = {}, menus = {}, linear_nav = [], posts_nav= {}, posts_slug_ids = {}, slug_nav = {}, data_nav = [], last_dest = 'outer-nav',menu_levels = []
function getStaticJSON (route, callback, dest) {
  // route =  the type 
  // param = url arguments for the REST API
  // callback = dynamic function name 
  // Pass in the name of a function and it will return the data to that function

   // local absolute path to the REST API + routing arguments
  var endpoint = json_path+route+".json"
console.log("endpoint",endpoint);
  jQuery.ajax({
    url: endpoint, // the url 
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
getStaticJSON('tags', setTags, 'tags') // returns the tags

// retrieves top menu
getStaticJSON('menus', setMenus, '#main-menu') // returns the tags




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
//console.log(type, posts)
   
   
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
   //console.log('categories', categories)
  //displayCategories(dest, categories)
  return data
}
function setTags (data, dest) {
  for (var i = 0; i < data.length; i++) {
    tags[data[i].id] = data[i]
  }
  //  console.log('tags', tags)
  displayTags(dest, tags)
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




    //console.log("last-dest: "+ last_dest, "this-dest:"+this_dest)

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

         


        if (last_outer_notch != this_notch.parent) { //if we go backwards we need to change the parent.
            wheels["outer-nav"].navigateWheel(data_nav[this_notch.parent].slice) //dialback the outer ring to its slice
            makeWheelNav("inner-nav", data_nav[this_notch.parent].children, inner_nav_params) //receate the inner ring for the parent
            wheels[this_dest].navigateWheel(this_notch.slice) //now we can dial the inner ring where it belongs
            last_outer_notch = this_notch.parent

        } else {
            wheels["outer-nav"].navigateWheel(data_nav[this_notch.parent].slice)
            if (wheels["inner-nav"] != undefined) { //if the inner nav exists
                console.log('same parent')

                wheels[this_dest].navigateWheel(this_notch.slice)
                if (wheels["inner-subnav"] != undefined) { //and there's an inner subnav
                    wheels["inner-subnav"].raphael.remove() //destroy it

                }

            } else {
               

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