/**
 * Created by kimsuho on 15. 8. 15..
 */
(function(){
    "use strict";
    app.controller('PromiseTestCtrl', ['$scope', '$q', function($scope, $q){
        var promise = borrow();


        promise.then(function(result){
            console.info('resolved : ', result);
        }, function(rejected){
            console.error('rejected : ', rejected);
        });




        function borrow(){
            var deferred = $q.defer();

            deferred.resolve(1000);

            //deferred.reject(false);

            return deferred.promise;
        }
    }]);
}());



/*
getDataFromServer(function(resultFromServer){
    console.log('111  resultFromServer : ', resultFromServer);    //  1
    saveDataIntoDB(resultFromServer, function(resultFromDB){
        console.log('222 DB저장완료 : ', resultFromDB);    //2
    });
});

function getDataFromServer(func){
    setTimeout(function(){
        var data = {name : 'dlefefefefefef'};
        func(data);
    }, 3000);
    for(var i=0; i<10000; i++){
        console.log('333 : ', i);   //3
    }
}

function saveDataIntoDB(data, func){
    setTimeout(function(){
        func(true);
    });
}

var app = (function(){
   var foo = 10;

    return {
        getFoo : function(){

        }
    }
}());

var app = getObj();

function getObj(){
    var foo = 10;

    return {
        getFoo : function(){

        }
    }
}

function a(){
    var foo = {};

}

a();

function b(){
    var a = 1;
    return function(){
        a += 1;
        return function(){
            return {
                abcd : function(){

                }
            };
        };
    };
}*/
