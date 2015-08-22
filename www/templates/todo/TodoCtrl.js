/**
 * Created by kimsuho on 15. 8. 1..
 */
(function(app){
    "use strict";
    app.controller('TodoCtrl', function($scope, Toast, $http, $location, $state){
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
            $http.get('http://api.openweathermap.org/data/2.5/weather?q=Seoul&APPID=8d554a626fc5d01d77812b612a6de257', {}).success(function(res){
                console.log(res);
            }).error(function(err){
                console.log(err);
            });
        };

        $scope.goNextPage = function(name, age){
            //페이지 이동 코드 파라미터는 유니크한 값
            /*$location.search(name); //search() 에 인자가 있으면 세터 없으면 게터
            $location.path('/app/todo/detail'); //페이지 이동*/

            $state.go('app.detail', {name : name, age: age});
        };
    });
}(app));









