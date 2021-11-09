function getUserRepos(user){
    var apiUrl = "https://api.github.com/users/"+user+"/repos";
   var response = fetch(apiUrl).then(function(response){
       response.json().then(function(data){
            for (var i = 0; i < data.length; i++) {
               console.log(data[i].html_url);
        // Set the text of the list element to the JSON response's .html_url property
        

        
      }
          
       });
   });
   console.log("outside");
}

getUserRepos("Twitter");
