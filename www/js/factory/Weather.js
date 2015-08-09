/**
 * Created by kimsuho on 15. 8. 8..
 */
(function(app){
    "use strict";
    app.factory('Weather', ['$http', function($http){

        return {
            getWeather : function(location){
                var apiUrl2 = 'http://api.openweathermap.org/data/2.5/weather?q='+location;

                $http.get(apiUrl2).success(function(res){
                    console.info(res);
                    return res;

                }).error(function(err){
                    console.warn(err);
                });

            }
        };
    }]);
}(app));