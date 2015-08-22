/**
 * Created by kimsuho on 15. 8. 22..
 */
(function(app){
    "use strict";
    app.controller('DetailCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
        var params = $stateParams; // {name : 'suho', age : 31}
        $scope.name = $stateParams.name;
        $scope.age = params.age;
    }]);
}(app));