/**
 * Created by kimsuho on 15. 9. 12..
 */
(function(app){
    "use strict";
    app.controller('ContactsCtrl', ['$scope', '$window', function($scope, $window){
        navigator.contacts.find(
            ['id', 'displayName'],
            function(res){
                console.log(res);
            });
    }]);
}(app));