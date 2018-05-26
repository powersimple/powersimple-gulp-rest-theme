
  jQuery( function() {
    jQuery( "#slider" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: 60,
      slide: function( event, ui ) {
  //      jQuery( "#amount" ).val( ui.value );
      }
    });
//    jQuery( "#amount" ).val( jQuery( "#slider-vertical" ).slider( "value" ) );
  } );
