var gotoslide = function(slide){
    $( '.slideshow' ).slickGoTo(parseInt(slide));
}

function setSlideShow(){
  jQuery('.slideshow').slick({
  //	autoplay: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase:  'linear',
    focusoOnSelect: true,
    nextArrow: '<i class="slick-arrow slick-next"></i>',
    prevArrow: '<i class="slick-arrow slick-prev"></i>',
      responsive: [
       {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        } 
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
}
function setSlide(slide,id){
  /*
  these carousel slides are created here, but their content is populated dynamically
  because it was unreliable populating the content in a loop
  see setSlideContent in app.js
  */
  slide = '\n<div><div id="slide'+slide+'" data-id="'+id+'" class="slide-wrap">'
  slide += '\n\t<h2></h2>'
  slide += '\n\t<div class="img-wrap"></div>'
  slide += '\n\t<section><div class="content"></div></section>'
  slide +='\n</div></div>\n';

  return slide
}


function setSlides(){
  var id="0"
  var content = ''
  var title = ''
  var slides = ''
 console.log("Begin Render Slides", linear_nav, posts)
  if(posts == undefined){
    console.log("No Posts Data Yet",  posts)
    window.setTimeout(setSlides(), 100);//without this, we cannot relay that the post data is available yet
  } else {
  
  for(i=0;linear_nav[i];i++){
    
     id = "p" + linear_nav[i].object_id.toString()
  
      slides += setSlide(i,id)
   
  }
  console.log("slides rendered")


  jQuery('#article').html(slides);
 
  }


}
var $carousel = jQuery('.slideshow');
jQuery(document).on('keydown', function(e) {
    if(e.keyCode == 37) {
        $carousel.slick('slickPrev');
    }
    if(e.keyCode == 39) {
        $carousel.slick('slickNext');
    }
});

jQuery('a[data-slide]').click(function(e) {
             
  e.preventDefault();
  var slideno = jQuery(this).data('slide');
  console.log("slide", slideno);
  $carousel.slick('slickGoTo', slideno);
});