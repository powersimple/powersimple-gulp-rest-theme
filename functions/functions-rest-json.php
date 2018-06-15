<?php
    /*Optimize page loads by rendering restapi queries to static json files and save them in app/json/*/
/*
  ===BEWARE OF REST API PAGINATION AND SORT ORDER!====
Pagination:
Keep in mind, the rest API has a default of 16 records, so you have to set the parameter
&per_page=, and the limit is 100. If you need to return more than 100 results from any of the queries below
you have to paginate the results
Otherwise, the results you want, may not be the results it returns.
Sort: For sanity's sake, it's best that you sort posts by ID, so when inspecting your endpoint, they are in order
Hence, the REST_post_filter variable below.
*/
    function refreshJSON(){

        $REST_post_filter = "filter[orderby]=ID&order=asc&per_page=100";
        $REST_CONFIG =array(
            "posts"=>"fields=id,type,title,content,slug,excerpt,thumbnail_url,video,type&".$REST_post_filter,
            "pages"=>"fields=id,type,title,content,slug,excerpt,thumbnail_url,project_info,thumbnail_versions,featured_video,type&".$REST_post_filter,
            "project"=>"fields=id,type,title,content,slug,excerpt,thumbnail_url,project_info,thumbnail_versions,featured_videotype&".$REST_post_filter,
            "categories"=>"fields=id,name,count,slug,description,category_posts,children",
            "tags"=>"fields=id,name,slug,tag_posts",
            "menus"=>"menus"
        );

        $url_path = "http://".$_SERVER['HTTP_HOST']."/wp-json/wp/v2/";
        $server_path = get_template_directory()."/app/json/";
        
        foreach($REST_CONFIG as $key => $value){
           $url = $url_path.$key."?".$value;
           $server = $server_path.$key.".json";
           writeJSON($url,$server);
        }

       //phpinfo();
    //  print $posts_path = "http://".$_SERVER['HTTP_HOST']."/wp-json/wp/v2/posts?fields=id,type,title,content,slug,excerpt,thumbnail_url,project_info,thumbnail_versions,featured_video,type&filter[orderby]=ID&order=asc&per_page=100";
   //   print "<br>".$file_path = get_template_directory()."/app/json/posts.json";
      //get_template_directory();
      //writeJSON($posts_path,$file_path);
    }
    function writeJSON($posts_path,$file_path){
        $data = file_get_contents($posts_path);
        $handle = fopen($file_path, 'w') or die('Cannot open file:  '.$file_path);
        fwrite($handle, $data);
        fclose($handle);
    }
    add_action( 'save_post', 'refreshJSON');// this will run if you save a post.
?>