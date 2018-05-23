<?php 
    function video_meta( $meta_boxes ) {
        $prefix = '';

        $meta_boxes[] = array(
            'id' => 'featured_video',
            'title' => esc_html__( 'Featured Video', 'ps-video' ),
            'post_types' => array( 'page','post','project' ),
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




    //Embed Video  Shortcode

    function video_shortcode( $atts, $content = null ) {
        //set default attributes and values
        $values = shortcode_atts( array(
            'url'   	=> '#',
            'className'	=> 'video-embed',
            'aspect' => '56.25%'
        ), $atts );
        
        ob_start();
        ?>
        <div class="video-wrapper">
            <iframe src="<?=$values['url']?>" class="<?=$values['className']?>"></iframe>
        </div> 
        <?php
        return ob_get_clean();
        //return '<a href="'. esc_attr($values['url']) .'"  target="'. esc_attr($values['target']) .'" class="btn btn-green">'. $content .'</a>';
    
    }
    add_shortcode( 'embed_video', 'video_shortcode' );
?>