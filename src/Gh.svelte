<!-- <script>

  let posts = [];
 
  onMount(async () => { 
    posts = await getdata();
  }
 
  const getdata = async ()=>{
  // set cache lifetime in seconds
    var cachelife = 5000; 
   //get cached data from local storage
    var cacheddata = localStorage.getItem('posts'); 
    if(cacheddata){
     cacheddata = JSON.parse(cacheddata);
     var expired = parseInt(Date.now() / 1000) - cacheddata.cachetime > cachelife;
      }
    //If cached data available and not expired return them. 
    if (cacheddata  && !expired){
     return cacheddata.posts;
    }else{
    //otherwise fetch data from api then save the data in localstorage 
     const res = await fetch(apiBaseUrl);
     var posts = await res.json();
     var json = {data: posts, cachetime: parseInt(Date.now() / 1000)}
     localStorage.setItem('posts', JSON.stringify(json));
     return posts;
    }
  }
</script> -->


