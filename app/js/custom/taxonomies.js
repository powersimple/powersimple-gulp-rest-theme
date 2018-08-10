function setChildCategories(data, dest) {
  for (var i = 0; i < data.length; i++) {
    categories[data[i].id] = data[i]
  }
  // console.log('categories', categories)
  //displayCategories(dest, categories)
  return data
}

function setCategories(data, dest) {
  //console.log("categories json", dest, data)
  for (var i = 0; i < data.length; i++) { //creates object of categories by key
    categories[data[i].id] = data[i]
  }
  //  console.log('categories', categories)
  //displayCategories(dest, categories)
  return data
}

function setTags(data, dest) {
  for (var i = 0; i < data.length; i++) {
    tags[data[i].id] = data[i]
  }
  //console.log('tags', tags)
  // displayTags(dest, tags)
  return data
}


