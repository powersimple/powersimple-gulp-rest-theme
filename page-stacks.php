<?php
get_header(); ?>
<header>
  <div id="logo">
    <?php 
    include "svg/powersimple.svg";
  ?>
  </div>
</header>
<div id="main" role="main">



<nav class="circular-menu" id="circle-nav">

  <div class="circle" id="circle-nav">
    <a href="" class="">a</a>
    <a href="" class="">b</a>
    <a href="" class="">c</a>
    <a href="" class="">c</a>
    <a href="" class="">c</a>
    <a href="" class="">f</a>
    <a href="" class="">g</a>
   
  </div>
  
  <a href="" class="menu-button fa fa-bars fa-2x"></a>

</nav>





<div id="screen" class="phi-centered">



 

<div id="video-mask">
  <video id="video" autoplay="autoplay" muted="muted" preload="auto" loop="loop">
    <source src="/wp-content/uploads/2018/05/C21-edit.mp4" type="video/mp4">
</video>
<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
  <defs>
    <mask id="mask" x="0" y="0" width="528.934px" height="394.314px" >
      <rect x="0" y="0" width="100%" height="100%"/>
      <circle class="cls-1" cx="500" cy="499" r="475"/>
    </mask>
  </defs>
  <rect x="0" y="0" width="100%" height="100%"/>
</svg>

</div>

 <div id="link-home" class="button-ring" style=""><?=buttonLink(7)?></div>

  </div>
   <div id="outer-ring" class="phi-centered">
  <?php 
    include "svg/outerring.svg";
  ?>
</div>
</div><!--main-->

<?php
get_footer(); ?>
