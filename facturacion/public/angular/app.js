var app = angular.module('facturacionApp',[
	'ngRoute',
	'facturacionApp.configuracion',
	'facturacionApp.mensajes',
	'facturacionApp.notificaciones']);


app.controller('mainCtrl', ['$scope','Configuracion','Mensajes','Notificaciones'  ,
function( $scope,Configuracion,Mensajes,Notificaciones ){
	
	$scope.config={};
	$scope.mensajes=Mensajes.mensajes;
	$scope.notificaciones=Notificaciones.notificaciones;
	console.log($scope.mensajes);
	$scope.usuario={
		nombre:"Juaco caseres"
	}

	Configuracion.cargar().then( function(){
		$scope.config=Configuracion.config;
		//console.log($scope.config);
	});

}]);

//rutas
app.config([ '$routeProvider',function($routeProvider){

	$routeProvider
	.when('/',{
		templateUrl:'dashboard/dashboard.html'
	})
	.otherwise({
		redirectTo:'/'
	})
} ]);

//filtros
app.filter('quitarletra',function(){

	return function(palabra){
		if(palabra){
			if(palabra.length>1){
				return palabra.substring(1);
			}
			else{
				return palabra;
			}
		}
	}
})
.filter('mensajeCorto',function(){

	return function(mensaje){
		if(mensaje){
			if(mensaje.length>35){
				return mensaje.substring(0,35)+"...";
			}
			else{
				return mensaje;
			}
		}
	}
})