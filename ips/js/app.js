(function(){

var app = angular.module('ejemplosApp',[ ]);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
  //http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK
  $scope.geo={};
  
  $http.jsonp('http://restcountries.eu/rest/v1/region/africa')
  .success(function(data){
    $scope.geo=data;
    console.log($scope.geo);
  });

}]);

})();
