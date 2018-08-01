function setImage(id,dest,size){

    if(media[id]!=undefined){
    
        var full_path = uploads_path + media[id].path // uploads path is in header
        var src = media[id].file; // this defaults to the basic file
    
      
        jQuery(dest).attr("alt", alt);


        if(size == 'square'){ // if for a square area
            src = getSquareVersion(media[id].meta.sizes,dest) // get the size version of the sq
            console.log(src)
        } else{
            src = media[id].meta.sizes[size] // returns specified size
        }

        var alt = media[id].alt;
        jQuery(dest).attr("src",full_path+src);
        jQuery(dest).attr("alt", alt);
        setMediaText(id,dest);
        console.log("featured",src,alt);

    }
}
function wrapTag(tag,str){
    return "<"+tag+">"+str+"</"+tag+">"
}
function setMediaText(id,dest){
    console.log("caption",media[id]);
    jQuery(dest+"-title").html(media[id].title)
    jQuery(dest+"-caption").html(media[id].caption)
    jQuery(dest+"-description").html(media[id].desc)
}
function getSquareVersion(sizes,dest){

   box = { // object getting the container dimensions
           w: jQuery(dest).parent().width(),
           h: jQuery(dest).parent().height()
   }

console.log("get rect", box)


 
    if (box.w > 1280 || box.h > 1280) { //over 1500 use large
        return sizes['sq-lg']
    } else if ((box.w > 250 || box.h > 250) && (box.w <= 1280 || box.h <= 1280)) {
        return sizes['sq-med']
    } else {
        return sizes['sq-sm']
    }


} 
function setVideo(id,dest){
    

    if (media[id] != undefined) {

        var full_path = uploads_path + media[id].path // uploads path is in header
        var src = media[id].file; // this defaults to the basic file

        var video = jQuery(dest+' video source').attr("src", full_path+src);
        jQuery(dest).css("display", "block");
        console.log("unhide video player")

        jQuery(dest + ' video')[0].load();
        video = jQuery(dest + ' video source').attr("src", full_path + src);
    } else {
        console.log("no video, hide player")
        jQuery(dest).css("display", "none");
    }
}