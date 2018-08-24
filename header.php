<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<link rel="profile" href="http://gmpg.org/xfn/11">

<?php wp_head(); 
    $url = wp_upload_dir();
?>
<script>
    // Wordpress PHP variables to render into JS at outset.
    var active_id = <?=$post->ID?>;
    var active_object = "<?=$post->post_type?>";
    var home_page = <?=get_option( 'page_on_front' )?>;
    var site_title = "<?=get_bloginfo('name')?>";
    var json_path = "<?=get_stylesheet_directory_uri()?>/app/json/";
    var uploads_path =  "<?=$url['baseurl']?>/";

    <?php
         if(function_exists('icl_object_id')){
            global $sitepress;
            print "var languages = ".json_encode(getLanguageList());
           

         }
    ?>

</script>
</head>


<body>
<header>

<div id="laurel">
 <?=get_bloginfo('description')?>
</div>
  <div id="logo">
  <?php 
  include "svg/powersimple.svg";
?>
</div>
</header>
<canvas id="matrix"></canvas>
<div id="stars"></div>

