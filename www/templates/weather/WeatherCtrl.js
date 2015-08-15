/**
 * Created by kimsuho on 15. 8. 8..
 */
(function(app){
    "use strict";
    app.controller('WeatherCtrl', ['$scope', '$http', '$rootScope', 'Toast', '$ionicHistory', 'Weather', function($scope, $http, $rootScope, Toast, $ionicHistory, Weather){

        $scope.getWeather = function(location){
            /*var apiUrl2 = 'http://api.openweathermap.org/data/2.5/weather?q='+location;

            $http.get(apiUrl2).success(function(res){
                console.info(res);
                $scope.humidity = res.main.humidity;

                $rootScope.$broadcast('weather', res.main.humidity);

            }).error(function(err){
                console.warn(err);
            });*/

            var promise = Weather.getWeather(location);

            /*promise.then(function(res){
                console.info(res);
            }, function(rejected){
                console.error(rejected);
            });*/
            promise.success(function(res){
                console.info(res);

            }).error(function(err){
                console.error(err);

            });

            Weather.getWeather(location, function(res){
                var date = new Date(res);
            });

        };
    }]);
}(app));
