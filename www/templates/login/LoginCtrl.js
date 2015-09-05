/**
 * Created by kimsuho on 15. 8. 28..
 */
(function(app) {
    "use strict";
    app.controller('LoginCtrl', ['$scope', '$state', 'Toast', 'User', 'Auth', function ($scope, $state, Toast, User, Auth) {
        $scope.login = {
            facebook : function(){
                console.log('login.facebook clicked');
                console.log(Auth);

                //Auth.$unauth();
                Auth.$authWithOAuthRedirect("facebook").then(function(authData) {
                    User.setUser(authData.facebook.cachedUserProfile);
                    $state.go('app.story');
                    console.info(authData);
                }).catch(function(error) {
                    if (error.code === "TRANSPORT_UNAVAILABLE") {
                        Auth.$authWithOAuthPopup("facebook").then(function(authData) {
                            User.setUser(authData.facebook.cachedUserProfile);
                            $state.go('app.story');
                            console.info(authData);
                        });
                    } else {
                        Toast.show('아이디 비밀번호를 확인하시고 다시 로그인하세요');
                        console.error(error);
                    }
                });
                Auth.$onAuth(function(authData) {
                    if (!authData) {
                        console.log("Not logged in yet");
                    } else {
                        console.log("Logged in as", authData.uid);
                        User.setUser(authData.facebook.cachedUserProfile);
                        $state.go('app.story');
                    }
                    $scope.authData = authData; // This will display the user's name in our view
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