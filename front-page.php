<?php
get_header(); ?>
<header>
  <div id="logo">
    <?php 
    include "svg/powersimple.svg";
  ?>
  </div>
  <div id="laurel">
   <?=get_bloginfo('description')?>
  </div>
</header>
<canvas id="matrix"></canvas>

<div id="main" role="main">

    
    


<div id="screen" class="phi-centered">


<span class="ripple"></span>
 

  <div id="circle-mask">
      <!---->
      <div id="bg-video">
          <video id="video" autoplay="autoplay" muted="muted" preload="auto" loop="loop">
              <source src="#" type="video/mp4">
          </video>
      </div>

    <article id="article" class="slideshow">
        <!--the slideshow gets injected here -->
    </article>
    
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

  </div>
  <nav id="outer-ring"><!-- outer nav ring -->
      <div id="outer-nav" class="wheelNav"></div>
    </nav>
    <nav id="inner-ring"><!-- inner nav ring -->
      <div id="inner-nav" class="wheelNav"></div>
    </nav>
    <nav id="inner-subring"><!-- inner subnav ring -->
      <div id="inner-subnav" class="wheelNav"></div>
    </nav>
</div><!--main-->
<div id="slider"></div>
<?php
get_footer(); ?>
