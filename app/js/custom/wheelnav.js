
var menu_config = {
    'top-menu': {
        'menu_type': 'wheel',
        'location': '#outer-nav',
        '_p': {
            'maxPercent': 1,
            'min': 0.91,
            'max': 1,
            'sel_min': 0.91,
            'sel_max': 1,
        }
    }
}
var inner_nav_params = {
    'maxPercent': 1,
    'min': 0.91,
    'max': 1,
    'sel_min': 0.91,
    'sel_max': 1.0,
}
var inner_subnav_params = {
    'maxPercent': 1,
    'min': 0.90,
    'max': 1,
    'sel_min': 0.90,
    'sel_max': 1.0,
}
/**/
var menu_raphael = {}
var wheels = {}

function makeWheelNav(dest,data,_p){
    console.log("makeWheelNav",dest,data,_p);

    if(dest == "outer-nav"){
        child_dest = "inner-nav"
        child_params = inner_nav_params;
    } else if (dest == "inner-nav"){
        child_dest = 'inner-subnav'
        child_params = inner_subnav_params;
    } 


    var titles = [];
    var ids = []
    wheels[dest] = new wheelnav(dest);
    //console.log(dest,data,_p);
    wheels[dest].spreaderEnable = false;
//    WebSlice.titleRotateAngle -45;
    wheels[dest].cssMode = true;
    wheels[dest].navAngle = 270;
    wheels[dest].selectedNavItem = 2;
    wheels[dest].selectedNavItemIndex = null;
    wheels[dest].maxPercent = _p.maxPercent;
   // wheels[dest].clickModeRotate = false;
    wheels[dest].slicePathFunction = slicePath().DonutSlice;
    wheels[dest].slicePathCustom = slicePath().PieSliceCustomization();
    wheels[dest].slicePathCustom.minRadiusPercent = _p.min;
    wheels[dest].slicePathCustom.maxRadiusPercent = _p.max;
    wheels[dest].sliceSelectedPathCustom = slicePath().PieSliceCustomization();
    wheels[dest].sliceSelectedPathCustom.minRadiusPercent = _p.sel_min;
    wheels[dest].sliceSelectedPathCustom.maxRadiusPercent = _p.sel_max;
    wheels[dest].titleSelectedAttr = {
      
    };

    for(i=0;i<data.length;i++){
       // console.log(data[i]);
        titles.push(data[i].title);
        ids.push(data[i].id)
    }
    wheels[dest].initWheel(titles) // init before creating wheel so we can define the items.
    

    var rotation = 90; //first item is is the default rotation
    var degrees = (360 / wheels[dest].navItemCount); //divide circle by number of items
    var tilt = rotation // default the tilt of text to the rotation
    for (i = 0; i < wheels[dest].navItemCount; i++) { // loop through items
       // console.log("tilt"+i,titles[i],tilt);
       
       
        wheels[dest].navItems[i].titleRotateAngle = tilt; // set tilt
        tilt = degrees+(rotation-degrees) // rotate angle is additive using this formula
        
        
    }
  

    wheels[dest].createWheel();
    counter = 0;
    //console.log("NAV ITEMS",data);
    for (var i = 0; i < wheels[dest].navItemCount; i++) {
        
        
       // console.log("local-data",i,data[i]);
       /*
        type = data[i].type // set the type for the log
        if(type == "category"){
            data[i].object = "category"
    
            data[i].object_id = data[i].id  
        }
        */
        wheels[dest].navItems[i].data = data[i];
        
        


        wheels[dest].navItems[i].navigateFunction = function () {
           console.log("WheelNav to notch", this.data.notch)
            jQuery("#slider").slider("option","value", this.data.notch)
           // console.log(child_dest,"this",this.data);
           if(dest !="inner-subnav"){
                if(this.data.children.length>0){ 
                popAWheelie(dest)

                

                    makeWheelNav(child_dest, this.data.children, child_params)
                console.log("child dest", this.data.children, child_dest)
                
                } else {
                    //console.log("no-children of",dest)
                    popAWheelie(dest)
                    
                
                }
            }
               
            
            setContent(child_dest,this.data.object_id,this.data.object)
           
        }
    
    }
    menu_raphael[dest] = wheels[dest].raphael
    reposition_screen()

  // console.log(dest,menu_raphael[dest]);
}
function triggerWheelNav(notch){
    
   var this_notch = data_nav[notch]
   var this_dest = this_notch.dest;
   console.log("trigger wheel, notch:", this_notch, " | dest:",this_dest);
    
    var this_notch = data_nav[notch]
    var this_dest = this_notch.dest;
   
    
    if(last_dest != this_dest){
        console.log("wheel-dest",last_dest,this_dest)
        if(wheels[this_dest] != undefined){
            if(this_dest != 'outer-nav'){
                //popAWheelie(this_dest)
            }
        }
        if(this_notch.children.length > 0){
             makeWheelNav(this_dest, this_notch.children, inner_nav_params)
        }
     
    } else {

        wheels[this_dest].navigateWheel(this_notch.slice);
    }


    last_dest = this_dest;
console.log("trigger_wheelNav",this_notch);

}

function popAWheelie(dest){ // this removes the inner rings when you click on navigation and reloads them as necessary
    if (dest == "outer-nav") { // if outer ring
        if(wheels["inner-nav"] != undefined){ //and inner ring exists
        wheels["inner-nav"].raphael.remove(); // destroy it
        child_dest = "inner-nav"//outer's inner
            if(wheels["inner-subnav"] != undefined){//if  inner subnav
                wheels["inner-subnav"].raphael.remove()//destoy that too.
            }
        } else if (dest == "inner-nav") {// if you select from the inner nave
            if (wheels["inner-subnav"] != undefined) {//and there's an inner subnav
                wheels["inner-subnav"].raphael.remove() //destroy it
                child_dest = "inner-subnav"
            }
        }

    }
}
