function setSlider(){
  //console.log("Set Slider", orientation, linear_nav.length)
   
     jQuery( "#slider" ).slider({
       orientation: orientation,
       range: "max",
       min: 0,
       max: linear_nav.length,
       value: 0,
       slide: function( event, ui ) {
         setSliderNotch(ui.value)
         console.log("slider",ui.value)
        // jQuery( "#amount" ).val( ui.value );
       }
 
 
       
     });
   
     
 
 
 }
 /*
 jQuery('#slider').on('mousewheel', function(event) {
   event.preventDefault();
   value = jQuery( "#slider" ).slider( "value" );
 
   console.log(event.deltaX, event.deltaY, event.deltaFactor);
 
   //Mousewheel Scrolled up
   if(event.deltaY == -1){
       //alert("scrolled down");
       value = value+1;
       setSliderNotch(value)
   }
   //Mousewheel Scrolled down
   else if(event.deltaY == 1){
      //alert("scrolled up");
       value = value-1;
       setSliderNotch(value)
       
   }
   
 });*/
 (function($){
/*
  $('#slider').bind('mousewheel DOMMouseScroll', function (e) {
    var delta = 0,
      element = $(this),
      value, result, oe;
    oe = e.originalEvent; // for jQuery >=1.7
    value = element.slider('value');

    if (oe.wheelDelta) {
      delta = -oe.wheelDelta;
    }
    if (oe.detail) {
      delta = oe.detail * 40;
    }

    value -= delta / 8;
    if (value > 100) {
      value = 100;
    }
    if (value < 0) {
      value = 0;
    }

    result = element.slider('option', 'slide').call(element, e, {
      value: value
    });
    if (result !== false) {
      element.slider('value', value);
    }
    return false;
  });
  */
})(jQuery)
 

 function setSliderNotch(notch){
 
  console.log("notch",data_nav[notch],notch)
   location.hash = posts[data_nav[notch].object_id].slug

 
   console.log("set slider notch", notch,location.hash)
   jQuery("#slider").slider('value', notch);
    if (linear_nav[notch] != undefined){
      
      setContent(notch, data_nav[notch].object_id, data_nav[notch].object_id)
      triggerWheelNav(notch)
       //selectNavItem(notch);
    }
  // document.title = linear_nav[notch].title+" | "+site_title
 }
