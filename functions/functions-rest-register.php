<?php



/*WP REST API CUSTOM ENDPOINTS. RETURNS SPECIFIC THUMBNAIL URL*/ 


/*

	TAGS

*/
add_action( 'rest_api_init', 'register_posts_by_tag' );
 
function register_posts_by_tag() {
 

	register_rest_field( 'tag', 'posts', array(
		'get_callback' => 'get_posts_by_tag',
		'schema' => null,
		)
	);
}
 
function get_posts_by_tag( $object ) {

	$args = array(
    'post_type'      => array('project','post','page'), 
    'posts_per_page' => -1,
    'post_status'    => 'publish',
    'fields' => 'ids',
    'tax_query' => array(
			array(
				'taxonomy' => 'post_tag',
				'field'    => 'term_id',
				'terms'    => $object['id']
			)
		)
	);
	
		
	return get_posts($args); 
}
function getPostsByTag(){
	$all_tags = get_tags();
	$tag_id = array();
	foreach( $all_tags as $tag ) {
		$tag_id[] = $tag->term_id;
	}

	$args = array(
		'numberposts' => 5,
		'tag__in' => $tag_id
	);
	$myposts = get_posts( $args );
}


/*

	CATEGORIES

*/

add_action( 'rest_api_init', 'register_posts_by_category' );
 
function register_posts_by_category() {
 
	register_rest_field( 'category', 'posts', array(
		'get_callback' => 'get_posts_by_category',
		'schema' => null,
		)
	);
}
 

add_action( 'rest_api_init', 'register_category_children' );
 
function register_category_children() {
	//this registers the children field
	register_rest_field( 'category', 'children', array(
		'get_callback' => 'get_cat_children',
		'schema' => null,
		)
	);
}
function get_cat_children( $object ) {// this returns the child categories to the rest API

	$categories=get_categories(
		array( 'parent' => $object['id'],//sends category parent
		'fields' => 'ids'//returns only the id fields
		)
	);
	
		
	return $categories; 
}




function get_posts_by_category( $object ) {

	$args = array(
    'post_type'      => array('post','page','project'), // where post types are represented
    'posts_per_page' => -1,
    'post_status'    => 'publish',
    'fields' => 'ids',
    'tax_query' => array(
			array(
				'taxonomy' => 'category',
				'field'    => 'term_id',
				'terms'    => $object['id']
			)
		)
	);
	
		
	return get_posts($args); 
}

/*
	CUSTOM MENU ROUTING
*/

function get_menu() {
    # Change 'menu' to your own navigation slug.
    return wp_get_nav_menu_items('menu');
}

add_action( 'rest_api_init', function () {
        register_rest_route( 'myroutes', '/menu', array(
        'methods' => 'GET',
		'callback' => 'get_menu',
		'schema' => null
    ) );
} );

 

/* 
	media
*/
add_action( 'rest_api_init', 'register_media_data' );
 function register_media_data() {
 

	register_rest_field( 'attachment', 'data', array(//THE ROUTE IS MEDIA/the type is attachment
		'get_callback' => 'get_media_data'

		)
	);
}
 
function get_media_data( $object ) { //this function builds the data for a lean json packet of media

	$data = array();   
	$url = wp_upload_dir();
	$upload_path = $url['baseurl']."/";
	$file_path = str_replace($upload_path,'',wp_get_attachment_url($object['id']));
	$file = basename($file_path);
	$path = str_replace($file,"",$file_path);
	$mime = get_post_mime_type( $object['id'] );
	$meta  = (array) wp_get_attachment_metadata( $object['id'],true);


	$meta_data = array();
	/*
	
		The meta data properties are only accessible inside a loop for some dumb reason.
	*/
	if(strpos($mime,'mage/') && !strpos($mime,'svg')){ // the i is left of so the strpos returns a postive value
		$meta_data = array();
		foreach($meta as $key => $value){
			if($key == 'width'){
				$meta_data['w'] = $value;
			} else if($key == 'height'){
				$meta_data['h'] = $value;
			} else if($key == 'sizes'){
				$meta_data['sizes'] = array();
				foreach($meta[$key] as $size_name => $props){
					$meta_data['sizes'][$size_name] = $meta[$key][$size_name]['file'];
				}
			}

			//
		}
	} else {
		//let non image mimetypes pass their full metadata
		$meta_data = $meta;
	}
	$data = array(
	
		'alt' => get_post_meta($object['id'],"_wp_attachment_image_alt",true),
		'caption' => wp_get_attachment_caption($object['id']),
		'title'=> get_the_title($object['id']),
		'desc' => wpautop(get_the_content($object['id'])),
		'path'=> $path,
		'file' => $file,
		'mime' => $mime,
		'meta' => $meta_data
		
	);

 return $data;//from functions.php,

}




/* 
	IMAGES
*/
add_action( 'rest_api_init', 'register_thumbnail_url' );
function register_thumbnail_url() {
 

	register_rest_field( ['project','page','post'], 'thumbnail_url', array(
		'get_callback' => 'get_thumbnail_url',
		'schema' => null,
		)
	);
}
 
function get_thumbnail_url( $object ) {
	
 return getThumbnailVersions($object['featured_media']);//from functions.php,
}


/* 
	IMAGE VERSIONS
*/

add_action( 'rest_api_init', 'register_thumbnail_url_versions' );
 function register_thumbnail_url_versions() {
 

	register_rest_field( array('project','page','post'), 'thumbnail_versions', array(
		'get_callback' => 'get_thumbnail_versions',
		'schema' => null,
		)
	);
}
 
function get_thumbnail_versions( $object ) {

 return getThumbnailVersions( $object['id'] );//from functions.php,
}

/*
	Screen Images

*/
add_action( 'rest_api_init', 'register_screen_images' );
 function register_screen_images() {
 

	register_rest_field( array('project','page','post'), 'screen_images', array(
		'get_callback' => 'get_screen_images'

		)
	);
}
 
function get_screen_images( $object ) {

 return get_post_meta($object['id'],"screen_image") ;//from functions.php,
}




/* 
	FEATURED VIDEO
*/

add_action( 'rest_api_init', 'register_featured_video' );
 function register_featured_video() {
 

	register_rest_field( array('project','post','page'), 'featured_video', array(
		'get_callback' => 'get_featured_video',
		'schema' => null,
		)
	);
}
 
function get_featured_video( $object ) {
	$post_id = $object['id'];
	$video_id = get_post_meta($post_id,"featured_video",true);
	$url = wp_upload_dir();
	$path = $url['baseurl']."/";
		
		 
		$video = array(
			"video_id"=>$video_id,
			"video_url"=>get_post_meta($post_id,"featured_video_url",true),
			"video_aspect"=>get_post_meta($post_id,"video_aspect",true),
		);


	return @$video;//from functions.php,
}

/*
	REGISTER POST CATEGORIES		
*/

add_action( 'rest_api_init', 'register_post_cats' );

function register_post_cats() {

		register_rest_field( array('project','post','page'), 'cats', array(
			'get_callback' => 'get_post_cats',
			'schema' => null,
		)
	);
}
function get_post_cats($object){
	$post_id = $object['id'];
	return wp_get_post_categories( $post_id,array( 'fields' => 'ids' ));
}

/*
	REGISTER POST TAGS		
*/
add_action( 'rest_api_init', 'register_post_tags' );

function register_post_tags() {

		register_rest_field( array('project','post','page'), 'tags', array(
			'get_callback' => 'get_post_tags',
			'schema' => null,
		)
	);
}
function get_post_tags($object){
	$post_id = $object['id'];
	return wp_get_post_tags( $post_id,array( 'fields' => 'ids' ));
}



/*WP REST API CUSTOM ENDPOINT. RETURNS SPECIFIC OBJECT OF PROJECT INFO*/ 

	add_action( 'rest_api_init', 'register_project_info' );
		
	function register_project_info() {
		
		register_rest_field( 'project', 'project_info', array(
			'get_callback' => 'get_project_info',
			'schema' => null,
			)
		);
	}
		
		function get_project_info( $object ) {
		$post_id = $object['id'];
			$project_info = array(
				"title"=>get_post_meta($post_id,"project_title",true),
				"url"=>get_post_meta($post_id,"project_url",true),
				"client"=>get_post_meta($post_id,"project_client",true),
				"agency"=>get_post_meta($post_id,"agency",true)
				
			);



		return $project_info;
		}
/*
		/project info endpoint
*/
//without this the widgets and menus options in wp-admin disappear.
if ( function_exists('register_sidebars') ){
    register_sidebar( array(
        'name' => __( 'Footer', 'powersimple' ),
        'id' => 'footer',
        'description' => __( '', 'powersimple' ),
        'before_widget' => '',
	'after_widget'  => '',
	'before_title'  => '',
	'after_title'   => '',
    ) );
}


?>