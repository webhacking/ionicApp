/**
 * Created by kimsuho on 15. 8. 8..
 */
(function(app){
    "use strict";
    app.controller('WeatherCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope){

        $scope.getWeather = function(location){
            var apiUrl2 = 'http://api.openweathermap.org/data/2.5/weather?q='+location;

            $http.get(apiUrl2).success(function(res){
                console.info(res);
                $scope.humidity = res.main.humidity;

                $rootScope.$broadcast('weather', res.main.humidity);

            }).error(function(err){
                console.warn(err);
            });

        };
    }]);
}(app));