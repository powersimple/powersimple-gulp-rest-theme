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



function post_order(a, b) {
  if (a < b)
    return -1;
  if (a > b)
    return 1;
  return 0;
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

      console.log(menu_config[m].location, items)
      jQuery(menu_config[m].location).html(items)
     setSlideShow(); // creates slides for the slick carousel
      makeWheelNav("outer-nav", menu_levels, menu_config[m]._p)
      if (location.hash != '') {
        var slug = location.hash.replace("#", "");
        //console.log("set by slugHash", slug, slug_nav[slug])
        
        setSliderNotch(slug_nav[slug])
      } else {

        if (menu_config[m].menu_type == "wheel") {
          // THIS IS THE INITIAL LOADING OF THE WHEEL

          
        }
      }
      //console.log('makeouterwheel',menu_levels);

     
    
      

      //circleMenu('.circle a')
    }
  }


}
function init(){

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