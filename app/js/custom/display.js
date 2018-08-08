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

/*
//OLD
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
*/