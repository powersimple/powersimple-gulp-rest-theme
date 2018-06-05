function setSlider(){
  //console.log("Set Slider", linear_nav)
  
    jQuery( "#slider" ).slider({
      orientation: "vertical",
      range: "max",
      min: 1,
      max: linear_nav.length,
      value: 0,
      slide: function( event, ui ) {
        setSliderNotch(ui.value)
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
 
  //jQuery("#slide"+notch+" h2").html(posts[id].title)
   console.log("notch",notch,linear_nav[notch])
  
  $carousel.slick('slickGoTo', notch);
 // document.title = linear_nav[notch].title+" | "+site_title
}