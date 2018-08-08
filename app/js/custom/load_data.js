// pass the type in the route
// param = url arguments for the REST API
// callback is a dynamic function name 
// Pass the name of a function and it will return the data to that function



function getStaticJSON(route, callback) {
  /*
    route =  the type 
    param = url arguments for the REST API
]   callback = dynamic function name 
    Pass in the name of a function and it will return the data to that function
    */

  var json_data = json_path + route + ".json" // local absolute path to the REST API + routing arguments
  //console.log("jsonfile",json_data);
  jQuery.ajax({
    url: json_data, // the url
    data: '',
    success: function (data, textStatus, request) {
      //console.log(endpoint,data)
      return data,

        callback(data) // this is the callback that sends the data to your custom function

    },
    error: function (data, textStatus, request) {
      //console.log(endpoint,data.responseText)
    },

    cache: false
  })
}

getStaticJSON('posts', setPosts) // get posts

// retrieves all projects, with fields from REST API
getStaticJSON('pages', setPosts) // get pages

// retrieves all projects, with fields from REST API
getStaticJSON('project', setPosts) // get the projects

// retrieves all categories for the development category
getStaticJSON('categories', setCategories) // returns the children of a specified parent category

// retrieves all categories for the development category
getStaticJSON('tags', setTags) // returns the tags

// retrieves top menu
getStaticJSON('menus', setMenus) // returns the tags

getStaticJSON('media', setMedia)

function setMedia(data, dest) {
  for (var m = 0; m < data.length; m++) {
    media[data[m].id] = data[m].data;
  }
  console.log("media", media);
}

function setPosts(data) { // special function for the any post type

  var type = 'post'


  if (Array.isArray(data)) {

    for (var i = 0; i < data.length; i++) { // loop through the list of data
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


      
      if (data[i].type !== undefined) { // make sure the var is there
        type = data[i].type // set the type for the log

        posts[data[i].id] = data[i] // adds a key of the post id to address all data in the post as a JSON object
      }

    }
  } else {
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

function setMenuItem(item) {
  //console.log("setMenuItem",item)
  var this_item = {}
  this_item.menu_id = item.id
  this_item.title = item.title

  this_item.menu_order = item.menu_order
  this_item.object = item.object
  this_item.object_id = item.object_id
  this_item.parent = item.menu_item_parent
  this_item.slug = item.slug
  this_item.url = item.url
  


  this_item.children = []

  return this_item
}

function setMenu(slug, items) {
  
  menu = {}
  for (var i = 0; i < items.length; i++) {
   //console.log("menu_items",items[i])
    menu[items[i].id] = setMenuItem(items[i])

    if (items[i].menu_item_parent != 0) { //recursive
      
      menu[items[i].menu_item_parent].children.push(items[i].id)

    } else {

    }
  menus[slug].menu_array.push(menu[items[i].id])

  }
  //console.log("MENU ARRAY",menus[dest].menu_array)
  console.log("SetMenu",slug, menu)
  return menu
}

function setMenus(data) {
console.log("raw menu data",data) // all the menu data
 
  

 
  for (var i = 0; i < data.length; i++) {//loop through menus
    menus[data[i].slug] = {} // store data in slug object 
    menus[data[i].slug].name = data[i].name
    menus[data[i].slug].menu_array = [] // this instance gets built in the setMenu Function called for the items object
    menus[data[i].slug].slug = data[i].slug
    menus[data[i].slug].items = setMenu(data[i].slug, data[i].items)
    // now that menu_array is complete we use it to build our menu levels
    menus[data[i].slug].levels = setMenuLevels(data[i].slug);
  //  console.log("set menu", items)
    
  }




  console.log("MENUS", menus)
 
  

}




function setChildCategories(data) {
  for (var i = 0; i < data.length; i++) {
    categories[data[i].id] = data[i]
  }
  // console.log('categories', categories)

  return data
}

function setCategories(data) {

  for (var i = 0; i < data.length; i++) { //creates object of categories by key
    categories[data[i].id] = data[i]
  }
  console.log('categories', categories)

  return data
}

function setTags(data) {
  for (var i = 0; i < data.length; i++) {
    tags[data[i].id] = data[i]
  }
  console.log('tags', tags)

  return data
}