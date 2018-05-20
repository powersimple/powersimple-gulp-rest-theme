

/**/

function makeWheelNav(dest,data){
    var titles = [];
    var wheel = new wheelnav(dest);
    wheel.wheelRadius =300;
    wheel.spreaderEnable = false;
//    WebSlice.titleRotateAngle -45;
   // wheel.cssMode = true;
    wheel.slicePathFunction = slicePath().DonutSlice;
    wheel.titleSelectedAttr = {
      
    };

    for(i=0;i<data.length;i++){
        titles.push(data[i].title);
      
    }



    wheel.createWheel(titles);
}




window.onload = function () {
    
}
