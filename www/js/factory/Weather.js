/**
 * Created by kimsuho on 15. 8. 8..
 */
(function(app){
    "use strict";
    app.factory('Weather', ['$http', '$q', function($http, $q){

        return {
            /*getWeather : function(location, func){
                var deferred = $q.defer();

                var apiUrl2 = 'http://api.openweathermap.org/data/2.5/weather?q='+location;

                $http.get(apiUrl2).success(function(res){
                    deferred.resolve(res);

                }).error(function(err){
                    deferred.reject(err);
                });


                return deferred.promise;
            },*/
            getWeather : function(location){

                var apiUrl2 = 'http://api.openweathermap.org/data/2.5/weather?q='+location;

                var pr = $http.get(apiUrl2);

                console.log(pr);



                return pr;
            }
        };
    }]);
}(app));