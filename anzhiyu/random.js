var posts=["2024/11/26/hello-world/","2024/11/26/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };