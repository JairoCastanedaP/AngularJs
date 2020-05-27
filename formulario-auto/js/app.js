
var app = angular.module('bonusApp',['jcs-autoValidate']);

angular.module('jcs-bonusApp')
    .run([
    'defaultErrorMessageResolver',
    function (defaultErrorMessageResolver) {
        // passing a culture into getErrorMessages('fr-fr') will get the culture specific messages
        // otherwise the current default culture is returned.
        defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
          errorMessages['edadMinima'] = 'debe ser mayor de {0} años';
          errorMessages['edadMaxima'] = 'debe ser menor de {0} años';
        });
    }
]);

app.controller('mainCtrl', ['$scope', function($scope){

	$scope.formData = {};


	$scope.guardar_datos = function( valido ){

		if( !valido ){
			return;
		}



		console.log("Posteando...");


	}


	
}]);
