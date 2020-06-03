var app = angular.module('facturacionApp.notificaciones', []);

app.factory('Notificaciones', ['$http', '$q', function ($http, $q) {

    var self = {

        notificaciones:[{
            icono:'fa-user',
            notificacion:'Nuevo Usuario registrado',
        },
        {
            icono:'fa-save',
            notificacion:'Se está utilizando el 50% de disco duro',
        },
        {
            icono:'fa-user',
            notificacion:'Obtnen mas capacidad de almacenamiento',
        }]
    };
    return self;
}]);