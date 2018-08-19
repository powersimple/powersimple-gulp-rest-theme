var menu_config = {
    'wheel-menu': {
        'menu_type': 'wheel',
        'location': '#outer-nav'
    }/*,
    'projects':{
         'menu_type': 'project',
         'location': '#projects'
    }*/
}

function setMenus(data, dest) {
    //console.log("raw menu data",data)
 
    for (var i = 0; i < data.length; i++) {
        menus[data[i].slug] = {},
        menus[data[i].slug].menu_array = []
        menus[data[i].slug].name = data[i].name
        menus[data[i].slug].slug = data[i].slug
        menus[data[i].slug].items = setMenu(data[i].slug, data[i].items)
        console.log()
        console.log("slug", data[i].slug)
    }
    buildMenuData();
    //console.log("raw menu data", menus)
    initSite()
}

function setMenu(slug, items) {
    menu = {}
    //console.log("setMenu",dest,slug,items)
    for (var i = 0; i < items.length; i++) {
        menu[items[i].ID] = setMenuItem(slug, items[i])
       // console.log("setMenu", items[i].ID, slug, items)
        if (items[i].menu_item_parent != 0) { //recursive
            menu[items[i].menu_item_parent].children.push(items[i].ID)//children empty array is created in setMenuItem

        } else {

        }
        menus[slug].menu_array.push(menu[items[i].ID])

    }
    //console.log("MENU ARRAY",menus[dest].menu_array)
    //console.log("SetMenu",slug, menu)
    return menu
}

function setMenuItem(slug, item) {
    //console.log("setMenuItem",item)
    this_item = {}
    this_item.menu_id = item.ID
    this_item.title = item.title

    this_item.menu_order = item.menu_order
    this_item.object = item.object
    this_item.object_id = item.object_id
    this_item.parent = item.menu_item_parent
    this_item.slug = slug


    this_item.children = []//this array is populated in Set Menu

    return this_item
}


function menu_order(a, b) {
    if (a.menu_order < b.menu_order)
        return -1;
    if (a.menu_order > b.menu_order)
        return 1;
    return 0;
}

function setLinearNav(m) {
    var counter = 0
    menus[m].linear_nav = [];
    for (var i in menus[m].items) {


       // menu.items[i].post = posts[menu.items[i].object_id]
        menus[m].items[i].slug = posts[menus[m].items[i].object_id].slug


        id = menus[m].items[i].object_id
        menus[m].linear_nav.push(menus[m].items[i])

      
        counter++;
    }
    menus[m].linear_nav.sort(menu_order);
    
    
   //console.log("linear_nav", menus[m].linear_nav);
   // console.log("posts_nav", posts_nav);

}

function setLinearDataNav(data) { // sets local data into linear array for wheel

    var counter = 0,
        outer_counter = 0,
        inner_counter = 0,
        inner_subcounter = 0,
        grandparent = 0,
        next_parent = 0,
        dest = 'outer-nav'

    // THESE 3 NESTED LOOPS POPULATE THE data_nav array WITH WHAT IT NEEDS TO BUILD THE WHEEL AND HAVE IT BE CONTROLLED BY THE ORDERED NOTCHES FROM THE NAV

    for (var d = 0; d < data.length; d++) { //outer
        dest = 'outer-nav'
        data[d].dest = dest;
        data[d].slice = outer_counter;
        data[d].notch = counter;
        grandparent = counter;
        data_nav.push(data[d]);
        slug_nav[data[d].slug] = counter;

        counter++;
        for (var c = 0; c < data[d].children.length; c++) { //children
            data[d].children[c].dest = "inner-nav"
            data[d].children[c].slice = c
            data[d].children[c].notch = counter
            data[d].children[c].parent = grandparent
            next_parent = counter
            data_nav.push(data[d].children[c])
            slug_nav[data[d].children[c].slug] = counter;
            counter++
            for (var g = 0; g < data[d].children[c].children.length; g++) { //grandchildren
                data[d].children[c].children[g].dest = "inner-subnav"
                data[d].children[c].children[g].slice = g
                data[d].children[c].children[g].notch = counter
                data[d].children[c].children[g].grandparent = grandparent
                data[d].children[c].children[g].parent = next_parent

                data_nav.push(data[d].children[c].children[g])
                slug_nav[data[d].children[c].children[g].slug] = counter;
                counter++
            }
            // console.log("dataNav", data);
        }

        outer_counter++;

    }

  //   console.log("dataNav", data_nav);
  //   console.log("slug_nav", slug_nav);
}
function buildMenuData() {

    // needs post variable
    if (posts == undefined) {
        //console.log("No Posts Data Yet",  posts)
        window.setTimeout(buildMenuData(), 10);
    } else {

        
        var data = [];
    
        for (var m in menus) { // 
            //console.log('menu loop',m)
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


                    //  console.log('bad slug', menus[m].items[menu_array[a].children[c]].slug)
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
                setLinearNav('wheel-menu')
                //console.log('makeouterwheel',menu_levels);





                //circleMenu('.circle a')
            }
        }

    }

}