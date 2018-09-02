


  var icon = '<svg class="sg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185.31 251.89"><path d="M66.8,144.17c0-66.24,22.46-113.09,80.72-112.32,81.48,1.07,80.72,46.08,80.72,112.32,0,5.15,8.38,3.81,7.62,19-2.28,19.42-9.44,14.63-10.39,19.85-9.26,51.08-40.65,88.67-77.95,88.67-37.76,0-69.47-38.53-78.28-90.58-.82-4.85-5.86-.8-6.42-18.68C61.47,146.07,66.8,149.07,66.8,144.17Z" transform="translate(-56.6 -25.84)" style="fill:#ffdfbf;fill-rule:evenodd"/><path d="M147.52,31.85C99.49,31.22,75.79,63,69,111.24c8.78-23.84,27.86-26,64.33-26.54,70.62-1.13,88.39,8.27,79.64,96.55-1.84,18.6-6.1,24.62-28.36,39.74-12.07,8.2,18.54-26.37-49.78-27-49.5-.43-30.06,36.41-40.06,29.44a81.88,81.88,0,0,1-20.28-20.73c12.89,40.76,40.76,69,73.08,69,37.3,0,68.69-37.59,77.95-88.67l2.77-38.89C228.24,77.93,229,32.91,147.52,31.85Z" transform="translate(-56.6 -25.84)" style="fill:#d0b57b;fill-rule:evenodd"/><path d="M146.13,31.84h1.39c81.48,1.07,80.72,46.08,80.72,112.33,0,5.15,8.38,3.81,7.62,19-2.28,19.42-9.44,14.63-10.39,19.85-9.26,51.08-40.65,88.67-77.95,88.67-37.76,0-69.47-38.53-78.28-90.58-.82-4.85-5.86-.8-6.42-18.68-1.34-16.39,4-13.39,4-18.29,0-65.71,22.11-112.33,79.33-112.33m0-6h0c-29.39,0-51.65,11.54-66.18,34.3C67.3,80,60.86,108.06,60.8,143.68h0c-2.54,3.05-4.94,7-4,19.12.4,12.11,2.72,16.46,6.59,19.86,9.65,56,44.19,95.07,84.11,95.07,19.91,0,38.59-9.42,54-27.25,14.35-16.57,24.87-39.79,29.66-65.45l0,0c4.22-2.57,8.87-6.53,10.58-21.1l0-.2v-.2c.58-11.55-3.35-16.18-7.07-19.61l-.53-.5v-1c0-33,0-61.46-10.76-82.11-12-23-36.09-33.89-75.88-34.41Z" transform="translate(-56.6 -25.84)" style="fill:#303030"/><path d="M118.31,183.29s4.28,4.28,12.84,4S143.67,182,143.67,182s-3.62,8.23-11.53,8.89S118.31,183.29,118.31,183.29Z" transform="translate(-56.6 -25.84)" style="fill:#bfa78f;fill-rule:evenodd"/><ellipse cx="44.24" cy="115.64" rx="28.15" ry="35.97" style="fill:#fff"/><ellipse cx="104.54" cy="115.64" rx="28.15" ry="35.97" style="fill:#fff"/><circle class="eye" id="eye-left" cx="35.9" cy="121.66" r="10.5" style="fill:#303030"/><circle class="eye" cx="94.57" cy="121.66" r="10.5" style="fill:#303030"/><path d="M140.74,236.63h0c-16.92,0-29.43-4.38-29.43-18.42h0c0-4.22,4.12-7.64,9.21-7.64H160c3.6,0,6.53,2.42,6.53,5.42v7.23C166.55,234.48,154.32,236.63,140.74,236.63Z" transform="translate(-56.6 -25.84)" style="fill:#2d251d;fill-rule:evenodd"/><path d="M160,210.57h-39.5c-5.09,0-9.21,3.42-9.21,7.64,0,.07,0,.15,0,.22,7.57,2.29,17.6,3.2,29,3.2h0c9.87,0,19.24-.52,26.25-2.36V216C166.55,213,163.62,210.57,160,210.57Z" transform="translate(-56.6 -25.84)" style="fill:#fff"/></svg>';

  document.head.insertAdjacentHTML('beforeend', '<style>.sg { width: 35px; height: 35px; position: fixed; bottom: 10px; right: 10px; } .sg .eye { -webkit-transform: translateX(0px);   transform: translateX(0px); } .sg:hover .eye { -webkit-transition: -webkit-transform 0.3s ease; transition: -webkit-transform 0.3s ease; transition: transform 0.3s ease; transition: transform 0.3s ease, -webkit-transform 0.3s ease; -webkit-transform: translateX(12px);   transform: translateX(12px); }</style>');

  var a = document.createElement('a');
  a.setAttribute('href', 'https://twitter.com/steeevg');
  a.setAttribute('target', '_blank');
  a.innerHTML = icon;

//  document.body.appendChild(a);





















var increment = 'vw';
oriented = 'horizontal', // BECAUSE iOS doesn't like the variable orientation

  orientation_last = '',
  slider_orientation = 'vertical', // 
  dimension = 'wide',
  maxed = false,
  maxed_last = false,
  maxed_changed = false,
  slider_menu = 'wheel-menu',
  _w = jQuery(window).width(),
  _h = jQuery(window).height(),
  aspect = _w / _h,

  current_notch = 0
var wheel_nav_params = {}
jQuery(document).ready(function () {


  jQuery(".wheelnav-outer-nav-title").css("display:none;");

  reposition_screen()


})
jQuery(window).resize(function () {
  _w = jQuery(window).width()
  _h = jQuery(window).height()

  if (_w > _h) {
    increment = 'vh'
    oriented = 'horizontal'
    // orientation_last = 'horizontal'
  } else {
    increment = 'vw'
    oriented = 'vertical'
    //orientation_last = 'vertical'
  }
  aspect = _w / _h
  reposition_screen()

})

function initSite() { // called from the menus callback
  //console.log("load",data_loaded.length,data_score)
  if (menu == undefined) {
    window.setTimeout(initSite(), 100);
  }




  setSlider()
  setSlides('wheel-menu')
  setSlides('projects')

  //console.log("menu", menu_config[m].location, items)
  //  jQuery(menu_config[m].location).html(items)
  setSlideShow('wheel-menu'); // creates slides for the slick carousel
  makeWheelNav("outer-nav", menus['wheel-menu'].menu_levels)
  
  if (location.hash != '') {
    slug = location.hash.replace("#", "");
    console.log("set by slugHash", slug, menus['wheel-menu'].slug_nav[slug])

    

  } else {

    // THIS IS THE INITIAL LOADING OF THE WHEEL

//    setSliderNotch(menus['wheel-menu'].slug_nav[slug]) 
    slug = location.hash = '#about' // this has to be AFTER setSliderNotch when undefined, not before, or it will set hash to '#undefined'
  
  }
  setSliderNotch(menus['wheel-menu'].slug_nav[slug])



  initMatrix();
  //console.log(menus)
}

function setWheelNavParams() {
  wheel_nav_params = {
    'maxPercent': 1,
    'min': 0.91,
    'max': 1,
    'sel_min': 0.91,
    'sel_max': 1,
  }

  if (maxed == true) {
    wheel_nav_params = {
      'maxPercent': 1,
      'min': 0.85,
      'max': 1,
      'sel_min': 0.85,
      'sel_max': 1,
    }
  }





}



function positionElements() { // manages classes for sizes, orientation and aspect

  var elements = ["#main", "header", "footer", "#related", "#screen"]

  slider_orientation: 'vertical'
  dimension = 'wide'



  if (_w < _h) { // sets orientation

    oriented = 'vertical'

    slider_orientation = 'horizontal'

  } else {

    oriented = 'horizontal'
    slider_orientation = 'vertical'

  }

  if (orientation_last != oriented) { // this triggers on orientation change
    orientation_last = oriented;
    //    console.log("orientation changed to "+oriented,orientation_last)
    setSlider()
  }



  if (aspect <= 0.5) {
    dimension = "super-narrow"
  } else if (aspect > 0.5 && aspect <= 0.75) {
    dimension = "narrow"
  } else if (aspect > 0.75 && aspect <= 0.9) {
    dimension = "semi-narrow"
  } else if (aspect > 0.9 && aspect <= 1.1) {
    dimension = "square"
  } else if (aspect > 1.1 && aspect <= 1.25) {
    dimension = "semi-wide"
  } else if (aspect > 1.25 && aspect <= 1.5) {
    dimension = "wide"
  } else if (aspect > 1.5 && aspect <= 2) {
    dimension = "super-wide"
  } else if (aspect > 2) {
    dimension = "extra-super-wide"
  }

  for (e = 0; e < elements.length; e++) {
    //  console.log("set orientation",elements[e],oriented)
    jQuery(elements[e]).removeClass()

    jQuery(elements[e]).addClass(dimension)
    jQuery(elements[e]).addClass(oriented)


    if (maxed == true) {
      jQuery(elements[e]).addClass('maxed')

    } else {

    }
  }
  //console.log("slider-wrap",orientation,slider_orientation)

  jQuery('#slider-wrap').removeClass()
  jQuery('#slider-wrap').addClass(slider_orientation)
  jQuery('#slider-wrap').addClass(dimension)

}


function positionProjector() {
  var top = 50,
    width = "20vw",
    height = "20vw";

  if (aspect > 1.15 && aspect < 1.5) {
    top = ((aspect - 1) * 100) + "%";
    width = "10vw"
    height = "10vw"
    //fontSize = 1.2
  } else if (aspect > 0.50 && aspect <= 1.15) {
    top = "20%"
    width = "15vw"
    height = "15vw"
    //fontSize = 1
  } else if (aspect >= 1.5) {
    top = "50%";
    width = '20vw'
    height = '20vw'
    //fontSize = 1.5
  }
  jQuery("#featured-image-wrap").css("top", top)
  jQuery("#featured-image-wrap").css("width", width)
  jQuery("#featured-image-wrap").css("height", height)

  //jQuery("#featured-image-header").css("fontSize", fontSize + 'em')
  //jQuery("#featured-image-footer").css("fontSize", fontSize * 0.8 + "em")



}




function reposition_screen() {



  var width = '100vw'
  var height = '100vh'
  var top = 0
  var bottom = 0;
  var left = 0;
  var margin_top = 0
  var margin_left = 0;
  var inc = 'vh'

  if (aspect <= 0.5) {
    width = _w + "px"
    height = _w * 2 + "px"
    top = 50
    left = 0
    margin_top = _w * -1
    margin_left = 0
    bottom: _w
    inc = 'px'
  } else if (aspect >= 2) {
    width = _h * 2 + 'px'
    height = _h + 'px'
    top = 0
    left = 50
    margin_top = 0
    botttom: 0
    margin_left = _h * -1
    inc = 'px'
  }
  //jQuery('header').css('width',  width)
  //jQuery('header').css('height', height)
  //  jQuery('header').css('top', top + "%")
  //  jQuery('header').css('left', left + '%')
  //  jQuery('header').css('marginTop', margin_top)
  //jQuery('header').css('marginLeft', margin_left)



  jQuery('#main').css('width', width)
  jQuery('#main').css('height', height)
  jQuery('#main').css('top', top + "%")
  jQuery('#main').css('left', left + "%")
  jQuery('#main').css('marginTop', margin_top + inc)
  jQuery('#main').css('marginLeft', margin_left + inc)




  //console.log("aspect=" + aspect, "_w" + _w, "_h" + _h, "w=" + width, "h=" + height, "t=" + top, "l=" + left, "mt" + margin_top, "ml=" + margin_left);



  positionProjector()
  positionElements();

  jQuery("#slider").css("visibility", "visible")

  var calibrate_elements = [{ // default
      id: ".phi-centered",
      size: 61.8, //use number, it needs to be divided
      increment: "vw"
    },
    {
      id: "#outer-ring",
      size: 80, //use number, it needs to be divided
      increment: "vw"
    },
    {
      id: "#inner-ring",
      size: 72, //use number, it needs to be divided
      increment: "vw"
    },
    {
      id: "#inner-subring",
      size: 65, //use number, it needs to be divided
      increment: "vw"
    }

  ]

 

  jQuery('#stars').css('height', '100vh')
  jQuery('#stars').css('width', '100vw')
  jQuery('#stars').css('top', 0)
  jQuery('#stars').css('left', 0)


}
function maxed(){ // FIX - this is still problematic and has been backed out for now
    maxed_changed = false
    if ((aspect < 0.75 && _w < 768) || (aspect > 1.5 && _h < 640)) { // MAX OUT the wheel size below 768 and wide or narrow 
      maxed = true;

      if (maxed_last == false) {
        //console.log("maxed")


        //resetWheel();
        maxed_last = true;
        maxed_changed = true
      }



    } else {

      maxed = false;
      if (maxed_last == true) {


        //resetWheel();

        maxed_last = false
        maxed_changed = true

      }


    }
    if (maxed_changed == true) {

      //console.log("change", maxed_changed, wheel_nav_params)
    }

}
function resetWheel() {
  setWheelNavParams();
  //console.log("resetWheel")

  wheels["outer-nav"].removeWheel()
  if (wheels["inner-nav"] != undefined) {
    wheels["inner-nav"].removeWheel()
  }
  if (wheels["inner-subnav"] != undefined) {
    wheels["inner-subnav"].removeWheel()
  }


}


function calibrateCircle(id, size, increment) {
  /*
  console.log("calibrate",id,size,increment)
 
   jQuery(id).css('width', size + increment)
   jQuery(id).css('height', size + increment)
   jQuery(id).css('margin-left', ((size / 2) * -1) + increment)
   jQuery(id).css('margin-top', ((size / 2) * -1) + increment)
*/

}

    var photoCount = 0;
    var pieceCount = 0;
    var onPhoto = 0;
    var pieceCompleteCount = 0;
 //this is the interval that needs to be stoped.

    var transitions = ['center', 'random']
    var transitionType = 1;
    
    var viewerDest = null
    //console.log("circleviwer loaded")
    function circleViewer(dest) {
        
        photoCount = state.screen_images.length
        pieceCount = state.screen_images.length
        console.log("CIRCLE VIEWER PRELOAD", dest, state.screen_images, pieceCount)
        
        viewerDest = dest
        for (var i = 0; i < state.screen_images.length; i++) {

            jQuery('#preload').append('<img src="' + state.screen_images[i].src + '">')
        };
        jQuery(window).load(function(){
           

        })
        loadCircleViewer(dest);
    }

    function loadCircleViewer(dest, screen_images) {
        jQuery(dest+'-container').html('');
        for (var i = 0; i < state.screen_images.length; i++) {
            var newWidth = (((100 - (100 / pieceCount) * i)) / 100) * 100; //((pieceWidth - ((pieceWidth / pieceCount) * i)) / pieceWidth) * 100;
            var newBackgroundSize = 100 + (100 - newWidth) / newWidth * 100; //100 + (100 - newWidth);
            var newTop = ((100 / pieceCount) * i) / 2;

            jQuery(dest+'-container').append('<div class="section" id="piece' + i + '" style="top: ' + newTop + '%; left: ' + newTop + '%; width: ' + newWidth + '%; height: ' + newWidth + '%; background-size:' + newBackgroundSize + '%; background-image: url(' + state.screen_images[i].src + ')"></div>')
        };
        //console.log("IMAGES", dest, state.screen_images)
        nextSlide();
    }

    function nextSlide() {
         console.log("onphonto", onPhoto)
        clearInterval(state.circle_delay);
        pieceCompleteCount = 0;
        ++onPhoto;
        if (onPhoto >= photoCount) {
            onPhoto = 0;
        }
        
    console.log("next", state.screen_images)
        for (var i = 0; i < state.screen_images.length; i++) {
            console.log("nextloop ", "i=" + i, state.screen_images[i])
            var spinDelay = 0;
            var spin = 360;
            var piece = jQuery('#piece' + i);
            var image = state.screen_images[onPhoto]
            switch (transitions[transitionType]) {
                case 'random':
                    spinDelay = Math.random() / 2;
                    spin = Math.random() * 360;
                    console.log("random")
                    break;
                case 'center':
                    spinDelay = (pieceCount - i) / 10;
                    spin = 181;
                     console.log("center")
                    break;
            }

            TweenMax.to(piece, 1, {
                delay: spinDelay,
                directionalRotation: spin + '_long',
                onComplete: completeRotation,
                onCompleteParams: [piece,image],
                ease: Power4.easeIn
            })
        }
    }

    function completeRotation(piece,image) {
        //console.log("piece", piece, image.src)
        piece.css('background-image', 'url('+image.src+')');
        TweenMax.to(piece, 2, {
            directionalRotation: '0_short',
            onComplete: finishPieceanimation,
            ease: Elastic.easeOut
        })
    }

    function finishPieceanimation() {
        ++pieceCompleteCount;
        if (pieceCompleteCount == pieceCount) {
            state.circle_delay = setInterval(nextSlide, 5000);
        }
    }

function setSlideContent(slide, id) {
    //console.log("setSlideContent", slide, id )
    if (posts[id] != undefined) {
        var title_length = posts[id].title.length,
        content_length = posts[id].content.length
        
        jQuery("#slide" + id + " h2").html(posts[id].title)
        //console.log("title="+title_length,"content"+content_length)

      jQuery("#slide" + id + " section div.content").html(posts[id].content)
      $carousel.slick('slickGoTo', slide);
    } else {
      //console.log("post undefined", slide, id, posts)
    }
  }
  
  
  
  
  
  function setText(){
    if (typeof languages !== 'undefined') { // wpml present
  
      if(state.language == languages.default){//use defaults
        page_title = posts[state.post_id].title + " | " + site_title;
      } else { // get data. 
  
        page_title = retreiveML('posts',"title",state.post_id,state.language)
        //console.log("new page title " + page_title)
  
      }
  
    } else { // wpml not present, use default
      
  
      page_title = posts[state.post_id].title + " | " + site_title;
      
    }
    //set variables
    document.title = page_title;
  }
  
  
  
  
  function setContent(dest, object_id, object) {
    state.slide = posts_nav[object_id] //
    state.object_id = posts_nav[object_id]
   

    jQuery('#projects-content').fadeOut();
    jQuery('#project-info').fadeOut();
  
    jQuery('#wheel-menu-content').fadeIn();
    
    //console.log("setContent",dest,object_id,object,posts[object_id])
    if (posts[object_id] != undefined) {
      //console.log("selected post", posts[object_id])
      state.post_id = object_id;
      setText();
      
  
      setImage(object_id, //post id (ideally)
        "featured", //destination = id of empty tag and template waiting for its goodness
        'featured_media', //the attr of the objectg that we're passing, in this case, this is featured media
        "flip" // the type of effect that awaits
      );
  
     
      var video_path = uploads_path + "" + posts[object_id].featured_video.video_path;
  
      
      setVideo(posts[object_id].featured_video.video_id,"#bg-video")
      setRelated(posts[object_id])
      if (posts[object_id].screen_images.length >0){
        
        setScreenImages(posts[object_id].screen_images,"#screen-image","circleViewer");//array of images, destination, imagedisplaycallback
      } else {
        jQuery('#screen-image-container').html('')
      }
  //   console.log("tags", posts[object_id].tags)
  
    }
  
    setSlideContent(dest, object_id)
  
    /*
          for category wheels
          if(cat_children.length>0){
            for(c=0;c<cat_children.length;c++){
              
              data.push({
                    id : categories[cat_children[c]].id,
                    title : categories[cat_children[c]].name,
                    type: "category",
                    children: categories[cat_children[c]].children
                }
              )
              
            }
            
  
            makeWheelNav(dest, data, inner_subnav_params)
            //
  
          
  
        } else {
          
        }*/
  
  }
/*! flip - v1.1.2 - 2016-10-20
 * https://github.com/nnattawat/flip
 * Copyright (c) 2016 Nattawat Nonsung; Licensed MIT */
(function ($) {
    /*
     * Private attributes and method
     */

    // Function from David Walsh: http://davidwalsh.name/css-animation-callback licensed with http://opensource.org/licenses/MIT
    var whichTransitionEvent = function () {
        var t, el = document.createElement("fakeelement"),
            transitions = {
                "transition": "transitionend",
                "OTransition": "oTransitionEnd",
                "MozTransition": "transitionend",
                "WebkitTransition": "webkitTransitionEnd"
            };

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    };

    /*
     * Model declaration
     */
    var Flip = function ($el, options, callback) {
        //console.log('flip',$el,options,callback)
        // Define default setting
        this.setting = {
            axis: "y",
            reverse: false,
            trigger: "click",
            speed: 500,
            forceHeight: false,
            forceWidth: false,
            autoSize: true,
            front: '.front',
            back: '.back'
        };

        this.setting = $.extend(this.setting, options);

        if (typeof options.axis === 'string' && (options.axis.toLowerCase() === 'x' || options.axis.toLowerCase() === 'y')) {
            this.setting.axis = options.axis.toLowerCase();
        }

        if (typeof options.reverse === "boolean") {
            this.setting.reverse = options.reverse;
        }

        if (typeof options.trigger === 'string') {
            this.setting.trigger = options.trigger.toLowerCase();
        }

        var speed = parseInt(options.speed);
        if (!isNaN(speed)) {
            this.setting.speed = speed;
        }

        if (typeof options.forceHeight === "boolean") {
            this.setting.forceHeight = options.forceHeight;
        }

        if (typeof options.forceWidth === "boolean") {
            this.setting.forceWidth = options.forceWidth;
        }

        if (typeof options.autoSize === "boolean") {
            this.setting.autoSize = options.autoSize;
        }

        if (typeof options.front === 'string' || options.front instanceof $) {
            this.setting.front = options.front;
        }

        if (typeof options.back === 'string' || options.back instanceof $) {
            this.setting.back = options.back;
        }

        // Other attributes
        this.element = $el;
        this.frontElement = this.getFrontElement();
        this.backElement = this.getBackElement();
        this.isFlipped = false;

        this.init(callback);
    };

    /*
     * Public methods
     */
    $.extend(Flip.prototype, {

        flipDone: function (callback) {
            var self = this;
            // Providing a nicely wrapped up callback because transform is essentially async
            self.element.one(whichTransitionEvent(), function () {
                self.element.trigger('flip:done');
                if (typeof callback === 'function') {
                    callback.call(self.element);
                }
            });
        },

        flip: function (callback) {
            if (this.isFlipped) {
                return;
            }

            this.isFlipped = true;

            var rotateAxis = "rotate" + this.setting.axis;
            this.frontElement.css({
                transform: rotateAxis + (this.setting.reverse ? "(-180deg)" : "(180deg)"),
                "z-index": "0"
            });

            this.backElement.css({
                transform: rotateAxis + "(0deg)",
                "z-index": "1"
            });
            this.flipDone(callback);
        },

        unflip: function (callback) {
            if (!this.isFlipped) {
                return;
            }

            this.isFlipped = false;

            var rotateAxis = "rotate" + this.setting.axis;
            this.frontElement.css({
                transform: rotateAxis + "(0deg)",
                "z-index": "1"
            });

            this.backElement.css({
                transform: rotateAxis + (this.setting.reverse ? "(180deg)" : "(-180deg)"),
                "z-index": "0"
            });
            this.flipDone(callback);
        },

        getFrontElement: function () {
            if (this.setting.front instanceof $) {
                return this.setting.front;
            } else {
                return this.element.find(this.setting.front);
            }
        },

        getBackElement: function () {
            if (this.setting.back instanceof $) {
                return this.setting.back;
            } else {
                return this.element.find(this.setting.back);
            }
        },

        init: function (callback) {
            var self = this;

            var faces = self.frontElement.add(self.backElement);
            var rotateAxis = "rotate" + self.setting.axis;
            var perspective = self.element["outer" + (rotateAxis === "rotatex" ? "Height" : "Width")]() * 2;
            var elementCss = {
                'perspective': perspective,
                'position': 'relative'
            };
            var backElementCss = {
                "transform": rotateAxis + "(" + (self.setting.reverse ? "180deg" : "-180deg") + ")",
                "z-index": "0",
                "position": "relative"
            };
            var faceElementCss = {
                "backface-visibility": "hidden",
                "transform-style": "preserve-3d",
                "position": "absolute",
                "z-index": "1"
            };

            if (self.setting.forceHeight) {
                faces.outerHeight(self.element.height());
            } else if (self.setting.autoSize) {
                faceElementCss.height = '100%';
            }

            if (self.setting.forceWidth) {
                faces.outerWidth(self.element.width());
            } else if (self.setting.autoSize) {
                faceElementCss.width = '100%';
            }

            // Back face always visible on Chrome #39
            if ((window.chrome || (window.Intl && Intl.v8BreakIterator)) && 'CSS' in window) {
                //Blink Engine, add preserve-3d to self.element
                elementCss["-webkit-transform-style"] = "preserve-3d";
            }


            faces.css(faceElementCss).find('*').css({
                "backface-visibility": "hidden"
            });

            self.element.css(elementCss);
            self.backElement.css(backElementCss);

            // #39
            // not forcing width/height may cause an initial flip to show up on
            // page load when we apply the style to reverse the backface...
            // To prevent self we first apply the basic styles and then give the
            // browser a moment to apply them. Only afterwards do we add the transition.
            setTimeout(function () {
                // By now the browser should have applied the styles, so the transition
                // will only affect subsequent flips.
                var speedInSec = self.setting.speed / 1000 || 0.5;
                faces.css({
                    "transition": "all " + speedInSec + "s ease-out"
                });

                // This allows flip to be called for setup with only a callback (default settings)
                if (typeof callback === 'function') {
                    callback.call(self.element);
                }

                // While this used to work with a setTimeout of zero, at some point that became
                // unstable and the initial flip returned. The reason for this is unknown but we
                // will temporarily use a short delay of 20 to mitigate this issue.
            }, 20);

            self.attachEvents();
        },

        clickHandler: function (event) {
            if (!event) {
                event = window.event;
            }
            if (this.element.find($(event.target).closest('button, a, input[type="submit"]')).length) {
                return;
            }

            if (this.isFlipped) {
                this.unflip();
            } else {
                this.flip();
            }
        },

        hoverHandler: function () {
            var self = this;
            self.element.off('mouseleave.flip');

            self.flip();

            setTimeout(function () {
                self.element.on('mouseleave.flip', $.proxy(self.unflip, self));
                if (!self.element.is(":hover")) {
                    self.unflip();
                }
            }, (self.setting.speed + 150));
        },

        attachEvents: function () {
            var self = this;
            if (self.setting.trigger === "click") {
                self.element.on($.fn.tap ? "tap.flip" : "click.flip", $.proxy(self.clickHandler, self));
            } else if (self.setting.trigger === "hover") {
                self.element.on('mouseenter.flip', $.proxy(self.hoverHandler, self));
                self.element.on('mouseleave.flip', $.proxy(self.unflip, self));
            }
        },

        flipChanged: function (callback) {
            this.element.trigger('flip:change');
            if (typeof callback === 'function') {
                callback.call(this.element);
            }
        },

        changeSettings: function (options, callback) {
            var self = this;
            var changeNeeded = false;

            if (options.axis !== undefined && self.setting.axis !== options.axis.toLowerCase()) {
                self.setting.axis = options.axis.toLowerCase();
                changeNeeded = true;
            }

            if (options.reverse !== undefined && self.setting.reverse !== options.reverse) {
                self.setting.reverse = options.reverse;
                changeNeeded = true;
            }

            if (changeNeeded) {
                var faces = self.frontElement.add(self.backElement);
                var savedTrans = faces.css(["transition-property", "transition-timing-function", "transition-duration", "transition-delay"]);

                faces.css({
                    transition: "none"
                });

                // This sets up the first flip in the new direction automatically
                var rotateAxis = "rotate" + self.setting.axis;

                if (self.isFlipped) {
                    self.frontElement.css({
                        transform: rotateAxis + (self.setting.reverse ? "(-180deg)" : "(180deg)"),
                        "z-index": "0"
                    });
                } else {
                    self.backElement.css({
                        transform: rotateAxis + (self.setting.reverse ? "(180deg)" : "(-180deg)"),
                        "z-index": "0"
                    });
                }
                // Providing a nicely wrapped up callback because transform is essentially async
                setTimeout(function () {
                    faces.css(savedTrans);
                    self.flipChanged(callback);
                }, 0);
            } else {
                // If we didnt have to set the axis we can just call back.
                self.flipChanged(callback);
            }
        }

    });

    /*
     * jQuery collection methods
     */
    $.fn.flip = function (options, callback) {
        if (typeof options === 'function') {
            callback = options;
        }

        if (typeof options === "string" || typeof options === "boolean") {
            this.each(function () {
                var flip = $(this).data('flip-model');

                if (options === "toggle") {
                    options = !flip.isFlipped;
                }

                if (options) {
                    flip.flip(callback);
                } else {
                    flip.unflip(callback);
                }
            });
        } else {
            this.each(function () {
                if ($(this).data('flip-model')) { // The element has been initiated, all we have to do is change applicable settings
                    var flip = $(this).data('flip-model');

                    if (options && (options.axis !== undefined || options.reverse !== undefined)) {
                        flip.changeSettings(options, callback);
                    }
                } else { // Init
                    $(this).data('flip-model', new Flip($(this), (options || {}), callback));
                }
            });
        }

        return this;
    };

}(jQuery));
// pass the type in the route
// param = url arguments for the REST API
// callback is a dynamic function name 
// Pass the name of a function and it will return the data to that function

var posts = {},
  taxonomies = {},
  categories = {},
  tags = {},
  menus = {},
  media = {},
  posts_nav = {},
  posts_slug_ids = {},
  last_dest = 'outer-nav',
  menu_levels = [],
  menu_slides = [], // an array for all 
  related = {},
  data_score = 7,
  data_loaded = [],
  state = {}

  state.featured = {
    'transition': {
      'type': 'flip',
      'face': 'front'
    }
  }




function getStaticJSON(route, callback,dest) {
  // route =  the type 
  // param = url arguments for the REST API
  // callback = dynamic function name 
  // Pass in the name of a function and it will return the data to that function

  // local absolute path to the REST API + routing arguments
  var json_data = json_path + route + ".json"
  //console.log("jsonfile",json_data);
  jQuery.ajax({
    url: json_data, // the url
    data: '',
    success: function (data, textStatus, request) {
      //console.log(endpoint,data)
//      data_loaded.push(callback);
      return data,

        callback(data,dest) // this is the callback that sends the data to your custom function

    },
    error: function (data, textStatus, request) {
      //console.log(endpoint,data.responseText)
    },

    cache: false
  })
}

getStaticJSON('posts', setPosts) // get posts

// retrieves all projects, with fields from REST API
getStaticJSON('pages', setPosts) // get pages

// retrieves all projects, with fields from REST API
getStaticJSON('project', setPosts) // get the projects

// retrieves all categories for the development category
getStaticJSON('categories', setCategories) // returns the children of a specified parent category

// retrieves all categories for the development category
getStaticJSON('tags', setTags) // returns the tags

// retrieves top menu
getStaticJSON('menus', setMenus) // returns the tags

getStaticJSON('media', setMedia) // returns the tags



function setPosts(data) { // special function for the any post type

  var type = 'post'


  if (Array.isArray(data)) {

    for (var i = 0; i < data.length; i++) { // loop through the list of data
      //console.log("home", data[i].id)
      /*
        The REST API nests the output of title and content in the rendered variable, 
        so we must unpack and set it our way, which is just .title and .content
      */
      if (data[i].title !== undefined && data[i].title.rendered !== undefined) { // make sure the var is there
        data[i].title = data[i].title.rendered // lose that stupid rendered parameter
      }

      if (data[i].content !== undefined && data[i].content.rendered !== undefined) { // make sure the var is there
        data[i].content = data[i].content.rendered // lose the unnecessary "rendered" parameter
      }


      //console.log(dest,data[i]);
      if (data[i].type !== undefined) { // make sure the var is there
        type = data[i].type // set the type for the log

        posts[data[i].id] = data[i] // adds a key of the post id to address all data in the post as a JSON object
      }

    }
  } else {
    type = data.type // set the type for the log

    posts[data.id] = data // adds a key of the post id to address all data in the post as a JSON object

  }

  if (type !== undefined) {
    switch (type) {
      case type = 'project':

        break
      case type = 'post':

        break
      case type = 'page':

        break
    }
  }
  //console.log("posts",posts)


  return posts
}









var canvas = document.getElementById('matrix');
var ctx = canvas.getContext('2d');
var fontSize = 18;
var chars = generateChars();
var columns;
var drops; // Current position of last letter (for each column)
var drawnToBottom;

// Generate Matrix code characters
function generateChars() {
    var chars = '0123456789';

    // Get ALL half-width katakana characters by unicode value
    for (var i = 0; i <= 55; i++) {
        chars += String.fromCharCode(i + 65382);
    }

    return chars.split('');
}

// Initialize default canvas state
function initMatrix() {
    //console.log('start matrix')
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = Math.round(canvas.width / fontSize);
    drops = [];

    // Set initial position on y coordinate for each column
    for (var i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    drawnToBottom = false;
}

// Resize canvas to fit window
window.onresize = function () {
    initMatrix();
};

function draw() {
    // Set nearly transparent background so character trail is visible
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set color and font of falling letters
    ctx.fillStyle = '#19FF19';
    ctx.font = 'bold ' + fontSize + 'px monospace';

    var dropCount = drops.length;
    var charCount = chars.length;

    for (var i = 0; i < dropCount; i++) {
        // Choose a random letter
        var text = chars[Math.floor(Math.random() * charCount)];
        // Get the y position of the letter
        var rowNum = drops[i] * fontSize;
        // Draw it!
        ctx.fillText(text, i * fontSize, rowNum);

        // Check if the canvas has been drawn to the bottom
        if (rowNum > canvas.height) drawnToBottom = true;

        // Randomly reset the y position of a column
        if ((!drawnToBottom && Math.random() > 0.925) || (drawnToBottom && Math.random() > 0.95)) drops[i] = 0;

        drops[i]++;
    }
}


//setInterval(draw, 160);

function setMedia(data) {
    
    for (var m = 0; m < data.length; m++) {
        media[data[m].id] = data[m].data;
    }
    console.log("media", media);
}
function getMediaID(post_id,attr){
    //console.log(post_id,attr)
    if (posts[id][attr] != undefined) { //is featured_media defined
         var media_id = posts[post_id][attr]
         
        if (media_id > 0) { // is it set to a value above zero?
            
            if(media[media_id] != undefined){
                return media_id
            } else {
                return 0
            }

            // returns 


        } else {
            return 0
        }

    } else {
        return 0
    }
        

}
function getImageSRC(id, dest, size) { // id = media id

    console.log("set image", id, dest, size, media[id])
    if (media[id] != undefined) {


        var full_path = uploads_path + media[id].path // uploads path is in header
        var src = media[id].file; // this defaults to the basic file



        if (media[id].mime == "image/svg+xml") { // if it's an SVG, let the src pass through
            return full_path + src;
        } else { //for real images

            if (size == 'square'||size==1) { // if for a square area
                src = getSquareVersion(media[id].meta.sizes, dest) // get the size version of the sq
         //      console.log('square',src)
            } else if (size == 'thumbnail') {
                src = getSquareVersion(media[id].meta.sizes, dest)
          //       console.log('thumbnail', src)
            } else {
                
                src = media[id].meta.sizes[size] // returns specified size
                //console.log('default', size, media[id].meta.sizes,src)
            }
   
        }

        if (dest == '') { //set path to '' to return the src only
            //console.log("Src return", full_path + src)
            return full_path + src;




        } else { // if dest is specified, set the src to the id and 

            return full_path + src;
        }
        // show the wrapper

    } else {

        return ''
    }

}

function toggleFace(dest, type) {
    //console.log("toggle-face", dest, type, state[dest])
    if (state[dest].transition.face == 'front') {
        return 'back'
    } else {
        return 'front'
    }
}

function loadTemplate(dest, type) { // dest is name of place to put template, type = transition type
    //console.log("load template",dest,type)
    var template = jQuery('#' + dest + "-template").html(); // gets the empty contents of x-template script tag for this dest
    if (type == "flip") { // requires a front back wraper around template contents
        var front = '<div class="card front">' + template + '</div>' // wraps template in a front class
        var back = '<div class="card back">' + template + '</div>' // wrapte template in a back class
        jQuery('#' + dest).html(front + back); // loads both front and back into template into dest
    } else {
         jQuery('#' + dest).html(template); // defaults to empty template contents
    }

}
function clearImageText(){

}
function getAspect(w,h){
    if(w == h){
        return 'square'
    } else {
        return Math.round(w/h)
    }

}
function setImageContent(loc,title,caption,desc,alt,src){
        
        //console.log("SET IMAGE CONTENT",loc,title,caption,desc,alt,src)
        setTimeout(function () {
        jQuery(loc + " .title").html(title)
        jQuery(loc + " .caption").html(caption)
        jQuery(loc + " .description").html(desc)
        jQuery(loc + " .image").attr('alt',alt)
        jQuery(loc + " .image").attr('src', src)
        },250)

}




function transitionImage(dest, type, media_id) {

    if (jQuery('#' + dest).html() == '' || state[dest].transition != type) { // load the template, only if you need to
        state[dest].transition.type = type // if transition type has changed, set it
        loadTemplate(dest, type)
    }
    var aspect = getAspect(parseInt(jQuery("#" + dest).width()), parseInt(jQuery("#" + dest).height())) // pass the sizes of the destination to get the aspect
    var src = getImageSRC(media_id, dest + ' .image', aspect) //returns appropriate image sice.
    if (type == 'flip'){
        var next_face = toggleFace(dest, type) // flip requires front and back, will return opposite based on state
        //console.log("FLIP",next_face,dest, type, media_id,src)
        if(media[media_id] != undefined){
            /*
            //console.log('next face', next_face)
            var flip_chain = {
                flip_out: function () {
                        jQuery(dest).css('transform', 'rotateY(90deg)')
                        console.log('flipout')
                        return flip_chain
                    },
                set_content: function () {
                    setImageContent( '#' + dest + " ." + next_face, //uses "loc" instead of dest to allow for card faces.
                        media[media_id].title,
                        media[media_id].caption,
                        media[media_id].desc,
                        media[media_id].alt,
                        src)
                                            return flip_chain

                },
                flip_in: function() {
                    //jQuery(dest).css('transform', 'rotateY(90deg)')
                    console.log('flipin')

                    return flip_chain
                }
            }
            flip_chain.flip_out().set_content().flip_in()
            */

  
            setImageContent('#' + dest + " ." + next_face, //uses "loc" instead of dest to allow for card faces.
                  media[media_id].title,
                  media[media_id].caption,
                  media[media_id].desc,
                  media[media_id].alt,
                  src)
               
                state[dest].transition.face = next_face
            /*jQuery(function () {
                jQuery("#"+dest).flip({
                    axis: "y", // y or x
                    reverse: false, // true and false
                    trigger: "hover", // click or hover
                    speed: '250',
                    autoSize: false
                });
            })*/
         //   console.log('next face', next_face)
          
        } else {
            setImageContent('#' + dest + " ." + next_face,'','','','','')
        }
         jQuery('#' + dest).toggleClass('is-flipped')

    }


    
    

}




/* GET FEATURED IMAGE BY POST ID */
function setImage(post_id, dest, attr, type, size) {
    //console.log("set image", post_id, size)
    var transition_type = "flip"
    if (posts[post_id] != undefined) { //you passed a post ID, is it there?
        var media_id = getMediaID(post_id,attr) //returns zero if doesn't exist
        
        if (media_id >0 ) { //is media_id
        jQuery('#' + dest).fadeIn()
              
               // var src = getImageSRC(media_id, dest + '-image', 'square')
               // setMediaText(media_id, dest + '-image')
               // jQuery("#" + dest + '-image').attr("src", src)
                transitionImage(dest, transition_type, media_id)

                //console.log("set", media_id, src)
            
           
        } else {
            //console.log("media off", media_id)
            jQuery('#'+dest).fadeOut()
        }
        
    }
    

}


function wrapTag(tag, str) {
    return "<" + tag + ">" + str + "</" + tag + ">"
}

function setMediaText(id, dest) { // old

    if (media[id] != undefined) {
        // console.log("caption",media[id]);
        jQuery('#' + dest + "-title").html(media[id].title)
        jQuery('#' + dest + "-caption").html(media[id].caption)
        jQuery('#' + dest + "-description").html(media[id].desc)
        jQuery('#' + dest).attr("alt", media[id].alt);
    } else {
        //console.log("clear media text",dest);
        jQuery('#' + dest + "-title").html('')
        jQuery('#' + dest + "-caption").html('')
        jQuery('#' + dest + "-description").html('')
        jQuery('#' + dest).attr("alt", '');
    }

}

function getSquareVersion(sizes, dest) {

    box = { // object getting the container dimensions
        w: jQuery(dest + "-container").width(),
        h: jQuery(dest + "-container").height()
    }
    // console.log("box",box,"dest"+dest,sizes)

    if (box.w > 1280 || box.h > 1280) { //over 1500 use large
        //    console.log("sq-lg")
        return sizes['sq-lg']
    } else if ((box.w > 250 || box.h > 250) && (box.w <= 1280 || box.h <= 1280)) {
        // console.log("sq-med")
        return sizes['sq-med']
    } else {
        //  console.log("sq-sm")
        return sizes['sq-sm']
    }


}

function setVideo(id, dest) {


    if (media[id] != undefined) {

        var full_path = uploads_path + media[id].path // uploads path is in header
        var src = media[id].file; // this defaults to the basic file

        var video = jQuery(dest + ' video source').attr("src", full_path + src);
        
        //    console.log("unhide video player")

        jQuery(dest + ' video')[0].load();

        video = jQuery(dest + ' video source').attr("src", full_path + src);
        jQuery(dest).fadeIn()
    } else {
        //    console.log("no video, hide player")
        jQuery(dest).fadeOut();
    }

}

function setScreenImages(screen_images, dest, callback) {
    var images = []
    for (var i = 0; i < screen_images.length; i++) {
        console.log("screen image",screen_images[i])
        images.push({
            "src": getImageSRC(screen_images[i], '#screen-image', "square"),
            "data": media[screen_images[i]]
        })

    }
    state.screen_images = images
    console.log("set ScreenImages", screen_images, dest, images, callback);
    //callback(dest)
    //initParticleTranstion(dest)
    if(images.length>0 && callback == 'circleViewer'){
    circleViewer(dest, state.screen_images) // buggy
        }
    //  callback(dest,images)



}
var menu_config = {
    'wheel-menu': {
        'menu_type': 'wheel',
        'location': '#outer-nav'
    },
    'projects':{
         'menu_type': 'project',
         'location': '#projects'
    }, 
    'social-links' : {
    'menu_type': 'social',
    'location': '#social'
    }
}

function setMenus(data, dest) {
    //console.log("raw menu data",data)
 
    for (var i = 0; i < data.length; i++) {
        menus[data[i].slug] = {},
        menus[data[i].slug].menu_array = []
        menus[data[i].slug].name = data[i].name
        menus[data[i].slug].slug = data[i].slug
        menus[data[i].slug].items = setMenu(data[i].slug, data[i].items)
        
        //console.log("slug", data[i].slug)
    }
   buildMenuData();
   //console.log("raw menu data", menus)
    initSite()
}

function setMenu(slug, items) {
    menu = {}
    //console.log("setMenu",dest,slug,items)
    for (var i = 0; i < items.length; i++) {
        menu[items[i].ID] = setMenuItem(slug, items[i])
       // console.log("setMenu", items[i].ID, slug, items)
        if (items[i].menu_item_parent != 0) { //recursive
            menu[items[i].menu_item_parent].children.push(items[i].ID)//children empty array is created in setMenuItem

        } else {

        }
        menus[slug].menu_array.push(menu[items[i].ID])

    }
    //console.log("MENU ARRAY",menus[dest].menu_array)
    //console.log("SetMenu",slug, menu)
    return menu
}

function setMenuItem(slug, item) {
    //console.log("setMenuItem",item)
    this_item = {}
    this_item.menu_id = item.ID
    this_item.title = item.title

    this_item.menu_order = item.menu_order
    this_item.object = item.object
    this_item.object_id = item.object_id
    this_item.parent = item.menu_item_parent
    this_item.slug = slug


    this_item.children = []//this array is populated in Set Menu

    return this_item
}


function menu_order(a, b) {
    if (a.menu_order < b.menu_order)
        return -1;
    if (a.menu_order > b.menu_order)
        return 1;
    return 0;
}

function setLinearNav(m) {
    var counter = 0
    menus[m].linear_nav = [];
    for (var i in menus[m].items) {


       // menu.items[i].post = posts[menu.items[i].object_id]
        menus[m].items[i].slug = i


        id = menus[m].items[i].object_id
        menus[m].linear_nav.push(menus[m].items[i])

      
        counter++;
    }
    menus[m].linear_nav.sort(menu_order);
    
    
   //console.log("linear_nav", menus[m].linear_nav);
   // console.log("posts_nav", posts_nav);

}

function setLinearDataNav(m,data) { // sets local data into linear array for wheel
    menus[m].data_nav = []
    menus[m].slug_nav = []
    var counter = 0,
        outer_counter = 0,
        inner_counter = 0,
        inner_subcounter = 0,
        grandparent = 0,
        next_parent = 0,
        dest = 'outer-nav'

    // THESE 3 NESTED LOOPS POPULATE THE data_nav array WITH WHAT IT NEEDS TO BUILD THE WHEEL AND HAVE IT BE CONTROLLED BY THE ORDERED NOTCHES FROM THE NAV
    //console.log(m,data)
    for (var d = 0; d < data.length; d++) { //outer
        dest = 'outer-nav'
        data[d].dest = dest;
        data[d].slice = outer_counter;
        data[d].notch = counter;
        grandparent = counter;
        menus[m].data_nav.push(data[d])
        menus[m].slug_nav[data[d].slug] = counter
        counter++;
        for (var c = 0; c < data[d].children.length; c++) { //children
            data[d].children[c].dest = "inner-nav"
            data[d].children[c].slice = c
            data[d].children[c].notch = counter
            data[d].children[c].parent = grandparent
            next_parent = counter
            menus[m].data_nav.push(data[d].children[c])
            menus[m].slug_nav[data[d].children[c].slug] = counter;
            counter++
            for (var g = 0; g < data[d].children[c].children.length; g++) { //grandchildren
                data[d].children[c].children[g].dest = "inner-subnav"
                data[d].children[c].children[g].slice = g
                data[d].children[c].children[g].notch = counter
                data[d].children[c].children[g].grandparent = grandparent
                data[d].children[c].children[g].parent = next_parent

                menus[m].data_nav.push(data[d].children[c].children[g])
                menus[m].slug_nav[data[d].children[c].children[g].slug] = counter;
                counter++
            }
            // console.log("dataNav", data);
        }

        outer_counter++;

    }
     //console.log("dataNav",m, menus[m].data_nav);
     //console.log("slug_nav",m, menus[m].slug_nav);
}
function getSlug(item,_of,_array,_it){
    if(item!=undefined){
        var slug = item.slug
        if (posts[item.object_id] != undefined){
            slug = posts[item.object_id].slug
        }
    } else {
  //  console.log("get slug item undefined",slug,item.object_id,item,_of,_array,_it)
}    
  return slug
    
}
function buildMenuData() {

    // needs post variable
    if (posts == undefined) {
        //console.log("No Posts Data Yet",  posts)
        window.setTimeout(buildMenuData(), 10);
    } else {

        
       
    
        for (var m in menus) { // 
             var data = [];
            //console.log('menu loop',m)
            if (menu_config[m] != undefined) { 
                var items = ''

                //menus[m].items.sort(function(a,b){return a.menu_order-b.menu_order})



                menus[m].menu_array = [];
                for (var i in menus[m].items) {
                    // console.log('menu item', menus[m].items[i], menu_config[m].location)
                    if (menus[m].items[i].parent == 0) {
                        // console.log("menu", menus[m].items[i].title)

                        menus[m].menu_array.push(menus[m].items[i]);
                    }
                    // items += '<a href="#" class="">' + menus[m].items[i].title + '</a>'

                }
                menus[m].menu_array.sort(menu_order);


                var children = [];
                var this_menu = menus[m].menu_array
                
                for (var a = 0; a < this_menu.length; a++) {
                    children = [];

                    for (var c = 0; c < this_menu[a].children.length; c++) {
                        var grandchildren = [];
                        var nested_children = menus[m].items[this_menu[a].children[c]].children;
                        for (var g = 0; g < nested_children.length; g++) {
                            slug = getSlug(menus[m].items[nested_children[g]],g,"g",nested_children,g)
                            grandchildren.push( // data for childe menus
                                {
                                    "title": menus[m].items[nested_children[g]].title,

                                    "slug": slug,
                                    "object": menus[m].items[nested_children[g]].object,
                                    "object_id": menus[m].items[nested_children[g]].object_id, // the post id

                                }
                            )

                        }

                        
                    slug = getSlug(menus[m].items[this_menu[a].children[c]],"c",this_menu[a].children[c],c)
                      //console.log('bad slug', menus[m].items[this_menu[a].children[c]])
                        children.push( // data for child menus
                            {
                                "title": menus[m].items[this_menu[a].children[c]].title,
                                "slug": slug,
                                "object": menus[m].items[this_menu[a].children[c]].object,
                                "object_id": menus[m].items[this_menu[a].children[c]].object_id, // the post id
                                "children": grandchildren
                            }
                        )

                    }
                    //console.log('outer', this_menu[a].object_id,  this_menu[a])
                    slug = getSlug(this_menu[a],"o",this_menu,a)
                    data.push({ // data for top level
                        "title": this_menu[a].title,
                        //"id": this_menu[a].id,
                        "slug": slug,
                        "object": this_menu[a].object,
                        "object_id": this_menu[a].object_id, //the post_id
                        "children": children
                    })

                }
                menus[m].menu_levels = data
                //menu_levels = data;
                setLinearDataNav(m,data);
                setLinearNav(m)
                //console.log('makeouterwheel',menu_levels);





                //circleMenu('.circle a')
            }
            
        }

    }

}
//window.onload = init;
//console.ward = function() {}; // what warnings?
/*
function initParticleTranstion(dest) {
  var root = new THREERoot({
    createCameraControls: !true,
    antialias: (window.devicePixelRatio === 1),
    fov: 80
  });

  root.renderer.setClearColor(0x000000, 0);
  root.renderer.setPixelRatio(window.devicePixelRatio || 1);
  root.camera.position.set(0, 0, 60);

  var particleSlides = []
  var slideLoader = []
  var width = 100;
  var height = 60;
  var tl = new TimelineMax({
    repeat: -1,
    repeatDelay: 1.0,
    yoyo: true
  });
  for (var i = 0; i < state.screen_images.length; i++) {
    particleSlides[i] = new Slide(width, height, 'out');
    slideLoader[i] = new THREE.ImageLoader();
    slideLoader[i].setCrossOrigin('Anonymous');
    console.log("SRC"+state.screen_images[i].src)
    slideLoader[i].load(state.screen_images[i].src, function (img) {
     particleSlides[i].setImage(img);
    })

    
    root.scene.add(slide[0]);
    tl.add(slide[i].transition(), 0);
  }

  createTweenScrubber(tl);

  window.addEventListener('keyup', function(e) {
    if (e.keyCode === 80) {
      tl.paused(!tl.paused());
    }
  });
}

////////////////////
// CLASSES
////////////////////

function Slide(width, height, animationPhase) {
  var plane = new THREE.PlaneGeometry(width, height, width * 2, height * 2);

  THREE.BAS.Utils.separateFaces(plane);

  var geometry = new SlideGeometry(plane);

  geometry.bufferUVs();

  var aAnimation = geometry.createAttribute('aAnimation', 2);
  var aStartPosition = geometry.createAttribute('aStartPosition', 3);
  var aControl0 = geometry.createAttribute('aControl0', 3);
  var aControl1 = geometry.createAttribute('aControl1', 3);
  var aEndPosition = geometry.createAttribute('aEndPosition', 3);

  var i, i2, i3, i4, v;

  var minDuration = 0.8;
  var maxDuration = 1.2;
  var maxDelayX = 0.9;
  var maxDelayY = 0.125;
  var stretch = 0.11;

  this.totalDuration = maxDuration + maxDelayX + maxDelayY + stretch;

  var startPosition = new THREE.Vector3();
  var control0 = new THREE.Vector3();
  var control1 = new THREE.Vector3();
  var endPosition = new THREE.Vector3();

  var tempPoint = new THREE.Vector3();

  function getControlPoint0(centroid) {
    var signY = Math.sign(centroid.y);

    tempPoint.x = THREE.Math.randFloat(0.1, 0.3) * 50;
    tempPoint.y = signY * THREE.Math.randFloat(0.1, 0.3) * 70;
    tempPoint.z = THREE.Math.randFloatSpread(20);

    return tempPoint;
  }

  function getControlPoint1(centroid) {
    var signY = Math.sign(centroid.y);

    tempPoint.x = THREE.Math.randFloat(0.3, 0.6) * 50;
    tempPoint.y = -signY * THREE.Math.randFloat(0.3, 0.6) * 70;
    tempPoint.z = THREE.Math.randFloatSpread(20);

    return tempPoint;
  }

  for (i = 0, i2 = 0, i3 = 0, i4 = 0; i < geometry.faceCount; i++, i2 += 6, i3 += 9, i4 += 12) {
    var face = plane.faces[i];
    var centroid = THREE.BAS.Utils.computeCentroid(plane, face);

    // animation
    var duration = THREE.Math.randFloat(minDuration, maxDuration);
    var delayX = THREE.Math.mapLinear(centroid.x, -width * 0.5, width * 0.5, 0.0, maxDelayX);
    var delayY;

    if (animationPhase === 'in') {
      delayY = THREE.Math.mapLinear(Math.abs(centroid.y), 0, height * 0.5, 0.0, maxDelayY)
    }
    else {
      delayY = THREE.Math.mapLinear(Math.abs(centroid.y), 0, height * 0.5, maxDelayY, 0.0)
    }

    for (v = 0; v < 6; v += 2) {
      aAnimation.array[i2 + v]     = delayX + delayY + (Math.random() * stretch * duration);
      aAnimation.array[i2 + v + 1] = duration;
    }

    // positions

    endPosition.copy(centroid);
    startPosition.copy(centroid);

    if (animationPhase === 'in') {
      control0.copy(centroid).sub(getControlPoint0(centroid));
      control1.copy(centroid).sub(getControlPoint1(centroid));
    }
    else { // out
      control0.copy(centroid).add(getControlPoint0(centroid));
      control1.copy(centroid).add(getControlPoint1(centroid));
    }

    for (v = 0; v < 9; v += 3) {
      aStartPosition.array[i3 + v]     = startPosition.x;
      aStartPosition.array[i3 + v + 1] = startPosition.y;
      aStartPosition.array[i3 + v + 2] = startPosition.z;

      aControl0.array[i3 + v]     = control0.x;
      aControl0.array[i3 + v + 1] = control0.y;
      aControl0.array[i3 + v + 2] = control0.z;

      aControl1.array[i3 + v]     = control1.x;
      aControl1.array[i3 + v + 1] = control1.y;
      aControl1.array[i3 + v + 2] = control1.z;

      aEndPosition.array[i3 + v]     = endPosition.x;
      aEndPosition.array[i3 + v + 1] = endPosition.y;
      aEndPosition.array[i3 + v + 2] = endPosition.z;
    }
  }

  var material = new THREE.BAS.BasicAnimationMaterial(
    {
      shading: THREE.FlatShading,
      side: THREE.DoubleSide,
      uniforms: {
        uTime: {type: 'f', value: 0}
      },
      shaderFunctions: [
        THREE.BAS.ShaderChunk['cubic_bezier'],
        //THREE.BAS.ShaderChunk[(animationPhase === 'in' ? 'ease_out_cubic' : 'ease_in_cubic')],
        THREE.BAS.ShaderChunk['ease_in_out_cubic'],
        THREE.BAS.ShaderChunk['quaternion_rotation']
      ],
      shaderParameters: [
        'uniform float uTime;',
        'attribute vec2 aAnimation;',
        'attribute vec3 aStartPosition;',
        'attribute vec3 aControl0;',
        'attribute vec3 aControl1;',
        'attribute vec3 aEndPosition;',
      ],
      shaderVertexInit: [
        'float tDelay = aAnimation.x;',
        'float tDuration = aAnimation.y;',
        'float tTime = clamp(uTime - tDelay, 0.0, tDuration);',
        'float tProgress = ease(tTime, 0.0, 1.0, tDuration);'
        //'float tProgress = tTime / tDuration;'
      ],
      shaderTransformPosition: [
        (animationPhase === 'in' ? 'transformed *= tProgress;' : 'transformed *= 1.0 - tProgress;'),
        'transformed += cubicBezier(aStartPosition, aControl0, aControl1, aEndPosition, tProgress);'
      ]
    },
    {
      map: new THREE.Texture(),
    }
  );

  THREE.Mesh.call(this, geometry, material);

  this.frustumCulled = false;
}
Slide.prototype = Object.create(THREE.Mesh.prototype);
Slide.prototype.constructor = Slide;
Object.defineProperty(Slide.prototype, 'time', {
  get: function () {
    return this.material.uniforms['uTime'].value;
  },
  set: function (v) {
    this.material.uniforms['uTime'].value = v;
  }
});

Slide.prototype.setImage = function(image) {
  this.material.uniforms.map.value.image = image;
  this.material.uniforms.map.value.needsUpdate = true;
};

Slide.prototype.transition = function() {
  return TweenMax.fromTo(this, 3.0, {time:0.0}, {time:this.totalDuration, ease:Power0.easeInOut});
};


function SlideGeometry(model) {
  THREE.BAS.ModelBufferGeometry.call(this, model);
}
SlideGeometry.prototype = Object.create(THREE.BAS.ModelBufferGeometry.prototype);
SlideGeometry.prototype.constructor = SlideGeometry;
SlideGeometry.prototype.bufferPositions = function () {
  var positionBuffer = this.createAttribute('position', 3).array;

  for (var i = 0; i < this.faceCount; i++) {
    var face = this.modelGeometry.faces[i];
    var centroid = THREE.BAS.Utils.computeCentroid(this.modelGeometry, face);

    var a = this.modelGeometry.vertices[face.a];
    var b = this.modelGeometry.vertices[face.b];
    var c = this.modelGeometry.vertices[face.c];

    positionBuffer[face.a * 3]     = a.x - centroid.x;
    positionBuffer[face.a * 3 + 1] = a.y - centroid.y;
    positionBuffer[face.a * 3 + 2] = a.z - centroid.z;

    positionBuffer[face.b * 3]     = b.x - centroid.x;
    positionBuffer[face.b * 3 + 1] = b.y - centroid.y;
    positionBuffer[face.b * 3 + 2] = b.z - centroid.z;

    positionBuffer[face.c * 3]     = c.x - centroid.x;
    positionBuffer[face.c * 3 + 1] = c.y - centroid.y;
    positionBuffer[face.c * 3 + 2] = c.z - centroid.z;
  }
};


function THREERoot(params) {
  params = utils.extend({
    fov: 60,
    zNear: 10,
    zFar: 100000,

    createCameraControls: true
  }, params);

  this.renderer = new THREE.WebGLRenderer({
    antialias: params.antialias,
    alpha: true
  });
  this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  document.getElementById('#screen-image-container').appendChild(this.renderer.domElement);

  this.camera = new THREE.PerspectiveCamera(
    params.fov,
    window.innerWidth / window.innerHeight,
    params.zNear,
    params.zfar
  );

  this.scene = new THREE.Scene();

  if (params.createCameraControls) {
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
  }

  this.resize = this.resize.bind(this);
  this.tick = this.tick.bind(this);

  this.resize();
  this.tick();

  window.addEventListener('resize', this.resize, false);
}
THREERoot.prototype = {
  tick: function () {
    this.update();
    this.render();
    requestAnimationFrame(this.tick);
  },
  update: function () {
    this.controls && this.controls.update();
  },
  render: function () {
    this.renderer.render(this.scene, this.camera);
  },
  resize: function () {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
};

////////////////////
// UTILS
////////////////////

var utils = {
  extend: function (dst, src) {
    for (var key in src) {
      dst[key] = src[key];
    }

    return dst;
  },
  randSign: function () {
    return Math.random() > 0.5 ? 1 : -1;
  },
  ease: function (ease, t, b, c, d) {
    return b + ease.getRatio(t / d) * c;
  },
  fibSpherePoint: (function () {
    var vec = {x: 0, y: 0, z: 0};
    var G = Math.PI * (3 - Math.sqrt(5));

    return function (i, n, radius) {
      var step = 2.0 / n;
      var r, phi;

      vec.y = i * step - 1 + (step * 0.5);
      r = Math.sqrt(1 - vec.y * vec.y);
      phi = i * G;
      vec.x = Math.cos(phi) * r;
      vec.z = Math.sin(phi) * r;

      radius = radius || 1;

      vec.x *= radius;
      vec.y *= radius;
      vec.z *= radius;

      return vec;
    }
  })(),
  spherePoint: (function () {
    return function (u, v) {
      u === undefined && (u = Math.random());
      v === undefined && (v = Math.random());

      var theta = 2 * Math.PI * u;
      var phi = Math.acos(2 * v - 1);

      var vec = {};
      vec.x = (Math.sin(phi) * Math.cos(theta));
      vec.y = (Math.sin(phi) * Math.sin(theta));
      vec.z = (Math.cos(phi));

      return vec;
    }
  })()
};

function createTweenScrubber(tween, seekSpeed) {
  seekSpeed = seekSpeed || 0.001;

  function stop() {
    TweenMax.to(tween, 1, {timeScale:0});
  }

  function resume() {
    TweenMax.to(tween, 1, {timeScale:1});
  }

  function seek(dx) {
    var progress = tween.progress();
    var p = THREE.Math.clamp((progress + (dx * seekSpeed)), 0, 1);

    tween.progress(p);
  }

  var _cx = 0;

  // desktop
  var mouseDown = false;
  document.body.style.cursor = 'pointer';

  window.addEventListener('mousedown', function(e) {
    mouseDown = true;
    document.body.style.cursor = 'ew-resize';
    _cx = e.clientX;
    stop();
  });
  window.addEventListener('mouseup', function(e) {
    mouseDown = false;
    document.body.style.cursor = 'pointer';
    resume();
  });
  window.addEventListener('mousemove', function(e) {
    if (mouseDown === true) {
      var cx = e.clientX;
      var dx = cx - _cx;
      _cx = cx;

      seek(dx);
    }
  });
  // mobile
  window.addEventListener('touchstart', function(e) {
    _cx = e.touches[0].clientX;
    stop();
    e.preventDefault();
  });
  window.addEventListener('touchend', function(e) {
    resume();
    e.preventDefault();
  });
  window.addEventListener('touchmove', function(e) {
    var cx = e.touches[0].clientX;
    var dx = cx - _cx;
    _cx = cx;

    seek(dx);
    e.preventDefault();
  });
}
*/
function psConsole(){

}
function setProject(post_id){
    
    if(state.object_id != post_id){
        var slug = posts[post_id].slug
        var slide = menus['projects'].slug_nav[slug]
    //  console.log("set project",post_id,posts[post_id].slug,posts[post_id],"slugnum="+menus['projects'].slug_nav[slug])
        
        jQuery('#wheel-menu-content').fadeOut();
        jQuery('#projects-content').fadeIn();
        setSlideContent(slide,post_id)
        setImage(post_id, //post id (ideally)
            "featured", // @string destination = id of empty tag and template waiting for its goodness
            'featured_media', //@string the attr of the objectg that we're passing, in this case, this is featured media
            "flip" // @string the type of effect that awaits
        );
        var video_path = uploads_path + "" + posts[post_id].featured_video.video_path;

        
        setVideo(posts[post_id].featured_video.video_id,"#bg-video")
        projectInfo(post_id)
        state.object_id = post_id
    }
}
function projectInfo(post_id){
    var template = jQuery('#project-info-template').html()
    var project_info = posts[post_id].project_info
    var loc = '#project-info'
    jQuery(loc).html(template)
   // console.log(posts[post_id].project_info,template)
    var link = '<a href="'+project_info.url+'" target="_blank">Go to </a>'
    jQuery(loc + " .client").html(project_info.client)
    jQuery(loc + " .agency").html(project_info.agency)
    jQuery(loc + " .project-url").html(link)
    jQuery(loc + " .era").html(project_info.era)
    jQuery('project-info').html(template).fadeIn();
    var s = project_info.client;
    var client_wrap = []
    for (var i = 0; i < s.length; i++) {
        client_wrap.push(s[i]);
    }
    //console.log("client",client_wrap)
}
function setRelated(post) {

  /*
  
      This is fun! 
      This sets the related variable as an object of taxonomies, 
      containing an array of related post ids
  
    */

  var this_post = null,
    this_cat = null //defaults

  related = {} // create empty object
  related.cats = {} //vessel for related categories
  related.tags = {} //vessel for related tags 
  //if you put in another taxonomy, add it to the loop above.

  var local_data = {
    'cats': categories,
    'tags': tags
  } //put taxonomies into object using alias in post


  /*
    ready for a ridiculous triple summersault? Let's do this!
    You see, the nested loop for related content will work the same for categories and tags, so why not put an outer loop of the local data to loop through them, so if this function changes, it does so once. 
  */
  for (var r in related) { //loop through related taxonomy aliases to get name dynamically
    // r is the taxonomy alias =>string

    for (var t = 0; t < post[r].length; t++) { // loop through array of taxonomies of the post object that got passed in.
      //t is the array key of the taxonomy =>int
      // console.log(r,posts[r])
      for (var p = 0; p < local_data[r][post[r][t]].posts.length; p++) {
        //p is the post_id of the related post from the taxonomy
        this_post = local_data[r][post[r][t]].posts[p] // id of post in question
        if (post.id != this_post) { // exclude self
          if (posts[this_post] != undefined) { //proceed if post exists
            var type = posts[this_post].type // set the post type locally
            if (related[r][type] == undefined) { // if this related post type doesn't have an object yet
              related[r][type] = [] //then create an array to stuff the posts ids in 

            }
            related[r][type].push(this_post); // by using an object by id prevents duplicates, the post id can be used


          }

        }
      }
    }
  }

  delete local_data // no reason keeping the aliased taxonomies in memory

  displayRelated()


  //console.log("related",related)

}

function displayRelated() {
  jQuery("#related").html('');
  rel_list = ''
  var aspect = getAspect(jQuery("#related ul li").width(), jQuery("#related ul li").height())


  for (var tax in related) { // loop through Taxonomies
    rel_list += '<ul class="' + tax + '">' //

    for (var type in related[tax]) {
      for (var p = 0; p < related[tax][type].length; p++) {
        post_id = related[tax][type][p] // post_id of related content
        var bg_image = ''; // default empty
        var src = '' // default empty
        var media_id = getMediaID(post_id, 'featured_media') // returns media id or zero if media object is undefined

        if (media_id > 0) {
          //  src = getImageSRC(media_id,'#related ul li','thumbnail')
        }
        // console.log("set related","src="+src,post_id,media_id);
        if (src != '') {

          bg_image = ' style="background-image:url(' + src + ')"'
        }
        rel_list += '<li ' + bg_image + ' class="ui-widget ' + type + '" data-rel="' + post_id + '">'
        // console.log("related post",post_id)
        rel_list += post_id
        rel_list += '</li>'

      }
    }
    rel_list += '</ul>'
  }
  jQuery("#related").html(rel_list);

}



function tipHoverContent(id) {
  //console.log("hover tip",id)
  var tipContent = '';
  if (posts[id].type == 'project') {
    tipContent += '<span class="hover-title">' + posts[id].project_info.client + '</span>'
    if (posts[id].project_info.agency != '') {
      tipContent += '<span class="hover-sub">' + posts[id].project_info.agency + '</span>'
    }
  }
  return tipContent
}

function selectRelatedPost(post_id) {

  if (posts[post_id].type == 'project') {
    setProject(post_id)
    // setSliderNotch(1)//Projects hardset to notch one.
    // setContent(1, post_id, posts[post_id].type)

  }






}


(function ($) {




  $(document).tooltip({
    items: "[data-rel]", // tootip for related data
    //  tooltipClass:'rel-tip',
    content: function () {
      var post_id = $(this).data('rel');
      var tip = ''
      var bg_image = ''; // default empty
      var src = '' // default empty
      var media_id = getMediaID(post_id, 'featured_media') // returns media id or zero if media object is undefined

      if (media_id != 0) {
        src = getImageSRC(media_id, '.rel-tooltip', 'thumbnail');
      }
      console.log("set related", src, post_id, media_id);
      if (src != '') {

        bg_image = ' style="background-image:url(' + src + ')"'
      }
      $(this).on("click", function (e) {
        e.preventDefault();
        selectRelatedPost(post_id);

      }).on("mouseover", function (e) {
        console.log("related1" + post_id, "mouseover");
        e.preventDefault();
        console.log("related" + post_id, "mouseover");
      }).on("mouseout", function (e) {
        e.preventDefault();
        //    console.log("related"+post_id,"mouseoout");
      }).on("mousedown", function (e) {
        e.preventDefault();
        //    console.log("related"+post_id,"mousedown");
      }).on("mouseup", function (e) {
        e.preventDefault();
        //    console.log("related"+post_id,"mouseup");
      });

      tip += '<div class="rel-tooltip"' + bg_image + '>'

      //tip += tipHoverContent(id)

      tip += '</div>'
      console.log(tip)
      //return tip
    }
  });
})(jQuery);
var gotoslide = function(slide){
  //console.log("click on slick dot ", slide);
   setSlideContent(notch, menus['wheel-menu'].linear_nav[slide].object_id)
    $( '.slideshow' ).slickGoTo(parseInt(slide));
}

jQuery('.slick-dots li button').on('click', function (e) {
   e.stopPropagation(); // use this
  //console.log("slick dot clicked")
});

function setSlideShow(menu){
  jQuery('.slideshow').slick({
  //	autoplay: true,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase:  'linear',
    focusoOnSelect: true,
    //nextArrow: '<i class="slick-arrow slick-next"></i>',
    //prevArrow: '<i class="slick-arrow slick-prev"></i>',
  });

   //console.log("set slideshow")
}
function setSlide(slide,id){
  /*
  these carousel slides are created here, but their content is populated dynamically
  because it was unreliable populating the content in a loop
  see setSlideContent in app.js
  */
  slide = '\n<div><div id="slide'+id+'" data-id="'+id+'" class="slide-wrap">'
  slide += '\n\t<h2></h2>'
  slide += '\n\t<div class="img-wrap"></div>'
  slide += '\n\t<section><div class="content"></div></section>'
  slide +='\n</div></div>\n';
  return slide
}

function setSlides(m){
  var id="0"
  var content = ''
  var title = ''
  var slides = ''
//console.log("Begin Render Slides",m,"|")
 
  if(posts == undefined){
    //console.log("No Posts Data Yet",  posts)
    window.setTimeout(setSlides(m), 100);//without this, we cannot relay that the post data is available yet
  } else {
  
  for(i=0;menus[m].linear_nav[i];i++){
    //console.log("slides", menus[m].linear_nav[i])
     id = menus[m].linear_nav[i].object_id.toString()
  
      slides += setSlide(i,id)
   
  }
 //console.log("slides rendered",slides)

  jQuery('#'+m+'-content').html(slides);
 
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
       // console.log("click on slick dot ", slide);
  e.preventDefault();
  var slide = jQuery(this).data('slide');
  //console.log("click on slick dot ", slide);
  setSlideContent(notch, menus['wheel-menu'].linear_nav[slide].object_id)
  //$carousel.slick('slickGoTo', slideno);

});
function setSlider() {
// console.log("slider", oriented, menus, menus[m], m)


 // console.log("slider_oritentation", slider_orientation)
  if(menus['wheel-menu'] != undefined){
    jQuery("#slider").slider({
      orientation: slider_orientation,
      range: "max",
      min: 0,
      max: menus['wheel-menu'].linear_nav.length,
      value: 0,
      slide: function (event, ui) {
        setSliderNotch(ui.value)
        //   console.log("slider",ui.value)
        // jQuery( "#amount" ).val( ui.value );
      }



    });

    jQuery('.slick-dots li button').on('click', function (e) {
      e.stopPropagation(); // use this
      //console.log("slick dot clicked")
    });
  }

}
/**/
  jQuery('#slider').on('mousewheel DOMMouseScroll', function(e) {
    e.preventDefault();
    
    value = jQuery( "#slider" ).slider( "value" );
    if(value == undefined || value == NaN){
      value=0
    }
    var event = e.originalEvent
    console.log(jQuery("#slider").slider);
  
   
    if (event.deltaY == -150) { //Mousewheel Scrolled up
        
         if (value < menus['wheel-menu'].linear_nav.length) {
           value = value+1
         } else {
           value = 0; // jump to bottom from top
         }
        setSliderNotch(value)
    }
    
    else if (event.deltaY == 150) { //Mousewheel Scrolled down
     
        if (value == 0){
          value = menus['wheel-menu'].linear_nav.length // jump to top from bottom
        } else {
          value = value - 1;
        }


        setSliderNotch(value)
        
    }
    
  });

(function ($) {
 

  $('div.arrow').on('click', function (e) {
    e.stopPropagation(); // use this
    var id = $(this).attr("id");

    var next_notch = current_notch;

    if (id == 'down-arrow') {

      if (next_notch == 0) {
        next_notch = menus['wheel-menu'].linear_nav.length - 1
      } else {
        next_notch--
      }



    } else if (id == 'up-arrow') {



      if (next_notch == menus['wheel-menu'].linear_nav.length - 1) {
        next_notch = 0
      } else {
        next_notch++
      }
    }
    //console.log('arrow_next',next_notch)
    setSliderNotch(next_notch)




  });

})(jQuery)


function setSliderNotch(notch) {
  var m = 'wheel-menu'
  if (state.circle_delay != undefined) {
      ///console.log("delay", state.circle_delay)
    clearInterval(state.circle_delay);
     //console.log("stop delay", state.circle_delay)
  }
  
  console.log("notch", menus[m].data_nav[notch], notch, getSlug(menus[m].data_nav[notch]))
 
  
  location.hash = getSlug(menus[m].data_nav[notch])
  //console.log("set slider notch", notch,location.hash)
  jQuery("#slider").slider('value', notch);
  if (menus['wheel-menu'].linear_nav[notch] != undefined) {

    setContent(notch, menus[m].data_nav[notch].object_id, menus[m].data_nav[notch].object)
    triggerWheelNav(notch)
    //selectNavItem(notch);
  }
  current_notch = notch;
  // document.title = linear_nav[notch].title+" | "+site_title
}
// Declare three.js variables
var camera, scene, renderer, stars = []

// assign three.js objects to each variable
function initStars () {

  // camera
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.z = 5

  // scene
  scene = new THREE.Scene()

  // renderer
  renderer = new THREE.WebGLRenderer()
  // set the size of the renderer
  renderer.setSize(window.innerWidth, window.innerHeight)

  // add the renderer to the html document body
  jQuery('#stars').append(renderer.domElement)
}

function addSphere () {

  // The loop will move from z position of -1000 to z position 1000, adding a random particle at each position. 
  for ( var z = -1000; z < 1000; z += 20) {

    // Make a sphere (exactly the same as before). 
    var geometry = new THREE.SphereGeometry(0.5, 32, 32)
    var material = new THREE.MeshBasicMaterial({color: 0xffffff})
    var sphere = new THREE.Mesh(geometry, material)

    // This time we give the sphere random x and y positions between -500 and 500
    sphere.position.x = Math.random() * 1000 - 500
    sphere.position.y = Math.random() * 1000 - 500

    // Then set the z position to where it is in the loop (distance of camera)
    sphere.position.z = z

    // scale it up a bit
    sphere.scale.x = sphere.scale.y = 2

    // add the sphere to the scene
    scene.add(sphere)

    // finally push it to the stars array 
    stars.push(sphere)
  }
}

function animateStars () {

  // loop through each star
  for (var i = 0; i < stars.length; i++) {
    star = stars[i]

    // and move it forward dependent on the mouseY position. 
    star.position.z += i / 10

    // if the particle is too close move it to the back
    if (star.position.z > 1000) star.position.z -= 2000
  }
}

function render () {
  // get the frame
  requestAnimationFrame(render)

  // render the scene
  renderer.render(scene, camera)
  animateStars()
}

initStars()
addSphere()
render()
jQuery(window).on('resize', function () {
  renderer.setSize(window.innerWidth, window.innerHeight)
  
})
//renderer.setSize(window.innerWidth, window.innerHeight)

function setChildCategories(data) {
  for (var i = 0; i < data.length; i++) {
    categories[data[i].id] = data[i]
  }
  // console.log('categories', categories)
 
  return data
}

function setCategories(data) {
  //console.log("categories json", data)
  for (var i = 0; i < data.length; i++) { //creates object of categories by key
    categories[data[i].id] = data[i]
  }
  //  console.log('categories', categories)
 
  return data
}

function setTags(data) {
  for (var i = 0; i < data.length; i++) {
    tags[data[i].id] = data[i]
  }
  //console.log('tags', tags)
  
  return data
}





        
    last_outer_notch = 0,
    last_inner_notch = 0
var menu_raphael = {}
var wheels = {}


 

function makeWheelNav(dest, data, _p) {
    setWheelNavParams()
    _p = wheel_nav_params

    if (dest == "outer-nav") {
        child_dest = "inner-nav"
        //console.log("makeWheelNav", dest, data, _p);
        child_params = wheel_nav_params;
    } else if (dest == "inner-nav") {
        child_dest = 'inner-subnav'
        child_params = wheel_nav_params;
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
    for (i = 0; i < data.length; i++) {
       //console.log(data[i]);
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
        tilt = degrees + (rotation - degrees) // rotate angle is additive using this formula


    }

    if (dest == 'outer-nav') {
        //console.log("inner child", data[0].children)
        if (data[0].children.length > 0) {
            //   console.log("inner child", data[0].children)
            makeWheelNav("inner-nav", data[0].children, wheel_nav_params)
        }
    }

   // console.log("wheel"+dest,wheels[dest])

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



        wheels[dest].navItems[i].navigateFunction = function () { // Click event for wheel - JSHint doesn't like it when you set events in a loop, but whaddyagonnado? Fuhgetaboudit, the browser doesn't seem to care. and you can't click on the wheel without this.
          

            jQuery("#slider").slider("option", "value", this.data.notch) //positions the slider handle
            setSliderNotch(menus['wheel-menu'].slug_nav[this.data.slug]) // triggers the notch

        }

    }
    menu_raphael[dest] = wheels[dest].raphael // raphael makes it all happen
    
    reposition_screen()

    // console.log(dest,menu_raphael[dest]);
}

function triggerWheelNav(notch) {
    var data_nav = menus['wheel-menu'].data_nav
    var this_notch = data_nav[notch]
    var this_dest = this_notch.dest;

   // console.log("trigger wheel, notch:", this_notch, " | dest:", this_dest);




    

    if (this_dest == 'outer-nav') {
        if (wheels["inner-nav"] != undefined) {
            wheels[this_dest].navigateWheel(this_notch.slice)

        }
        popAWheelie("inner-nav")
        if (this_notch.children.length > 0) {

            makeWheelNav("inner-nav", this_notch.children, wheel_nav_params)
        }





        last_outer_notch = notch;

    } else if (this_dest == 'inner-nav') {

        
       // console.log(last_outer_notch, last_inner_notch,notch,this_notch)
        if (last_outer_notch != this_notch.parent) { //if we go backwards we need to change the parent.
            wheels["outer-nav"].navigateWheel(data_nav[this_notch.parent].slice) //dialback the outer ring to its slice
            makeWheelNav("inner-nav", data_nav[this_notch.parent].children, wheel_nav_params) //receate the inner ring for the parent
            wheels[this_dest].navigateWheel(this_notch.slice) //now we can dial the inner ring where it belongs
            last_outer_notch = this_notch.parent //who's your daddy?

        } else {

            wheels["outer-nav"].navigateWheel(data_nav[this_notch.parent].slice)
            if (wheels["inner-nav"] != undefined) { //if the inner nav exists
               
           // console.log(' != undefined')
                wheels[this_dest].navigateWheel(this_notch.slice)
                if (wheels["inner-subnav"] != undefined) { //and there's an inner subnav
                    wheels["inner-subnav"].raphael.remove() //destroy it

                }

            } else {
               
                     // console.log('  undefined')
                makeWheelNav("inner-nav", data_nav[this_notch.parent].children, wheel_nav_params)
                wheels[this_dest].navigateWheel(this_notch.slice)
            }


            if (this_notch.children.length > 0) { //if there are children 
                makeWheelNav("inner-subnav", this_notch.children, wheel_nav_params) //make a ring for them
            } else {
                popAWheelie("inner-subnav") //blow up the ring that that's there.
            }
        }
        last_inner_notch = notch


    } else if (this_dest == 'inner-subnav') { // onto the third inner ring
        //congratulations outer-ring you're a grandparent.




        if (last_outer_notch != this_notch.grandparent) { //if we go backwards we need to change the parent.
            wheels["outer-nav"].navigateWheel(data_nav[this_notch.grandparent].slice) //dialback the outer ring to its slice
            last_outer_notch = this_notch.grandparent // set the outer notch back so we can go forward again.
        }
        if (last_inner_notch != this_notch.parent) { //who's your daddy?
          //  console.log("where have I gone wrong?", this_notch);
            //receate the inner ring for the parent
            wheels["inner-nav"].navigateWheel(data_nav[this_notch.parent].slice)
            //now we can dial the inner ring where it belongs
            makeWheelNav("inner-subnav", data_nav[this_notch.parent].children, wheel_nav_params) //receate the inner ring for the parent
            wheels["inner-subnav"].navigateWheel(this_notch.slice) //steer to right slice

            last_inner_notch = this_notch.parent //I am your father
        } else {
            if (wheels["inner-subnav"] == undefined) {
                makeWheelNav("inner-subnav", this_notch.children, wheel_nav_params)//birth of the inner ring

            } else {
                wheels[this_dest].navigateWheel(this_notch.slice) //steer inner ring
            }
        }


    }





    last_dest = this_dest;

    //console.log("trigger_wheelNav",this_notch);

}

function popAWheelie(dest) { // this removes the inner rings when you click on navigation and reloads them as necessary
    if (dest == "outer-nav") { // if outer ring
        if (wheels["inner-nav"] != undefined) { //and inner ring exists
            wheels["inner-nav"].raphael.remove(); // destroy it

            if (wheels["inner-subnav"] != undefined) { //if  inner subnav
                wheels["inner-subnav"].raphael.remove() //destoy that too.
            }
        }

    } else if (dest == "inner-nav") { // if you select from the inner nave
        if (wheels["inner-subnav"] != undefined) { //and there's an inner subnav
            wheels["inner-subnav"].raphael.remove() //destroy it
        }
    }
    


}
function initLanguageMenu(container){
    
       // console.log("languages",languages)
        state.language = languages.default;
        var language_menu = "<ul>"
        for(var code in languages){
            if(code != 'default'){
                var active_language = ''
                if (code == state.language)
                {
                    active_language = ' class="active-language"'
                }
                language_menu += '<li id="'+code+'"'+active_language+'>'+languages[code].native+'</li>'

                

            }        
        
        //language_menu += "</ul>"//FIX
    }
 //console.log(container + " ul li")
    jQuery(container).on("click",'li',function(e){
        
        state.language = jQuery(this).attr('id');
         for (var code in languages) {
            if(code == state.language){
                //console.log(code+' add')
                if (code != languages.default) { // not the default language

                    if (languages[code].data == undefined) { // tests to see if this language data is loaded or not
                        //console.log("fetch language for the first time ", code)
                        getStaticJSON(code, setLanguage, code)//load language data. Passing language code as first param
                        
                    } else {
                       // console.log(code + "already loaded ", languages[code].data)
                    
                    }
                }
                state.language = code
                changeLanguage(code)
                jQuery('#'+code).addClass('active-language') // set the class on the language switcher to active
            } else {
                //console.log(code+ ' remove')
                jQuery('#'+code).removeClass('active-language') // remove the active class
            }
         }
    
       // console.log(language_menu,state.language)

    })
    //console.log(language_menu, state.language)
    jQuery(container).html(language_menu)


}
function retreiveML(struct,field,id,language){

    if(struct == 'posts'){
        if (posts[id].languages != undefined){
           
            if (posts[id].languages[language]!= undefined) {
                var translation_id = posts[id].languages[language].id
                return posts[translation_id][field]
            }
        } 
        return posts[id][field]

    }

}


// retrieves language specific data


function setLanguage(data,code) {
    
    languages[code].data = data;
    //console.log(code,"data", data)
    for(var d in data){
        if (data[d].type == 'page' || data[d].type == 'post' || data[d].type == 'project'){
        //console.log(data[d].type, d, data[d].of )
        posts[d] = data[d];
        }
    
    }
    //console.log("set", menus['wheel-menu'].linear_nav);
    changeLanguage(code);
   
}
function changeLanguage(code){
 //console.log("change language", code)
}
if(typeof languages !== 'undefined') {
    initLanguageMenu("#language-menu");
}