angular.module('app.controllers', [])
  
.controller('profileCtrl', function($scope) {
	
})

.controller('settingsCtrl', function($scope, $state, $cordovaGeolocation) {

var options = {timeout: 10000, enableHighAccuracy: true};
 
    $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
            var marker = new google.maps.Marker({
                 map: $scope.map,
                 animation: google.maps.Animation.DROP,
                 position: latLng,
                 icon:'http://i.imgur.com/fDUI8bZ.png'
            });
 
            var infoWindow = new google.maps.InfoWindow({
                content: "Here You Are.!"
            });
 
            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open($scope.map, marker);
            });

            var marker = new google.maps.Marker({
                 map: $scope.map,
                 animation: google.maps.Animation.DROP,
                position: {lat: 28.590839, lng:77.305710 },
                 icon:'http://i.imgur.com/fDUI8bZ.png'
            });


            var marker = new google.maps.Marker({
                 map: $scope.map,
                 animation: google.maps.Animation.DROP,
                position: {lat: 28.590581, lng:77.306073 },
                 icon:'http://i.imgur.com/fDUI8bZ.png'
            });


 
 
           
       });
    }, function(error){
         console.log("Could not get location");
  });

 
})