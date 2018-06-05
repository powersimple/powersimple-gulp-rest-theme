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
  //console.log(slide,id,post)
  slide = '\n<div><div id="slide'+slide+'" data-id="'+id+'" class="slide-wrap">'
  slide +='\n\t<h2>'+posts[id].title+'</h2>'
  slide += '\n\t<section><div class="content">' + posts[id].content + '</div></section>'
  slide +='\n</div></div>';
  

  return slide
}


function setSlides(){
  var content = '';
  var title = '';
  var slides = '';
  
  for(i=0;linear_nav[i];i++){
    
    var id = linear_nav[i].object_id.toString();
    console.log(i, id, posts[id])
    if(posts[id] != undefined){
    slides += setSlide(i,id)
    }
  }
  
  jQuery('#article').html(slides);
 


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
  console.log(slideno);
  $carousel.slick('slickGoTo', slideno);
});