var app = angular.module("myApp");


app.controller('myCtrl', function($scope) {
   $scope.getQuote = function() {
     var selection = Math.floor(Math.random()*($scope.quotes.length));
       console.log($scope.quotes[selection]);
       return $scope.quotes[selection];
   };
// app.controller('myCtrl', function($scope, $http){
// 	$scope.list;

// 	 $http.jsonp('').success(function (data) {
      
//     });
	
// 	jsonFlickrFeed = function(data){
// 	$scope.items = data.items;
// 	 console.log($scope.items);
// 	}
  
// });
