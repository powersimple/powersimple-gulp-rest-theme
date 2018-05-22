

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
