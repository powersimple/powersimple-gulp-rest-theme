<?php



require_once("functions/functions-metabox.php");

require_once("functions/functions-enqueue.php");

require_once("functions/functions-portfolio.php");



function buttonLink($id){
	ob_start();
	?>
		<div id="button-container">
			<div id="button_card" class="shadow">
				<div class="front face">
					<img src="/wp-content/uploads/2018/05/powersimple-emblem-01.svg"/>
				</div>
				<div class="back face">
					<h2>Home</h2><br/>
					<p style="font-weight: 100; margin-top: -40px;">This isn't my logo, but it's a nice one to feature and show off this CSS!</p>
				</div>
			</div>
		</div>

	<?php
	return ob_get_clean();	

}



add_action( 'init', 'projects_to_cpt' );
function projects_to_cpt() {
    $args = array(
      'public'       => true,
      'show_in_rest' => true,
      'label'        => 'project'
    );
    register_post_type( 'project', $args );
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