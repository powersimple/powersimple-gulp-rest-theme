function setSlider(){
 // console.log("Set Slider", orientation)
  
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
jQuery('#slider').on('mousewheel', function(event) {
  event.preventDefault();
  value = jQuery( "#slider" ).slider( "value" );

  //console.log(event.deltaX, event.deltaY, event.deltaFactor);

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
  
});

function setSliderNotch(notch){
 

   console.log("notch",notch,linear_nav[notch].object_id)
   if (linear_nav[notch] != undefined){
      setContent(notch, linear_nav[notch].object_id)

   }
 // document.title = linear_nav[notch].title+" | "+site_title
}