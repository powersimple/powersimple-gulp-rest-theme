function displayProjects (post_ids) {
  if (post_ids.length > 0) {
    var cards = "<ul class='nav_project'>"
    for (i = 0;i < post_ids.length;i++) {
      displayProjectCard(post_ids[i])
    }
    cards += '</ul>'
  }
  jQuery('#project-nav').html(cards)
}
function displayProjectCard (id) {
  var project = posts[id]
  console.log(project);
  var card = '<li class="project-card">'
  card += project.title
  card += '</li>'
  return card
}

function displayTags (dest, tags) {
  for (var i in tags) {
    console.log('tag', tags[i].id)
  }
}
function displayCategories (dest, categories) {
  var tabs = "<ul class='nav_cat'>"
  for (var i in categories) {
    tabs += navTab(categories[i])
    console.log(dest, 'cat', categories[i].id)
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
