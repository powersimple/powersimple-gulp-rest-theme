
function setMenuLevels(slug){// items = object of whole menu
    levels = [];
    var items = menus[slug].items
    
    for(i in items){
        if(items[i].parent == 0){
            console.log("level0",i,items[i])
            levels.push(menuLevelItem(items[i],items))

        } else {
           // console.log("level0", items[i])
        }
    }
    
     console.log("menulevels", levels)
    
    /*var levels = [];
    var menu_array = menus[slug].menu_array
    var last_parent_key = 0
    console.log("menu_array "+slug, menu_array)
    var previous_parent = 0;
    var level = 0;
    for (var a = 0; a < menu_array.length; a++) {
      
         // data.push(menuLevelItem(a,menus[slug].menu_array[a]))
       
        if(menu_array[a].parent == 0){
            console.log("menu_array par ent" + slug, menu_array[a])
            last_parent_key = a;
            level = 0
        } else {
            level++
            previous_parent = a;
           
            if (menu_array[a].children.length>0){
                console.log("menu_array grandchild" + slug, last_parent_key, a, menu_array[a])
            } else {
                console.log("menu_array child" + slug, last_parent_key, a, menu_array[a])
            }
        }


    }
    console.log("menulevels",levels)
    return levels*/
}


function menuLevelItem(item,items){
   
    if(item.children.length >0){
        console.log(item.menu_id,item.children)
        return menuLevelData(item)
    } else {
        return menuLevelData(item)
    }

    /*
    
    return  { // data for top level 
        "title": item.title,
        "id": item.id,
        "slug": item.slug,
        "object": item.object,
        "object_id": item.object_id, //the post_id
        "children": item.children, // ge
        "url": item.url
    }*/
  
    //console.log(a,item)
   


  
     
    //  children.push(menuLevelItem(items[items[i].children[c]].id, items))
        
        /*
        var item = items[i]
        var level_item = { // data for top level 
            "title": item.title,
            "id": item.id,
            "slug": item.slug,
            "object": item.object,
            "object_id": item.object_id, //the post_id
            "children": children, // ge
            "url": item.url
        }*/
   
  //return level_item;


}
function menuLevelData(item){
    return { // data for top level 
        "title": item.title,
        "id": item.id,
        "slug": item.slug,
        "object": item.object,
        "object_id": item.object_id, //the post_id
        "children": item.children, // ge
        "url": item.url
    }
}


function buildMenuData() {
    var data = []; // array to store nested menu data in

    for (var m in menus) { // outer loop of menus; m = menu name
        console.log("set linear", m,menu)




        if (menu_config[m] != undefined) { // continue if undefined

           
            console.log("MENU ARRAY", menu_array)
            var children = []; // empty array for children


            for (var a = 0; a < menu_array.length; a++) {
                children = [];
                console.log(menu_array[a])
                data.push({ // data for top level 
                    "title": menu_array[a].title,
                    //"id": menu_array[a].id,
                    "slug": slug,
                    "object": menu_array[a].object,
                    "object_id": menu_array[a].object_id, //the post_id
                    "children": children, // ge
                    "url": url
                })

            } // loops through menu array
            /*
            menu_levels = data;
            console.log("MENU DATA", data)
            setLinearDataNav(data);

            
            

            setSlider(linear_nav)
            setSlides(linear_nav)

            setSlideShow(); // creates slides for the slick carousel
            makeWheelNav("outer-nav", menu_levels, menu_config[m]._p)

            if (location.hash != '') {
                var slug = location.hash.replace("#", "");
                console.log("set by slugHash", slug, slug_nav[slug])

                setSliderNotch(slug_nav[slug])
            } else {

                if (menu_config[m].menu_type == "wheel") {
                    // THIS IS THE INITIAL LOADING OF THE WHEEL


                }
            }

            console.log('makeouterwheel', menu_levels);
            */

           
        }
        
    }


}

function setLinearNav(m, menu) {
    console.log("set linear", m,menu)
    var counter = 0
    var linear_nav = []
    var posts_nav = []
    for (var i in menu.items) {


        menu.items[i].post = posts[menu.items[i].object_id]
        //menu.items[i].slug = posts[menu.items[i].object_id].slug


        id = menu.items[i].object_id.toString()
        linear_nav.push(menu.items[i])
        posts_nav[id] = counter;
        counter++;
    }
    linear_nav.sort(menu_order);
    menus[m].linear = linear_nav;
    
    menus[m].posts = posts_nav;




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

    console.log("dataNav", data_nav);
    // console.log("slug_nav", slug_nav);
}

function menu_order(a, b) {
    if (a.menu_order < b.menu_order)
        return -1;
    if (a.menu_order > b.menu_order)
        return 1;
    return 0;
}