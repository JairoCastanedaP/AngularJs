(function(){

var app = angular.module('universidadApp',[ ]);



app.controller('listadoCtrl', ['$scope', function($scope){
 

$scope.alumnos=[
      {
        
        "nombre": "Kari Carr",
        "telefono": "(826) 453-3497",
        "celular": "(801) 9175-8136"
      },
      { 
        "nombre": "Tameka Gamble",
        "telefono": "(824) 438-2499",
        "celular": "(801) 8595-8337"
      },
      {
       
        "nombre": "Charity Austin",
        "telefono": "(817) 512-2258",
        "celular": "(801) 9375-3830"
      },
      {
        
        "nombre": "Slater Hunt",
        "telefono": "(842) 413-3023",
        "celular": "(801) 9555-1729"
      },
      {
        
        "nombre": "Chen Hanson",
        "telefono": "(966) 520-2696",
        "celular": "(801) 9324-4423"
      },
      {
        
        "nombre": "Obrien Davis",
        "telefono": "(996) 595-3896",
        "celular": "(801) 8195-2732"
      },
      {
       
        "nombre": "Le Haley",
        "telefono": "(967) 527-3286",
        "celular": "(801) 8074-5225"
      },
      {
       
        "nombre": "Lester Carney",
        "telefono": "(994) 465-3542",
        "celular": "(801) 9044-7522"
      },
      {
       
        "nombre": "Rosario Perry",
        "telefono": "(848) 499-2977",
        "celular": "(801) 8495-0625"
      },
      {
        
        "nombre": "Marilyn Huber",
        "telefono": "(982) 580-3235",
        "celular": "(801) 8184-2624"
      }
    ];

    $scope.Save=function(){
      
      $scope.alumnos.push({
        nombre:$scope.nuevoAlumno.nombre,
        telefono:$scope.nuevoAlumno.telefono,
        celular:$scope.nuevoAlumno.celular
      });
      $scope.formVisibility=false;
      console.log($scope.formVisibility)

    }
    
    $scope.formVisibility=false;
    console.log($scope.formVisibility)

    $scope.formVisibility=function(){
      $scope.formVisibility=true;
      console.log($scope.formVisibility)
    }


}]);





})();
