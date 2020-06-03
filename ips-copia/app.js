(function(){

    var app= angular.module('prueba',[ ]);
    

    app.controller('myServiceCtrl',['$scope','$http', 
    function ($scope, $http) {

        console.log("sdf");
        $scope.doJSONPRequest = function () {           
        //var url="http://localhost:49220/api/lotes/getLotes";
        var url = "http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=JSON_CALLBACK";
        
        $http.jsonp(url)       
        .success(function (data, status, headers, config) {
            console.log("sdf");
            console.log(data);
            console.log(status);
            $scope.details = data;
            $scope.cantidad=data.found
            console.log($scope.details);
            console.log(status);
            $scope.statcode = status;

            $scope.data=data;
        })        
        .error(function (data, status, headers, config) {
            $scope.statcode = status;        
        });
        
        }
        
        }]);
        app.controller('mainCtrl', ['$scope', function($scope){

            $scope.formData={};
        
            $scope.guardar_datos =function(valido ){
                if(!valido){
                    return;
                }
                console.log("posteando : ..");
            }
        
            
        }]);
    })();