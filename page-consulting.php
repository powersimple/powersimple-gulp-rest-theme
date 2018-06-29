<!DOCTYPE html>
<html>
<head>
  <!-- Kenneth Kufluk 2008/09/10 -->
  <title>js-mindmap demo - JavaScript Mindmap</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>


  <!-- jQuery -->

<?php wp_head(); ?>
</head>
<body class="mindmapnav">
<div id="mindmap">
  <ul id="tree">
    <li><a href="http://kenneth.kufluk.com/blog/">Kenneth</a>
      <ul>
        <li><a href="http://twitter.com/kennethkufluk" target="_blank" class="icon twitter">Twitter</a></li>
        <li><a href="http://www.linkedin.com/in/kennethkufluk" target="_blank" class="icon linkedin">LinkedIn</a></li>
        <li><a href="http://www.facebook.com/kenneth.kufluk" target="_blank" class="icon facebook">Facebook</a></li>
        <li><a href="http://feeds.feedburner.com/KennethKufluk" target="_blank" class="icon rss">RSS Feed</a></li>
    
        <li><a href="http://kenneth.kufluk.com/blog/">Blog categories</a>
          <ul>
            <li><a href="http://kenneth.kufluk.com/blog/blog/general/" title="View all posts filed under General">General</a></li> 
            <li><a href="http://kenneth.kufluk.com/blog/blog/personal/" title="View all posts filed under Personal">Personal</a></li> 
            <li><a href="http://kenneth.kufluk.com/blog/blog/physics/" title="View all posts filed under Physics &amp; Astronomy">Physics &amp; Astronomy</a></li> 
            <li><a href="http://kenneth.kufluk.com/blog/blog/projects/" title="View all posts filed under Projects">Projects</a></li> 
            <li><a href="http://kenneth.kufluk.com/blog/blog/rant/" title="View all posts filed under Ranting">Ranting</a></li> 
            <li><a href="http://kenneth.kufluk.com/blog/blog/work/" title="View all posts filed under Work">Work</a></li> 
          </ul>
        </li>
        <li><a href="http://kenneth.kufluk.com/blog/">Pages</a>
          <ul>
            <li><a href="http://kenneth.kufluk.com/blog/about/" title="About Kenneth">About Kenneth</a></li> 
            <li><a href="http://kenneth.kufluk.com/blog/work/" title="Employment">Employment</a></li> 
            <li><a href="http://kenneth.kufluk.com/blog/experiments/" title="Experiments">Experiments</a></li> 
          </ul>
        </li>
        <li><a href="http://kenneth.kufluk.com/blog/">Friends</a>
          <ul>
            <li><a href="http://coderonfire.com/" title="Coder on Fire" rel="friend met co-worker colleague neighbor">Andrew Mason</a></li> 
            <li><a href="http://www.wait-till-i.com" title="Wait till I come!" rel="met">Christian Heilmann</a></li> 
            <li><a href="http://www.danwebb.net" rel="friend met" title="Godlike JavaScript Guru">Dan Webb</a></li> 
            <li><a href="http://www.sitedaniel.com" rel="friend met co-worker colleague neighbor" title="Flash Whizz">Daniel Goldsworthy</a></li> 
            <li><a href="http://dean.edwards.name" rel="friend met" title="Godlike JavaScript Guru">Dean Edwards</a></li> 
            <li><a href="http://www.dotsonline.co.uk" title="My auntie&#8217;s music shop.">Dot&#8217;s Shop</a></li> 
            <li><a href="http://simonwillison.net/" title="PHP, Python, CSS, XML and general web development.">Simon Willison</a></li> 
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  </div>
<script>
// load the mindmap
jQuery(document).ready(function() {
  // enable the mindmap in the body
  jQuery('#mindmap').mindmap();
  var map_data;
  // add the data to the mindmap
  var root = jQuery('#mindmap>ul>li').get(0).mynode = jQuery('#mindmap').addRootNode(jQuery('#mindmap>ul>li>a').text(), {
    href:'/',
    url:'/',
    onclick:function(node) {
      jQuery(node.obj.activeNode.content).each(function() {
        this.hide();
      });
    }
  });
  jQuery('#mindmap>ul>li').hide();
  var addLI = function() {
    var parentnode = jQuery(this).parents('li').get(0);
    if (typeof(parentnode)=='undefined') parentnode=root;
      else parentnode=parentnode.mynode;
    
    this.mynode = jQuery('#mindmap').addNode(parentnode, jQuery('a:eq(0)',this).text(), {
//          href:jQuery('a:eq(0)',this).text().toLowerCase(),
      href:jQuery('a:eq(0)',this).attr('href'),
      onclick:function(node) {
        jQuery(node.obj.activeNode.content).each(function() {
          this.hide();
        });
        jQuery(node.content).each(function() {
          this.show();
        });
      }
    });
    jQuery(this).hide();
    map_data = jQuery('>ul>li', this).each(addLI);
  };
  jQuery('#mindmap>li>ul').each(function() { 
    jQuery('>li', this).each(addLI);
  });
 //console.log(map_data);
});  
</script>
<?php wp_footer(); ?>
</body>
</html>
