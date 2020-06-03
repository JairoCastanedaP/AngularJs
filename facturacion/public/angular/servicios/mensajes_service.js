var app = angular.module('facturacionApp.mensajes', []);

app.factory('Mensajes', ['$http', '$q', function ($http, $q) {

    var self = {

        mensajes:[{
            img:'dist/img/user2-160x160.jpg',
            nombre:"Gerardito Araque",
            mensaje:'Bienvenido a nuestro servicio de facturación',
            fecha:'03/06/2020'
        },
        {
            img:'dist/img/user2-160x160.jpg',
            nombre:"Pedro Rodriguez",
            mensaje:'Bienvenido a nuestro servicio de facturación',
            fecha:'06/06/2020'
        },
        {
            img:'dist/img/user2-160x160.jpg',
            nombre:"Henry xbox",
            mensaje:'Bienvenido a nuestro servicio de facturación',
            fecha:'15/06/2020'
        }]
    };
    return self;
}]);