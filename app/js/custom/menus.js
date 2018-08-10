function setMenus(data, dest) {
    //console.log("raw menu data",data)
    menus[dest] = {};
    menus[dest].menu_array = [];
    for (var i = 0; i < data.length; i++) {
        menus[data[i].slug] = {}
        menus[data[i].slug].name = data[i].name
        // menus[data[i].slug].slug = data[i].slug
        menus[data[i].slug].items = setMenu(dest, data[i].slug, data[i].items)
    }
    displayMenus();

}

function setMenu(dest, slug, items) {
    menu = {}
    //console.log("setMenu",dest,slug,items)
    for (var i = 0; i < items.length; i++) {
        menu[items[i].ID] = setMenuItem(dest, items[i])
        console.log("setMenu", items[i].ID, slug, items)
        if (items[i].menu_item_parent != 0) { //recursive
            menu[items[i].menu_item_parent].children.push(items[i].ID)

        } else {

        }
        menus[dest].menu_array.push(menu[items[i].ID])

    }
    //console.log("MENU ARRAY",menus[dest].menu_array)
    //console.log("SetMenu",slug, menu)
    return menu
}

function setMenuItem(dest, item) {
    //console.log("setMenuItem",item)
    this_item = {}
    this_item.menu_id = item.ID
    this_item.title = item.title

    this_item.menu_order = item.menu_order
    this_item.object = item.object
    this_item.object_id = item.object_id
    this_item.parent = item.menu_item_parent
    this_item.dest = dest


    this_item.children = []

    return this_item
}


function menu_order(a, b) {
    if (a.menu_order < b.menu_order)
        return -1;
    if (a.menu_order > b.menu_order)
        return 1;
    return 0;
}

function setLinearNav(menu) {
    var counter = 0

    for (var i in menu.items) {


        menu.items[i].post = posts[menu.items[i].object_id]
        menu.items[i].slug = posts[menu.items[i].object_id].slug


        id = menu.items[i].object_id.toString()
        linear_nav.push(menu.items[i])

        posts_nav[id] = counter;
        counter++;
    }
    linear_nav.sort(menu_order);
    //SET SLUG NAV
    for (var n = 0; n < linear_nav.length; n++) {

    }

    setSlider(linear_nav)
    setSlides(linear_nav)
    //console.log("linear_nav", linear_nav);
    //console.log("posts_nav", posts_nav);


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

    // console.log("dataNav", data_nav);
    // console.log("slug_nav", slug_nav);
}