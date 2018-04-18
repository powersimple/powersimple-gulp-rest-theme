
                     <?php
/**The template for The Portfolio Page*/

get_header(); ?>


	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

      <div id="portfolio">

			  <div id="portfolio-menu" class="clearfix">
          <div id="portfolio-nav">
            <nav class="nav nav--active" id="category-menu"></nav>
        </div>

        <div id="portfolio-page">
          <div id="project-nav"></div>
          <div id="project-detail"></div>


        <?php
      //    require_once ('app/includes/reverly.php');
        require_once "projects.php";
        ?>

      </div>

          
        </div>
<script>

  jQuery(document).ready(function () {
    // retrieves all posts, with fields from REST API
  
    


  })



</script>

		</main><!-- #main -->
	</div><!-- #primary -->


<?php get_footer();
