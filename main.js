var menu_config = {
  'top-menu': {
    'menu_type': 'wheel',
    'location': '#main-menu',
    'callback': 'circleMenu'
  }
}

var increment = 'vw'
var _w = jQuery(window).width()
var _h = jQuery(window).height()
jQuery(document).ready(function () {
  
    reposition_screen()
})
function reposition_screen () {


  if (_w > _h) { // resizes screen to use width or height depending on orientation
    //console.log("Orientation:Landscape", _w, _h)

    jQuery('.phi-centered').css('width', '61.8vh')
    jQuery('.phi-centered').css('height', '61.8vh')
    jQuery('.phi-centered').css('margin-left', '-30.9vh')
    jQuery('.phi-centered').css('margin-top', '-30.9vh')
    
    jQuery('#main-nav').css('width', '80vh')
    jQuery('#main-nav').css('height', '80vh')
    jQuery('#main-nav').css('margin-left', '-40vh')
    jQuery('#main-nav').css('margin-top', '-40vh')
    
  

     
  } else {
    //console.log("Orientation:Portrait",_w,_h)

    jQuery('.phi-centered').css('width', '61.8vw')
    jQuery('.phi-centered').css('height', '61.8vw')
    jQuery('.phi-centered').css('margin-left', '-29.9vw')
    jQuery('.phi-centered').css('margin-top', '-30.9vw')

    jQuery('#main-nav').css('width', '80vw')
    jQuery('#main-nav').css('height', '80vw')
    jQuery('#main-nav').css('margin-left', '-40vw')
    jQuery('#main-nav').css('margin-top', '-40vw')


  }
  // body
  //jQuery('body').css('max-width', '100vw')
  //jQuery('body').css('max-height', '100vh')

  // stars
  jQuery('#stars').css('height', '100vh')
  jQuery('#stars').css('width', '100vw')
}

jQuery(window).resize(function () {
  _w = jQuery(window).width()
  _h = jQuery(window).height()
  //jQuery('body').css('width', _w + 'px')
  //jQuery('body').css('height', _h + 'px')
  //console.log('resize', _w, _h, increment)
  if (_w > _h) {
    increment = 'vh'
  } else {
    increment = 'vw'
  }
   
  reposition_screen()
 // circleMenu('.circle a')
})



function circleMenu (menu) {

  // Demo by http://creative-punch.net

  var items = document.querySelectorAll(menu)
  // console.log(items)

  console.log(_w, _h, increment)
  for (var i = 0, l = items.length; i < l; i++) {
    var calc_l = Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)
    items[i].style.left = (50 - 36 * calc_l) + increment

    var calc_t = Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)
    items[i].style.top = (50 + 35 * calc_t) + increment

   // console.log('left=' + 15 * calc_l, 'top=', 85 * calc_t, increment)
  }

  document.querySelector('.menu-button').onclick = function (e) {
    e.preventDefault(); document.querySelector('.circle').classList.toggle('open')
  }
}
jQuery('#logo').on('click', function (e) {
  e.preventDefault()
// reposition_screen()
})

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

/*

Derived from js-mindmap, with kind thanks to.
Copyright (c) 2008/09/10 Kenneth Kufluk http://kenneth.kufluk.com/

 MIT (X11) license

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

*/



;(function ($) {
  'use strict'

  var TIMEOUT = 4, // movement timeout in seconds
    CENTRE_FORCE = 3, // strength of attraction to the centre by the active node
    Node,
    Line

  // Define all Node related functions.
  Node = function (obj, name, parent, opts) {
    this.obj = obj
    this.options = obj.options

    this.name = name
    this.href = opts.href
    if (opts.url) {
      this.url = opts.url
    }

    // create the element for display
    this.el = $('<a href="' + this.href + '">' + this.name + '</a>').addClass('node')
    $('body').prepend(this.el)

    if (!parent) {
      obj.activeNode = this
      this.el.addClass('active root')
    } else {
      obj.lines[obj.lines.length] = new Line(obj, this, parent)
    }
    this.parent = parent
    this.children = []
    if (this.parent) {
      this.parent.children.push(this)
    }

    // animation handling
    this.moving = false
    this.moveTimer = 0
    this.obj.movementStopped = false
    this.visible = true
    this.x = 1
    this.y = 1
    this.dx = 0
    this.dy = 0
    this.hasPosition = false

    this.content = [] // array of content elements to display onclick

    this.el.css('position', 'absolute')

    var thisnode = this

    this.el.draggable({
      drag: function () {
        obj.root.animateToStatic()
      }
    })

    this.el.click(function () {
      if (obj.activeNode) {
        obj.activeNode.el.removeClass('active')
        if (obj.activeNode.parent) {
          obj.activeNode.parent.el.removeClass('activeparent')
        }
      }
      if (typeof opts.onclick === 'function') {
        opts.onclick(thisnode)
      }
      obj.activeNode = thisnode
      obj.activeNode.el.addClass('active')
      if (obj.activeNode.parent) {
        obj.activeNode.parent.el.addClass('activeparent')
      }
      obj.root.animateToStatic()
      return false
    })
  }

  // ROOT NODE ONLY:  control animation loop
  Node.prototype.animateToStatic = function () {
    clearTimeout(this.moveTimer)
    // stop the movement after a certain time
    var thisnode = this
    this.moveTimer = setTimeout(function () {
      // stop the movement
      thisnode.obj.movementStopped = true
    }, TIMEOUT * 1000)

    if (this.moving) {
      return
    }
    this.moving = true
    this.obj.movementStopped = false
    this.animateLoop()
  }

  // ROOT NODE ONLY:  animate all nodes (calls itself recursively)
  Node.prototype.animateLoop = function () {
    var i, len, mynode = this
    this.obj.canvas.clear()
    for (i = 0, len = this.obj.lines.length; i < len; i++) {
      this.obj.lines[i].updatePosition()
    }
    if (this.findEquilibrium() || this.obj.movementStopped) {
      this.moving = false
      return
    }
    setTimeout(function () {
      mynode.animateLoop()
    }, 10)
  }

  // find the right position for this node
  Node.prototype.findEquilibrium = function () {
    var i, len, stable = true
    stable = this.display() && stable
    for (i = 0, len = this.children.length; i < len; i++) {
      stable = this.children[i].findEquilibrium() && stable
    }
    return stable
  }

  // Display this node, and its children
  Node.prototype.display = function (depth) {
    var parent = this,
      stepAngle,
      angle

    depth = depth || 0

    if (this.visible) {
      // if: I'm not active AND my parent's not active AND my children aren't active ...
      if (this.obj.activeNode !== this && this.obj.activeNode !== this.parent && this.obj.activeNode.parent !== this) {
        // TODO hide me!
        this.el.hide()
        this.visible = false
      }
    } else {
      if (this.obj.activeNode === this || this.obj.activeNode === this.parent || this.obj.activeNode.parent === this) {
        this.el.show()
        this.visible = true
      }
    }
    this.drawn = true
    // am I positioned?  If not, position me.
    if (!this.hasPosition) {
      this.x = this.options.mapArea.x / 2
      this.y = this.options.mapArea.y / 2
      this.el.css({'left': this.x + 'px', 'top': this.y + 'px'})
      this.hasPosition = true
    }
    // are my children positioned?  if not, lay out my children around me
    stepAngle = Math.PI * 2 / this.children.length
    $.each(this.children, function (index) {
      if (!this.hasPosition) {
        if (!this.options.showProgressive || depth <= 1) {
          angle = index * stepAngle
          this.x = (50 * Math.cos(angle)) + parent.x
          this.y = (50 * Math.sin(angle)) + parent.y
          this.hasPosition = true
          this.el.css({'left': this.x + 'px', 'top': this.y + 'px'})
        }
      }
    })
    // update my position
    return this.updatePosition()
  }


  // updatePosition returns a boolean stating whether it's been static
  Node.prototype.updatePosition = function () {
    var forces, showx, showy

    if (this.el.hasClass('ui-draggable-dragging')) {
      this.x = parseInt(this.el.css('left'), 10) + (this.el.width() / 2)
      this.y = parseInt(this.el.css('top'), 10) + (this.el.height() / 2)
      this.dx = 0
      this.dy = 0
      return false
    }

    // apply accelerations
    forces = this.getForceVector()
    this.dx += forces.x * this.options.timeperiod
    this.dy += forces.y * this.options.timeperiod

    // damp the forces
    this.dx = this.dx * this.options.damping
    this.dy = this.dy * this.options.damping

    // ADD MINIMUM SPEEDS
    if (Math.abs(this.dx) < this.options.minSpeed) {
      this.dx = 0
    }
    if (Math.abs(this.dy) < this.options.minSpeed) {
      this.dy = 0
    }
    if (Math.abs(this.dx) + Math.abs(this.dy) === 0) {
      return true
    }
    // apply velocity vector
    this.x += this.dx * this.options.timeperiod
    this.y += this.dy * this.options.timeperiod
    this.x = Math.min(this.options.mapArea.x, Math.max(1, this.x))
    this.y = Math.min(this.options.mapArea.y, Math.max(1, this.y))
    // display
    showx = this.x - (this.el.width() / 2)
    showy = this.y - (this.el.height() / 2) - 10
    this.el.css({'left': showx + 'px', 'top': showy + 'px'})
    return false
  }

  Node.prototype.getForceVector = function () {
    var i, x1, y1, xsign, dist, theta, f,
      xdist, rightdist, bottomdist, otherend,
      fx = 0,
      fy = 0,
      nodes = this.obj.nodes,
      lines = this.obj.lines

    // Calculate the repulsive force from every other node
    for (i = 0; i < nodes.length; i++) {
      if (nodes[i] === this) {
        continue
      }
      if (!nodes[i].visible) {
        continue
      }
      // Repulsive force (coulomb's law)
      x1 = (nodes[i].x - this.x)
      y1 = (nodes[i].y - this.y)
      // adjust for variable node size
      //    var nodewidths = (($(nodes[i]).width() + this.el.width())/2)
      dist = Math.sqrt((x1 * x1) + (y1 * y1))
      //      var myrepulse = this.options.repulse
      //      if (this.parent==nodes[i]) myrepulse=myrepulse*10  //parents stand further away
      if (Math.abs(dist) < 500) {
        if (x1 === 0) {
          theta = Math.PI / 2
          xsign = 0
        } else {
          theta = Math.atan(y1 / x1)
          xsign = x1 / Math.abs(x1)
        }
        // force is based on radial distance
        f = (this.options.repulse * 500) / (dist * dist)
        fx += -f * Math.cos(theta) * xsign
        fy += -f * Math.sin(theta) * xsign
      }
    }

    // add repulsive force of the "walls"
    // left wall
    xdist = this.x + this.el.width()
    f = (this.options.wallrepulse * 500) / (xdist * xdist)
    fx += Math.min(2, f)
    // right wall
    rightdist = (this.options.mapArea.x - xdist)
    f = -(this.options.wallrepulse * 500) / (rightdist * rightdist)
    fx += Math.max(-2, f)
    // top wall
    f = (this.options.wallrepulse * 500) / (this.y * this.y)
    fy += Math.min(2, f)
    // bottom wall
    bottomdist = (this.options.mapArea.y - this.y)
    f = -(this.options.wallrepulse * 500) / (bottomdist * bottomdist)
    fy += Math.max(-2, f)

    // for each line, of which I'm a part, add an attractive force.
    for (i = 0; i < lines.length; i++) {
      otherend = null
      if (lines[i].start === this) {
        otherend = lines[i].end
      } else if (lines[i].end === this) {
        otherend = lines[i].start
      } else {
        continue
      }
      // Ignore the pull of hidden nodes
      if (!otherend.visible) {
        continue
      }
      // Attractive force (hooke's law)
      x1 = (otherend.x - this.x)
      y1 = (otherend.y - this.y)
      dist = Math.sqrt((x1 * x1) + (y1 * y1))
      if (Math.abs(dist) > 0) {
        if (x1 === 0) {
          theta = Math.PI / 2
          xsign = 0
        }else {
          theta = Math.atan(y1 / x1)
          xsign = x1 / Math.abs(x1)
        }
        // force is based on radial distance
        f = (this.options.attract * dist) / 10000
        fx += f * Math.cos(theta) * xsign
        fy += f * Math.sin(theta) * xsign
      }
    }

    // if I'm active, attract me to the centre of the area
    if (this.obj.activeNode === this) {
      // Attractive force (hooke's law)
      otherend = this.options.mapArea
      x1 = ((otherend.x / 2) - this.options.centreOffset - this.x)
      y1 = ((otherend.y / 2) - this.y)
      dist = Math.sqrt((x1 * x1) + (y1 * y1))
      if (Math.abs(dist) > 0) {
        if (x1 === 0) {
          theta = Math.PI / 2
          xsign = 0
        } else {
          xsign = x1 / Math.abs(x1)
          theta = Math.atan(y1 / x1)
        }
        // force is based on radial distance
        f = (0.1 * this.options.attract * dist * CENTRE_FORCE) / 1000
        fx += f * Math.cos(theta) * xsign
        fy += f * Math.sin(theta) * xsign
      }
    }

    if (Math.abs(fx) > this.options.maxForce) {
      fx = this.options.maxForce * (fx / Math.abs(fx))
    }
    if (Math.abs(fy) > this.options.maxForce) {
      fy = this.options.maxForce * (fy / Math.abs(fy))
    }
    return {
      x: fx,
      y: fy
    }
  }

  Node.prototype.removeNode = function () {
    var i,
      oldnodes = this.obj.nodes,
      oldlines = this.obj.lines

    for (i = 0; i < this.children.length; i++) {
      this.children[i].removeNode()
    }

    this.obj.nodes = []
    for (i = 0; i < oldnodes.length; i++) {
      if (oldnodes[i] === this) {
        continue
      }
      this.obj.nodes.push(oldnodes[i])
    }

    this.obj.lines = []
    for (i = 0; i < oldlines.length; i++) {
      if (oldlines[i].start === this) {
        continue
      } else if (oldlines[i].end === this) {
        continue
      }
      this.obj.lines.push(oldlines[i])
    }

    this.el.remove()
  }

  // Define all Line related functions.
  Line = function (obj, startNode, endNode) {
    this.obj = obj
    this.options = obj.options
    this.start = startNode
    this.colour = 'blue'
    this.size = 'thick'
    this.end = endNode
  }

  Line.prototype.updatePosition = function () {
    if (!this.options.showSublines && (!this.start.visible || !this.end.visible)) {
      return
    }
    this.size = (this.start.visible && this.end.visible) ? 'thick' : 'thin'
    this.color = (this.obj.activeNode.parent === this.start || this.obj.activeNode.parent === this.end) ? 'red' : 'blue'
    this.strokeStyle = '#FFF'

    this.obj.canvas.path('M' + this.start.x + ' ' + this.start.y + 'L' + this.end.x + ' ' + this.end.y).attr({'stroke': this.strokeStyle, 'opacity': 0.2, 'stroke-width': '5px'})
  }

  $.fn.addNode = function (parent, name, options) {
    var obj = this[0],
      node = obj.nodes[obj.nodes.length] = new Node(obj, name, parent, options)
    console.log(obj.root)
    obj.root.animateToStatic()
    return node
  }

  $.fn.addRootNode = function (name, opts) {
    var node = this[0].nodes[0] = new Node(this[0], name, null, opts)
    this[0].root = node
    return node
  }

  $.fn.removeNode = function (name) {
    return this.each(function () {
      //      if (!!this.mindmapInit) return false
      // remove a node matching the anme
      //      alert(name+' removed')
    })
  }

  $.fn.mindmap = function (options) {
    // Define default settings.
    options = $.extend({
      attract: 15,
      repulse: 6,
      damping: 0.55,
      timeperiod: 10,
      wallrepulse: 0.4,
      mapArea: {
        x: -1,
        y: -1
      },
      canvasError: 'alert',
      minSpeed: 0.05,
      maxForce: 0.1,
      showSublines: false,
      updateIterationCount: 20,
      showProgressive: true,
      centreOffset: 100,
      timer: 0
    }, options)

    var $window = $(window)

    return this.each(function () {
      var mindmap = this

      this.mindmapInit = true
      this.nodes = []
      this.lines = []
      this.activeNode = null
      this.options = options
      this.animateToStatic = function () {
        this.root.animateToStatic()
      }
      $window.resize(function () {
        mindmap.animateToStatic()
      })

      // canvas
      if (options.mapArea.x === -1) {
        options.mapArea.x = $window.width()
      }
      if (options.mapArea.y === -1) {
        options.mapArea.y = $window.height()
      }
      // create drawing area
      this.canvas = Raphael(0, 0, options.mapArea.x, options.mapArea.y)

      // Add a class to the object, so that styles can be applied
      $(this).addClass('js-mindmap-active')

      // Add keyboard support (thanks to wadefs)
      $(this).keyup(function (event) {
        var newNode, i, activeParent = mindmap.activeNode.parent
        switch (event.which) {
          case 33: // PgUp
          case 38: // Up, move to parent
            if (activeParent) {
              activeParent.el.click()
            }
            break
          case 13: // Enter (change to insert a sibling)
          case 34: // PgDn
          case 40: // Down, move to first child
            if (mindmap.activeNode.children.length) {
              mindmap.activeNode.children[0].el.click()
            }
            break
          case 37: // Left, move to previous sibling
            if (activeParent) {
              newNode = null
              if (activeParent.children[0] === mindmap.activeNode) {
                newNode = activeParent.children[activeParent.children.length - 1]
              } else {
                for (i = 1; i < activeParent.children.length; i++) {
                  if (activeParent.children[i] === mindmap.activeNode) {
                    newNode = activeParent.children[i - 1]
                  }
                }
              }
              if (newNode) {
                newNode.el.click()
              }
            }
            break
          case 39: // Right, move to next sibling
            if (activeParent) {
              newNode = null
              if (activeParent.children[activeParent.children.length - 1] === mindmap.activeNode) {
                newNode = activeParent.children[0]
              } else {
                for (i = activeParent.children.length - 2; i >= 0; i--) {
                  if (activeParent.children[i] === mindmap.activeNode) {
                    newNode = activeParent.children[i + 1]
                  }
                }
              }
              if (newNode) {
                newNode.el.click()
              }
            }
            break
          case 45: // Ins, insert a child
            break
          case 46: // Del, delete this node
            break
          case 27: // Esc, cancel insert
            break
          case 83: // 'S', save
            break
        }
        return false
      })
    })
  }
}(jQuery))

/*jslint devel: true, browser: true, continue: true, plusplus: true, indent: 2 */

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



/**/
var menu_raphael = {}

function makeWheelNav(dest,data){
    var titles = [];
    var ids = []
    var wheel = new wheelnav(dest);
    console.log(dest,data);
    wheel.spreaderEnable = false;
//    WebSlice.titleRotateAngle -45;
    wheel.cssMode = true;
    wheel.maxPercent = 1;
    wheel.clickModeRotate = false;
    wheel.slicePathFunction = slicePath().DonutSlice;
    wheel.slicePathCustom = slicePath().PieSliceCustomization();
    wheel.slicePathCustom.minRadiusPercent = 0.80;
    wheel.slicePathCustom.maxRadiusPercent = 0.90;
    wheel.sliceSelectedPathCustom = slicePath().PieSliceCustomization();
    wheel.sliceSelectedPathCustom.minRadiusPercent = 0.80;
    wheel.sliceSelectedPathCustom.maxRadiusPercent = 0.99;
    wheel.titleSelectedAttr = {
      
    };

    for(i=0;i<data.length;i++){
       // console.log(data[i]);
        titles.push(data[i].title);
        ids.push(data[i].id)
    }
    wheel.initWheel(titles) // init before creating wheel so we can define the items.
    

    var rotation = 90; //first item is is the default rotation
    var degrees = (360 / wheel.navItemCount); //divide circle by number of items
    var tilt = rotation // default the tilt of text to the rotation
    for (i = 0; i < wheel.navItemCount; i++) { // loop through items
       // console.log("tilt"+i,titles[i],tilt);
       
       
        wheel.navItems[i].titleRotateAngle = tilt; // set tilt
        tilt = degrees+(rotation-degrees) // rotate angle is additive using this formula
        
        
    }


    wheel.createWheel();
    counter = 0;
    for (i = 0; i < wheel.navItemCount; i++) {
        wheel.navItems[i].data = data[i];

        if(dest != "inner-nav"){
            wheel.navItems[i].navigateFunction = function () {
                //console.log("child", this.data.children)
                makeWheelNav("inner-nav", this.data.children)


            
            }
        }
    }
    menu_raphael[dest] = wheel.raphael
  // console.log(dest,menu_raphael[dest]);
}




window.onload = function () {
    
}
