var tags = {},
  categories = {},
  posts = {}

// pass the type in the route
  // param = url arguments for the REST API
  // callback is a dynamic function name 
  // Pass the name of a function and it will return the data to that function

function getREST (route, params, callback, dest) {
  // route =  the type 
  // param = url arguments for the REST API
  // callback = dynamic function name 
  // Pass in the name of a function and it will return the data to that function

  var endpoint = '/wp-json/wp/v2/' + route // local absolute path to the REST API + routing arguments

  jQuery.ajax({
    url: endpoint, // the url 
    data: params,
    success: function (data, textStatus, request) {
      callback(data, dest) // this is the callback that sends the data to your custom function
    },
    error: function (data, textStatus, request) {
      console.log(data.responseText)
    },

    cache: false
  })
}

function setPosts (data, dest) { // special function for the any post type
  var posts = {} // create an empty object
  for (var i = 0;i < data.length;i++) { // loop through the list of data
    posts[data[i].id] = data[i] // adds a key of the post id to address all data in the post as a JSON object
  }
  console.log('posts', posts)

  return posts
}

function setChildCategories (data, dest) {
  for (var i = 0;i < data.length;i++) {
    categories[data[i].id] = data[i]
  }
  console.log('categories', categories)
  displayCategories(dest)
  return data
}

function setTags (data, dest) {
  

  for (var i = 0; i < data.length; i++) {
    tags[data[i].id] = data[i]
  }
  console.log('tags', tags)
  // displayCategories(dest)
  return data
}

function displayCategories (id) {
}
