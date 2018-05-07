<?php
    function mychildtheme_enqueue_styles() {
   $parent_style = 'twentyseventeen';

    //wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'powersimple',get_stylesheet_directory_uri() . '/style.css');
        //array( $parent_style )
   
    }
    add_action( 'wp_enqueue_styles', 'mychildtheme_enqueue_styles' );

    function wpb_adding_scripts() {
   
    wp_register_style('bootstrap', '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.0/css/bootstrap.min.css', null,'1.1', true); 
    wp_enqueue_style('bootstrap');


    wp_register_script('three', '//cdnjs.cloudflare.com/ajax/libs/three.js/r71/three.min.js', null,'1.1', true); 
    wp_enqueue_script('three');
    


    wp_register_script('scroll-magic', '//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js', null,'1.1', true); 
    wp_enqueue_script('scroll-magic');
    wp_register_script('scroll-magic-debug', '//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js', null,'1.1', true); 
    wp_enqueue_script('scroll-magic-debug');
    wp_register_script('three', '//cdnjs.cloudflare.com/ajax/libs/three.js/r71/three.min.js', null,'1.1', true); 
    wp_enqueue_script('three');
    


    
    //vendor is the stylesheet rendered 
    wp_register_script('vendor',get_stylesheet_directory_uri() . '/vendor.min.js', array('jquery'),1.1, true); 
    wp_enqueue_script('vendor');

    wp_register_script('main',get_stylesheet_directory_uri() . '/main.js', array('jquery'),rand(100000,999999), true); 
    wp_enqueue_script('main');
    }
    
    add_action( 'wp_enqueue_scripts', 'wpb_adding_scripts' );  

?>