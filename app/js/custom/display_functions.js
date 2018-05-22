function displayPage (dest, posts) {
  var cards = ''
  // console.log(posts)

  if (posts.length > 0) {
    cards = "<ul class='nav_project'>"
    for (i = 0;i < post_ids.length;i++) {
      displayProjectCard(posts[i])
    }
    cards += '</ul>'
  }
  jQuery('#project-nav').html(cards)
}

function displayPosts (dest, posts) {
  var cards = ''
  // console.log(posts)
  if (posts.length > 0) {
    cards = "<ul class='nav_project'>"
    for (i = 0;i < post_ids.length;i++) {
      displayProjectCard(posts[i])
    }
    cards += '</ul>'
  }
  jQuery(dest).html(cards)
}

function displayProjects (dest, posts) {
  var cards = ''
  if (posts.length > 0) {
    cards = "<ul class='nav_project'>"
    for (i = 0;i < post_ids.length;i++) {
      
      displayProjectCard(posts[i])
    }
    cards += '</ul>'
  }
  jQuery('#project-nav').html(cards)
}
function displayProjectCard (id) {
  var project = posts[id]
  console.log('project', id, project)
  var card = '<li class="project-card">'
  card += project.title
  card += '</li>'
  return card
}

function menu_order(a, b) {
  if (a.menu_order < b.menu)
    return -1;
  if (a.menu_order > b.menu_order)
    return 1;
  return 0;
}

function displayMenus () {
  var data = [];
  for (var m in menus) {
    if (menu_config[m] != undefined) {
      var items = ''

      //menus[m].items.sort(function(a,b){return a.menu_order-b.menu_order})

      

      menu_array = [];
      for (var i in menus[m].items) {
        //console.log('menu item', menus[m].items[i], menu_config[m].location)
        if (menus[m].items[i].parent == 0) {
         // console.log("menu", menus[m].items[i].title)
          menu_array.push(menus[m].items[i]);
        }
         // items += '<a href="#" class="">' + menus[m].items[i].title + '</a>'
        
      }
      menu_array.sort(menu_order);
      console.log("menu_array",menu_array);
      var children = [];
      for(var a=0;a<menu_array.length;a++){
        children = [];
       for (var c = 0; c < menu_array[a].children.length;c++){
         
          children.push(
            {
              "title": menus[m].items[menu_array[a].children[c]].title,
              "id": menus[m].items[menu_array[a].children[c]].id,
              "children": menus[m].items[menu_array[a].children[c]].children
            }
          )

       }
        

        data.push({
          "title": menu_array[a].title,
          "id": menu_array[a].id,
          "children":children
        })
      }
      jQuery(menu_config[m].location).html(items)
       if(menu_config[m].menu_type == "wheel"){
         makeWheelNav("WebSlice", data)
       }



      //circleMenu('.circle a')
    }
  }

  
}

function displayTags (dest, tags) {
  for (var i in tags) {
    //console.log('tag', tags[i].id)
  }
}
function displayCategories (dest, categories) {
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
