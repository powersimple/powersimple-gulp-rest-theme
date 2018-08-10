function setRelated(post) {

    /*
  
      This is fun! This sets the related variable as an object of taxonomies, containing an array of related post ids sorted by
  
    */
  
    var this_post = null,
    this_cat = null //defaults
  
    related = {} // create empty object
    related.cats = {}//vessel for related categories
    related.tags = {}//vessel for related tags 
    //if you put in another taxonomy, add it to the loop above.
  
    var local_data =  {
        'cats':categories,
        'tags':tags
      }//put taxonomies into object using alias in post
  
  
    /*
      ready for a ridiculous triple summersault? Let's do this!
      You see, the nested loop for related content will work the same for categories and tags, so why not put an outer loop of the local data to loop through them, so if this function changes, it does so once. 
    */
    for(var r in related){ //loop through related taxonomy aliases to get name dynamically
      // r is the taxonomy alias =>string
  
      for (var t = 0; t < post[r].length; t++) { // loop through array of taxonomies of the post object that got passed in.
        //t is the array key of the taxonomy =>int
       // console.log(r,posts[r])
        for (var p = 0; p < local_data[r][post[r][t]].posts.length; p++) {
          //p is the post_id of the related post from the taxonomy
          this_post = local_data[r][post[r][t]].posts[p] // id of post in question
          if(post.id != this_post){ // exclude self
            if(posts[this_post] != undefined){ //proceed if post exists
              var type = posts[this_post].type // set the post type locally
              if(related[r][type]==undefined){ // if this related post type doesn't have an object yet
                related[r][type] = []//then create an array to stuff the posts ids in 
  
              }
              related[r][type].push(this_post); // by using an object by id prevents duplicates, the post id can be used
  
  
            }
  
          }
        }
      }
    }
  
    delete local_data // no reason keeping the aliased taxonomies in memory
    
    displayRelated()
     

      //console.log("related",related)
      
  }
  function displayRelated(){
    jQuery("#related").html('');
    rel_list = ''
    for(var tax in related){ // loop through Taxonomies
        rel_list += '<ul class="'+tax+'">'//
        for(var type in related[tax]){
            for(var p=0;p< related[tax][type].length;p++ ){
                post_id = related[tax][type][p]
                var bg_image = '';
                var src = setFeatured(post_id,"thumbnail");
                //console.log("set related",src,post_id);
                if(src !=''){
                   
                    bg_image = ' style="background-image:url('+src+')"'
                }
                rel_list += '<li '+bg_image+' class="ui-widget '+type+'" data-rel="'+post_id+'">'
                   // console.log("related post",post_id)
                    rel_list += post_id
                rel_list += '</li>'

            }
        }
        rel_list += '</ul>'
    }
    jQuery("#related").html(rel_list);

  }



  function tipHoverContent(id){
    //console.log("hover tip",id)
    var tipContent = '';
    if(posts[id].type == 'project'){
        tipContent +='<span class="hover-title">'+posts[id].project_info.client+'</span>' 
        if(posts[id].project_info.agency != ''){
        tipContent +='<span class="hover-sub">'+posts[id].project_info.agency+'</span>' 
        }
    }
    return tipContent
  }
  function selectRelatedPost(id){

        if(posts[id].type == 'project'){
            setSliderNotch(1)//Projects hardset to notch one.
            console.log("projects ",menus['projects'])
        }

     
  



    }


  ( function($) {
   



    $( document ).tooltip({
      items: "[data-rel]",// tootip for related data
    //  tooltipClass:'rel-tip',
      content: function() {
        var id = $(this).data('rel') ;
        var tip = ''
        var bg_image = '';
        var src = setFeatured(id,"thumbnail");
        if(src !=''){
            bg_image = ' style="background-image:url('+src+')"'
        }

        $(this).on("click",function(){
            selectRelatedPost(id);

        }).on("mouseover",function(){
        //    console.log("related"+id,"mouseover");
        }).on("mouseout",function(){
        //    console.log("related"+id,"mouseoout");
        }).on("mousedown",function(){
        //    console.log("related"+id,"mousedown");
        }).on("mouseup",function(){
        //    console.log("related"+id,"mouseup");
        });

        tip += '<div class="rel-tooltip"'+bg_image+'>'

        tip += tipHoverContent(id)
        
        tip += '</div>'
       
         return tip
      }
    });
  } )(jQuery);