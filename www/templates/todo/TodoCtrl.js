/**
 * Created by kimsuho on 15. 8. 1..
 */
(function(app){
    "use strict";
    app.controller('TodoCtrl', function($scope, Toast){
        $scope.people = [
            {name: 'suho',age: 31},
            {name: 'nayeon', age: 27},
            {name: 'dfefe', age : 30},
            {name: 'afdazf', age: 25}
        ];
        $scope.listCanSwipe = true;

        $scope.share = function(p){
            alert(p.name + ': '+ p.age);
        };
        $scope.edit = function(p){
            alert(p.name + ': '+ p.age);
        };
        $scope.hahaha = function(str){
            Toast.show(str);
        };

        $scope.toast = function(msg){
            Toast.show(msg);
        };
    });
}(app));