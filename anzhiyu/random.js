var posts=["2024/11/26/test/","2024/11/26/hello-world/","2024/11/27/减肥日记/","2024/11/26/测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };