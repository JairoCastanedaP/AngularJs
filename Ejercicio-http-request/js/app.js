(function () {

    angular.module('ejemplosApp', [])

            .controller('mainCtrl', function ($scope, $http) {

                $scope.profesores = {};
                $scope.tblProfesores='parciales/tblProfesores.html';

                $http.get('json/profesores.json')

                        .then(function (response) {

                            $scope.profesores = response.data.profesores;
                            console.log( response.data.profesores );

                        });

            });

})();