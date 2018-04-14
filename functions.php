<?php





require_once("functions/functions-enqueue.php");

require_once("functions/functions-portfolio.php");


add_action( 'init', 'projects_to_cpt' );
function projects_to_cpt() {
    $args = array(
      'public'       => true,
      'show_in_rest' => true,
      'label'        => 'project'
    );
    register_post_type( 'project', $args );
}
function video_meta( $meta_boxes ) {
	$prefix = '';

	$meta_boxes[] = array(
		'id' => 'featured_video',
		'title' => esc_html__( 'Featured Video', 'ps-video' ),
		'post_types' => array( 'project' ),
		'context' => 'side',
		'priority' => 'default',
		'autosave' => false,
		'fields' => array(
			array(
				'id' => 'featured_video',
				'type' => 'video',
				'name' => esc_html__( 'Video', 'ps-video' ),
				'max_file_uploads' => 4,
			),
			array(
				'id' => $prefix . 'featured_video_url',
				'type' => 'url',
				'name' => esc_html__( 'Featured Video URL', 'ps-video' ),
			),
			array(
				'id' => $prefix . 'video_aspect',
				'name' => esc_html__( 'Video Aspect', 'ps-video' ),
				'type' => 'select',
				'placeholder' => esc_html__( 'Select an Item', 'ps-video' ),
				'options' => array(
					'hd' => '16:9',
					'sd' => '4:3',
				),
				'std' => 'hd',
			),
		),
	);

	return $meta_boxes;
}
add_filter( 'rwmb_meta_boxes', 'video_meta' );
function ps_metabox( $meta_boxes ) {
	$prefix = 'psmetabox-';

	$meta_boxes[] = array(
		'id' => 'project_info',
		'title' => esc_html__( 'Project Info', 'ps_metabox' ),
		'post_types' => array( 'project' ),
		'context' => 'side',
		'priority' => 'default',
		'autosave' => false,
		'fields' => array(
			array(
				'id' => $prefix . 'project_url',
				'type' => 'url',
				'name' => esc_html__( 'Project URL', 'ps_metabox' ),
			),
			array(
				'id' => $prefix . 'project_title',
				'type' => 'text',
				'name' => esc_html__( 'Project Title', 'ps_metabox' ),
            ),
            array(
				'id' => $prefix . 'project_client',
				'type' => 'text',
				'name' => esc_html__( 'Client', 'ps_metabox' ),
            ),
            array(
				'id' => $prefix . 'project_agency',
				'type' => 'text',
				'name' => esc_html__( 'Agency', 'ps_metabox' ),
			),
			array(
				'id' => $prefix . 'project_era',
				'type' => 'text',
				'name' => esc_html__( 'Era', 'ps_metabox' ),
            ),
          
		),
	);

	return $meta_boxes;
}
add_filter( 'rwmb_meta_boxes', 'ps_metabox' );
		  



/* OLD RELIABLE!
	HASN'T CHANGED IN YEARS
		RETURNS URL BY ID, AND OPTIONAL SIZE */
function getThumbnail($id,$use="full"){
		global $post;
		
		
		$img = wp_get_attachment_image_src( get_post_thumbnail_id( $id), $use);
		if($img[0] !=""){
    		 return $img[0];
		} 
}





/* 	PASS ID AND IT RETURNS OBJECT OF SIZES BY URL */
function getThumbnailVersions($id){
		global $post;
		$thumbnail_versions = array(); //creates the array of size by url
		foreach(get_intermediate_image_sizes() as $key => $size){//loop through sizes
			$img = wp_get_attachment_image_src( get_post_thumbnail_id( $id),$size);//get the url 
			if($img[0] !=""){
				$thumbnail_versions[$size]=$img[0];//sets size by url
			} 
		}
		return $thumbnail_versions;
	
}












function display_videos($videos){
		ob_start();
	$default_video = $videos[0]['video_url'];
	$default_video_title = $videos[0]['post_title'];
	
	?>
	<div id="videos">
			<div id="video-player">
			
				<iframe src="<?=$default_video?>?rel=0&fs=1" scrolling="no" frameborder="0" id="video"  allowfullscreen></iframe>
			</div>
		<p id="video-title-display"><?=$default_video_title?></p>
			<ul id="video-playlist">
		<?php
		foreach($videos as $key => $value){
			extract($value);
				$title_clean = str_replace('"','',$post_title);
				$title_clean = str_replace("'","\'",$title_clean);
				
			?>
              <li><a href="#" onMouseover="displayTitle('Watch: <?=$title_clean?>');" onMouseOut="" onClick="play('<?=$video_url?>?rel=0', '<?=$title_clean ?>'); return false;" title="<?=$title_clean ?>"><img src="<?=$src?>" alt="<?=$title_clean?>"></a><span class="video-label"><?=$post_title?></span></li>
		<?php
		}
		?>
		</ul>
	</div>
	<?php
	
	return ob_get_clean();	
}
?>