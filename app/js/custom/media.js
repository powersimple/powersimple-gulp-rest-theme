function setImage(id,dest,size){
    setMediaText(id,dest)
    //console.log("set image",media[id])
    if(media[id]!=undefined){
                jQuery(dest+"-wrap").attr("visibility",'hidden')

        var full_path = uploads_path + media[id].path // uploads path is in header
        var src = media[id].file; // this defaults to the basic file
    
       

        if (media[id].mime == "image/svg+xml"){// if it's an SVG, let the src pass through

        } else {//for real images

            if(size == 'square'){ // if for a square area
                src = getSquareVersion(media[id].meta.sizes,dest) // get the size version of the sq
             //   console.log(src)
            } else{
                src = media[id].meta.sizes[size] // returns specified size
            }

        }
      
        if(dest == ''){//set path to '' to return the src only
     //   console.log("Src return", full_path + src)
            return full_path+src;
        } else { // if dest is specified, set the src to the id and 
            jQuery(dest).attr("src",full_path+src)
            setMediaText(id,dest)
        }
        jQuery(dest+"-wrap").css("visibility",'visible')

    } else {
     
        jQuery(dest+"-wrap").css("visibility",'hidden')
    }

}


/* GET FEATURED IMAGE BY POST ID */
function setFeatured(id,size){
    if(posts[id] != undefined){
        if(posts[id].featured_media>0){
            return  setImage(posts[id].featured_media,'',size)
        }
    }

}


function wrapTag(tag,str){
    return "<"+tag+">"+str+"</"+tag+">"
}
function setMediaText(id,dest){

    if(media[id]!=undefined){
       // console.log("caption",media[id]);
        jQuery(dest+"-title").html(media[id].title)
        jQuery(dest+"-caption").html(media[id].caption)
        jQuery(dest+"-description").html(media[id].desc)
        jQuery(dest).attr("alt", media[id].alt);
    } else {
        //console.log("clear media text",dest);
        jQuery(dest+"-title").html('')
        jQuery(dest+"-caption").html('')
        jQuery(dest+"-description").html('')
        jQuery(dest).attr("alt", '');
    }
    
}

function getSquareVersion(sizes,dest){

   box = { // object getting the container dimensions
           w: jQuery(dest).parent().width(),
           h: jQuery(dest).parent().height()
   }
  // console.log("box",box)

    if (box.w > 1280 || box.h > 1280) { //over 1500 use large
    //    console.log("sq-lg")
        return sizes['sq-lg']
    } else if ((box.w > 250 || box.h > 250) && (box.w <= 1280 || box.h <= 1280)) {
        console.log("sq-med")
        return sizes['sq-med']
    } else {
      //  console.log("sq-sm")
        return sizes['sq-sm']
    }


} 
function setVideo(id,dest){
    

    if (media[id] != undefined) {

        var full_path = uploads_path + media[id].path // uploads path is in header
        var src = media[id].file; // this defaults to the basic file

        var video = jQuery(dest+' video source').attr("src", full_path+src);
        jQuery(dest).css("display", "block");
    //    console.log("unhide video player")

        jQuery(dest + ' video')[0].load();
        
        video = jQuery(dest + ' video source').attr("src", full_path + src);
    } else {
    //    console.log("no video, hide player")
        jQuery(dest).css("display", "none");
    }
}
function setScreenImages(screen_images,dest,callback){
    var images = []
    for(var i=0;i<screen_images.length;i++){
         images.push({
            "src": setImage(screen_images[i],'',"square"),
            "data": media[screen_images[i]]
         })
       
    }
    circleViewer(dest,images)
  //  callback(dest,images)
    //console.log("setScreenImages", screen_images, dest, images);


}

