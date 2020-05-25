(function(){
var app=angular.module('universidadApp',[]);

app.controller('listadoCtrl',['$scope',function($scope){

	$scope.listado=["Juaco Cardozo","Gerardo Araque","LinaZorro"];
	$scope.listadoProfesores={
		profesores:[{
			nombre:"jaja",
			edad:54,
			clase:"inglés"
		},{
		nombre:"jeje",
			edad:18,
			clase:"cálculo"
		},{
		nombre:"Álvaro",
			edad:68,
			clase:"cálculo"
		}]
	}

}]);

})();


