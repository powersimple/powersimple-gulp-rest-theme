<?php
get_header(); ?>


<main id="main" role="main">
  
 
 
  <!--<canvas id="laser"></canvas>-->

  <div id="language-menu"></div>
<div class="laser-cube">
  <div class="div-1 layer"></div>
  <div class="div-2 layer"></div>
  <div class="div-3 layer"></div>
  <div class="div-4 layer"></div>
  <div class="div-5 layer"></div>
</div>

    <div id="featured"></div>
    <script type="x-template" id="featured-template">
      <div class="image-header image-caption">
          <div class="title"></div>
          <div class="caption"></div>
      </div>
        
      <div class="image-container"><img class="image" src="" alt="" ></div>
      <div class="image-footer image-caption">
        <div class="description"></div>
      </div>
    </script>
    <div id="project-info"></div>
    <script type="x-template" id="project-info-template">
      <div class="project-info">
          <div class="client"></div>
         </div> 
        
      <div class="project-url"></div>
      <div class="project-info">
        <div class="agency"></div>
        <div class="era"></div>
      </div>
    </script>

   


    <div id="featured-image-wrap">
      <div id="featured-image-header" class="featured-caption">
        <div id="featured-image-title" ></div>
        <div id="featured-image-caption" ></div>
      </div>
     
      <div id="featured-image-container"><img id="featured-image" src="<?=@$src?>" alt="" ></div>


      <div id="featured-image-footer" class="featured-caption">
        <div id="featured-image-description"></div>
      </div>
  </div>
    


<div id="screen" class="phi-centered">


<span class="ripple"></span>

  <div id="circle-mask">
 
      <div id="screen-image-wrap">
        <div id="screen-image-header" class="screen-caption">
          <div id="screen-image-title" ></div>
          <div id="screen-image-caption" ></div>
        </div>
        <div id="screen-image-container"></div>
          <div id="screen-image-footer" class="screen-caption">
          <div id="screen-image-description"></div>
        </div>
  </div>



 

      <div id="bg-video">
          <video id="video" controls="true " autoplay="autoplay" muted="muted" preload="auto" loop="loop">
              <source src="#" type="video/mp4">
          </video>
          
      </div>

    <article id="wheel-menu-content" class="slideshow"></article>
    <article id="projects-content" class="slideshow"></article>
     <!-- -->
      <!--masks contents above this svg-->
     
      <svg id="circle-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
      <defs>
          <mask id="mask" x="0" y="0" width="528.934px" height="394.314px" >
          <rect x="0" y="0" width="100%" height="100%"/>
          <circle class="cls-1" cx="500" cy="499" r="475"/>
          </mask>
      </defs>
      <rect x="0" y="0" width="100%" height="100%"/>
      </svg>

  </div><!-- outer nav ring -->
    <nav id="outer-ring">
      <div id="outer-nav" class="wheelNav"></div>
    </nav>
    <nav id="inner-ring"><!-- inner nav ring -->
      <div id="inner-nav" class="wheelNav"></div>
    </nav>
    <nav id="inner-subring"><!-- inner subnav ring -->
      <div id="inner-subnav" class="wheelNav"></div>
    </nav>
    <section id="related"></section>

<div id="slider-wrap">
  <div id="up-arrow" class="arrow"><?php include "svg/arrow-key.svg";?></div>
    <div id="slider"></div>
  <div id="down-arrow" class="arrow"><?php include "svg/arrow-key.svg";?></div>
</div>
</main><!--main-->
    


<?php
get_footer(); ?>
