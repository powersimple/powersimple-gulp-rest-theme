// pass the type in the route
// param = url arguments for the REST API
// callback is a dynamic function name 
// Pass the name of a function and it will return the data to that function

var posts = {}, categories = {}, tags = {}, menus = {}

function getREST (route, params, callback, dest) {
  // route =  the type 
  // param = url arguments for the REST API
  // callback = dynamic function name 
  // Pass in the name of a function and it will return the data to that function

  var endpoint = '/wp-json/wp/v2/' + route // local absolute path to the REST API + routing arguments
  console.log('endpoint', endpoint)
  jQuery.ajax({
    url: endpoint, // the url 
    data: params,
    success: function (data, textStatus, request) {
      return data,
        callback(data, dest) // this is the callback that sends the data to your custom function
    },
    error: function (data, textStatus, request) {
      console.log(data.responseText)
    },

    cache: false
  })
}

function setPosts (data, dest) { // special function for the any post type

  var type = 'post'
  for (var i = 0;i < data.length;i++) { // loop through the list of data
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
  if (type !== undefined) {
    switch (type) {
      case type = 'project':
      //  console.log(dest, posts)
        displayProjects(dest, posts)
        break
      case type = 'post':
      //  console.log(dest, posts)
        displayProjects(dest, posts)
        break
      case type = 'page':
      //  console.log(dest, posts)
        displayProjects(dest, posts)
        break
    }
  }

   console.log(type, posts)
  return posts
}

function setMenuItem (item) {
  this_item = {}
  this_item.id = item.ID
  this_item.title = item.title
  this_item.menu_order = item.menu_order
  this_item.object = item.object
  this_item.parent = item.menu_item_parent
  this_item.children = []

  return this_item
}
function setMenu (slug, items) {
  menu = {}
  for (var i = 0; i < items.length; i++) {
    menu[items[i].ID] = setMenuItem(items[i])
    if (items[i].menu_item_parent != 0) { //recursive
      menu[items[i].menu_item_parent].children.push(items[i].ID)
    } 

    // setMenuItem(data[i])

  }
//  console.log(slug, menu)
  return menu
}
function setMenus (data, dest) {
  console.log("raw menu data",data)
  for (var i = 0; i < data.length; i++) {
    menus[data[i].slug] = {}
    menus[data[i].slug].name = data[i].name
    menus[data[i].slug].items = setMenu(data[i].slug, data[i].items)
  }
  console.log("MENUS", menus)
  displayMenus();
}




function setChildCategories (data, dest) {
  for (var i = 0;i < data.length;i++) {
    categories[data[i].id] = data[i]
  }
  // console.log('categories', categories)
  displayCategories(dest, categories)
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

function navTab (data) {
  var tab = ''
  //  console.log(data.id)
  tab += '<li data-id=' + data.id + " class='nav__item'>"

  tab += '<span>'

  tab += data.name

  tab += '</span>'

  tab += '</li>'
  return tab
}

getREST('posts', 'fields=id,type,title,content,slug,excerpt,thumbnail_url,project_info,thumbnail_versions,featured_video,type', setPosts, '#posts') // get posts

// retrieves all projects, with fields from REST API
getREST('pages', 'fields=id,type,title,content,slug,excerpt,thumbnail_url,project_info,thumbnail_versions,featured_video,type', setPosts, '#pages') // get pages

// retrieves all projects, with fields from REST API
getREST('project', 'fields=id,type,title,content,slug,excerpt,thumbnail_url,project_info,thumbnail_versions,featured_videotype', setPosts, '#projects') // get the projects

// retrieves all categories for the development category
getREST('categories', 'parent=19&fields=id,name,count,slug,description,category_posts', setChildCategories, '#category-menu') // returns the children of a specified parent category

// retrieves all categories for the development category
getREST('tags', 'fields=id,name,slug,tag_posts', setTags, 'tags') // returns the tags

// retrieves top menu
getREST('menus', '', setMenus, '#main-menu') // returns the tags
