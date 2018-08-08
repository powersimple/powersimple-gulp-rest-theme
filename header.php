<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
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
</script>
</head>


<body>
<div id="stars"></div>

