
                     <?php
/**The template for The Portfolio Page*/

get_header(); ?>

<div class="wrap">
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

      <div id="portfolio-wrap">
			  <div id="portfolio-menu" class="clearfix">
          <div id="portfolio-nav">
            <nav class="nav nav--active">
                                                <!--
                            <ul class="nav__list">
                            
                            
                              <li class="nav__item">
                                <a href="" class="nav__link  nav-link-active">
                                  <div class="nav__thumb" data-letter="T2"></div>
                                  <p class="nav__label">All portfolio</p>
                                </a>
                              </li>
                            </ul>
                            -->

          </nav>
        </div>
        <div class="portfolio-page">
            <!--
              <section class="section color1" data-letter="T2">
                <article class="section__wrapper">
                  <h2 class="section__title">Workflow</h2>
              
                
                </article>
              </section>

            
            
            </div>

                  -->
        </div>
<script>
  jQuery(document).ready(function () {
    // retrieves all projects, with fields from REST API
    getREST('project', 'fields=id,title,conent,thumbnail_url,project_info,thumbnail_versions,featured_video', setPosts)// get the projects;
    // retrieves all categories for the development category
    getREST('categories', 'parent=19&fields=id,name,count,slug', setChildCategories) // returns the children of a specified parent category
     // retrieves all categories for the development category
    getREST('tags', 'fields=id,name', setTags) // returns the tags
  })
</script>

		</main><!-- #main -->
	</div><!-- #primary -->
</div><!-- .wrap -->

<?php get_footer();
