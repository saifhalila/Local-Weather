
 
function getLocation() {

    if (navigator.geolocation) {/*Using HTML Geolocation*/
        navigator.geolocation.getCurrentPosition(function (position) {
    var latitude= position.coords.latitude; 
    var longitude= position.coords.longitude;
    /*Free Code Camp Weather API Pass-through*/
    $.ajax({url: "https://fcc-weather-api.glitch.me/api/current?lon="+longitude+"&lat="+latitude,
    success: function(r){
     $(".masthead h1").html(r.name);
     $(".content #temperature").text(Math.round(r.main.temp)+"° C");
     $(".content #description").text(r.weather[0].description);
     $(".content #icon").attr("src",r.weather[0].icon);
     $(".content #icon").attr("alt",r.weather[0].description);
     $(".content .temperature #CF").click(function() {
          $(".content .temperature #temperature").toggleClass('celcius');
          $(".content .temperature #temperature").toggleClass('fahrenheit');

          if ($(".content .temperature #temperature").hasClass('celcius')) {
            $(".content .temperature #temperature").text(function (){
              var fahrenheit = Math.round((r.main.temp) *1.8 + 32);
              return fahrenheit + "° F";
            });
            return;
          }
              $(".content .temperature #temperature").text(function (){
          return Math.round(r.main.temp)+"° C";
              });
              });

      }
  });
    
});

  } 
};



$(document).ready(function () 
  
  {
getLocation();
    
});
