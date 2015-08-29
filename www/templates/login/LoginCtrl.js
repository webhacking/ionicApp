/**
 * Created by kimsuho on 15. 8. 28..
 */
(function(app) {
    "use strict";
    app.controller('LoginCtrl', ['$scope', '$state', 'Toast', function ($scope, $state, Toast) {
        var ref = new Firebase("https://suho.firebaseio.com");
        $scope.login = {
            facebook : function(){
                ref.authWithOAuthPopup("facebook", function(error, authData) {
                    if (error) {
                        Toast.show('로그인 실패 다시 로그인하세요');
                        console.log("Login Failed!", error);
                    } else {
                        $state.go('app.story');
                        console.log("Authenticated successfully with payload:", authData);
                    }
                });
            },
            google : function(){

            },
            github : function(){

            },
            twitter : function(){

            }
        };
    }]);
}(app));