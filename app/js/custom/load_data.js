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