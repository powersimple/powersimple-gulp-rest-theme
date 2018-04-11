
var tags = {},
  categories = {},
  posts = {}

// pass the type in the route
  // param = url arguments for the REST API
  // callback is a dynamic function name 
  // Pass the name of a function and it will return the data to that function

function getREST (route, params, callback, dest) {
  // route =  the type 
  // param = url arguments for the REST API
  // callback = dynamic function name 
  // Pass in the name of a function and it will return the data to that function

  var endpoint = '/wp-json/wp/v2/' + route // local absolute path to the REST API + routing arguments

  jQuery.ajax({
    url: endpoint, // the url 
    data: params,
    success: function (data, textStatus, request) {
      callback(data, dest) // this is the callback that sends the data to your custom function
    },
    error: function (data, textStatus, request) {
      console.log(data.responseText)
    },

    cache: false
  })
}

function setPosts (data, dest) { // special function for the any post type
  var posts = {} // create an empty object
  for (var i = 0;i < data.length;i++) { // loop through the list of data
    posts[data[i].id] = data[i] // adds a key of the post id to address all data in the post as a JSON object
  }
  console.log('posts', posts)

  return posts
}

function setChildCategories (data, dest) {
  for (var i = 0;i < data.length;i++) {
    categories[data[i].id] = data[i]
  }
  console.log('categories', categories)
  displayCategories(dest)
  return data
}

function setTags (data, dest) {
  

  for (var i = 0; i < data.length; i++) {
    tags[data[i].id] = data[i]
  }
  console.log('tags', tags)
  // displayCategories(dest)
  return data
}

function displayCategories (id) {
}


 //Declare three.js variables
	var camera, scene, renderer, stars=[];
	 
	//assign three.js objects to each variable
	function init(){
		 
		//camera
		camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
		camera.position.z = 5;	 

		//scene
		scene = new THREE.Scene();
		 
		//renderer
		renderer = new THREE.WebGLRenderer();
		//set the size of the renderer
		renderer.setSize( window.innerWidth, window.innerHeight );
		 
		//add the renderer to the html document body
		jQuery("#stars").append( renderer.domElement );
	}


	function addSphere(){

				// The loop will move from z position of -1000 to z position 1000, adding a random particle at each position. 
				for ( var z= -1000; z < 1000; z+=20 ) {
		
					// Make a sphere (exactly the same as before). 
					var geometry   = new THREE.SphereGeometry(0.5, 32, 32);
					var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
					var sphere = new THREE.Mesh(geometry, material);
		
					// This time we give the sphere random x and y positions between -500 and 500
					sphere.position.x = Math.random() * 1000 - 500;
					sphere.position.y = Math.random() * 1000 - 500;
		
					// Then set the z position to where it is in the loop (distance of camera)
					sphere.position.z = z;
		
					// scale it up a bit
					sphere.scale.x = sphere.scale.y = 2;
		
					//add the sphere to the scene
					scene.add( sphere );
		
					//finally push it to the stars array 
					stars.push(sphere); 
				}
	}

	function animateStars() { 
				
		// loop through each star
		for(var i=0; i<stars.length; i++) {
			
			star = stars[i]; 
				
			// and move it forward dependent on the mouseY position. 
			star.position.z +=  i/10;
				
			// if the particle is too close move it to the back
			if(star.position.z>1000) star.position.z-=2000; 
			
		}
	
	}

	function render() {
		//get the frame
		requestAnimationFrame( render );

		//render the scene
		renderer.render( scene, camera );
			animateStars();

	}
	
	init();
	addSphere();
	render();
		