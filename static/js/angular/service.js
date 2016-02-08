var globalControllers =angular.module('appimagen.services', []);

// ---------------------------------servicio para HORARIO---------------------------------------
// globalControllers.factory('PostService', function ($http, $q) {
//     var api_url = "/horario_api_rest/";
//     return {
//         get: function (post) {
//             var url = api_url + post + "/";
//             var defer = $q.defer();
//             $http({method: 'GET', 
//             	url: url}).
//                 success(function (data, status, headers, config) {
//                     defer.resolve(data);
//                 })
//                 .error(function (data, status, headers, config) {
//                     defer.reject(status);
//                 });
//             return defer.promise;
//         },

//         save: function (post) {
//             var url = api_url+ 0 + "/";
//             var defer = $q.defer();
//             $http({method: 'POST',
//                 url: url,
//                 data: post}).
//                 success(function (data, status, headers, config) {
//                     defer.resolve(data);
//                 }).error(function (data, status, headers, config) {
//                     defer.reject(status);
//                 });
//             return defer.promise;
//         },

//         update: function (post) {
//             var url = api_url + post + "/";
//             var defer = $q.defer();
//             $http({method: 'PUT',
//                 url: url,
//                 data: post}).
//                 success(function (data, status, headers, config) {
//                     defer.resolve(data);
//                 }).error(function (data, status, headers, config) {
//                     defer.reject(status);
//                 });
//             return defer.promise;
//         },

//         delete: function (post) {
//             var url = api_url + post + "/";
//             var defer = $q.defer();
//             $http({method: 'DELETE', 
//             	url: url,}).
//                 success(function (data, status, headers, config) {
//                     defer.resolve(data);
//                 })
//                 .error(function (data, status, headers, config) {
//                     defer.reject(status);
//                 });
//             return defer.promise;
//         },

//     }
// });
// ---------------------------------servicio para HORARIO---------------------------------------


// ---------------------------------servicio para TIPS---------------------------------------
globalControllers.factory('PostServiceTips', function ($http, $q) {
    var api_url = "/tips_api_rest/";
    return {
        get: function (post) {
            var url = api_url + post + "/";
            var defer = $q.defer();
            $http({method: 'GET', 
            	url: url}).
                success(function (data, status, headers, config) {
                    defer.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    defer.reject(status);
                });
            return defer.promise;
        },

        save: function (post) {
            var url = api_url+ 0 + "/";
            var defer = $q.defer();
            $http({method: 'POST',
                url: url,
                data: post}).
                success(function (data, status, headers, config) {
                    defer.resolve(data);
                }).error(function (data, status, headers, config) {
                    defer.reject(status);
                });
            return defer.promise;
        },

        update: function (post) {
            var url = api_url + post + "/";
            var defer = $q.defer();
            $http({method: 'PUT',
                url: url,
                data: post}).
                success(function (data, status, headers, config) {
                    defer.resolve(data);
                }).error(function (data, status, headers, config) {
                    defer.reject(status);
                });
            return defer.promise;
        },


        delete: function (post) {
            var url = api_url + post + "/";
            var defer = $q.defer();
            $http({method: 'DELETE', 
            	url: url,}).
                success(function (data, status, headers, config) {
                    defer.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    defer.reject(status);
                });
            return defer.promise;
        },

    }
});
// ---------------------------------servicio para TIPS---------------------------------------


// ---------------------------------servicio para AVISOS---------------------------------------
globalControllers.factory('PostServiceAvisos', function ($http, $q) {
    var api_url = "/avisos_api_rest/";
    return {
        get: function (post) {
            var url = api_url + post + "/";
            var defer = $q.defer();
            $http({method: 'GET', 
            	url: url}).
                success(function (data, status, headers, config) {
                    defer.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    defer.reject(status);
                });
            return defer.promise;
        },



        save: function (post) {
            var url = api_url+ 0 + "/";
            var defer = $q.defer();
            $http({method: 'POST',
                url: url,
                data: post}).
                success(function (data, status, headers, config) {
                    defer.resolve(data);
                }).error(function (data, status, headers, config) {
                    defer.reject(status);
                });
            return defer.promise;
        },



        update: function (post) {
            var url = api_url + post + "/";
            var defer = $q.defer();
            $http({method: 'PUT',
                url: url,
                data: post}).
                success(function (data, status, headers, config) {
                    defer.resolve(data);
                }).error(function (data, status, headers, config) {
                    defer.reject(status);
                });
            return defer.promise;
        },


        delete: function (post) {
            var url = api_url + post + "/";
            var defer = $q.defer();
            $http({method: 'DELETE', 
            	url: url,}).
                success(function (data, status, headers, config) {
                    defer.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    defer.reject(status);
                });
            return defer.promise;
        },


    }
});        
// ---------------------------------servicio para AVISOS---------------------------------------        


// -------------------------------- Envia el arccivo a apirest del upload Licencia-----------------------------
globalControllers.factory('savechapeyearext', function ($http, $q) {
    return {
        Funsavechapeyearext: function (programa,salida,formData,radio, uploadUrl) {
            var fd = new FormData();
            fd.append('programa', programa);
            fd.append('salida', salida);
            fd.append('id_cliente', formData);
            fd.append('radio', radio);

            var defer = $q.defer();
            $http.post('/api_add_chapeyear-ext/', fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            }).
            success(function (data, status, headers, config) {
                defer.resolve(data);
            }).error(function (data, status, headers, config) {
                defer.reject(status);
            });
            return defer.promise;
        },

    }
});


globalControllers.factory('savechapeyearint', function ($http, $q) {
    return {
        Funsavechapeyearint: function (programa,salida,formData,radio, uploadUrl) {
            var fd = new FormData();
            fd.append('programa', programa);
            fd.append('salida', salida);
            fd.append('id_cliente', formData);
            fd.append('radio', radio);

            var defer = $q.defer();
            $http.post('/api_add_chapeyear_int/', fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            }).
            success(function (data, status, headers, config) {
                defer.resolve(data);
            }).error(function (data, status, headers, config) {
                defer.reject(status);
            });
            return defer.promise;
        },

    }
});
// -------------------------------- Envia el arccivo a apirest del upload Licencia-----------------------------
