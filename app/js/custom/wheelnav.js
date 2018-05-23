

/**/
var menu_raphael = {}
var wheels = {}
function makeWheelNav(dest,data,_p){
    console.log(_p);
    var titles = [];
    var ids = []
    wheels[dest] = new wheelnav(dest);
    //console.log(dest,data,_p);
    wheels[dest].spreaderEnable = false;
//    WebSlice.titleRotateAngle -45;
    wheels[dest].cssMode = true;
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
    for (var i = 0; i < wheels[dest].navItemCount; i++) {
        wheels[dest].navItems[i].data = data[i];
        
        if(dest != "inner-nav"){
        }type = data[i].type // set the type for the log
      
        posts[data[i].id] = data[i] // adds a key of the post id to address all data in the post as a JSON object
   
             
            //console.log("children", data[i])
            

               wheels[dest].navItems[i].navigateFunction = function () {
               if(this.data.children.length>0){ 
                   makeWheelNav("inner-nav", this.data.children, inner_nav_params)
                } else {
                    if (wheels['inner-nav'] != undefined){
                    console.log("wheels2",wheels['inner-nav'].raphael.remove())
                    }
                    //makeWheelNav("inner-nav", [], inner_nav_params)
                }
                setContent(this.data.object_id,this.data.object)
            }
        
    }
    menu_raphael[dest] = wheels[dest].raphael
  // console.log(dest,menu_raphael[dest]);
}




window.onload = function () {
    
}
