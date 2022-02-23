// Custom HTTP library

const http = new easyHTTP;

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(error, posts){
  if(error){
    console.log(error);

  } else{
    console.log(posts);

  }
});


// Get Single Post
http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, post){
  if(error){
    console.log(error);

  } else{
    console.log(post);

  }
});


// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Create Post
http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post){
  if(error){
    console.log(error);

  } else{
    console.log(post);

  }

});


// Update Post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, post){
  if(error){
    console.log(error);
  
  } else{
    console.log(post);
  }

});


// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response){
  if(error){
    console.log(err);

  } else{
    console.log(response);

  }
});