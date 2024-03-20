document.getElementById('facebookBtn').addEventListener('click', function() {
    window.fbAsyncInit = function() {
        FB.init({
          appId      : '7590829360956820',
          cookie     : true,
          xfbml      : true,
          version    : 'v12.0'
        });
          
        FB.AppEvents.logPageView();   
          
      };
    
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
       console.log()
    //window.location.href = 'https://connect.facebook.net/en_US/sdk.js';
    //alert('Aquí iría la lógica de autenticación con Facebook');
});

function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
      console.log(response);
    });
  }