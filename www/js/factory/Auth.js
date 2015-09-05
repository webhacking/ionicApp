/**
 * Created by kimsuho on 15. 8. 29..
 */
(function(app){
    "use strict";
    app.factory('Auth', ['$firebaseAuth', function($firebaseAuth){
        var ref = new Firebase("https://suho.firebaseio.com/users");
        window.$firebaseAuth = $firebaseAuth(ref);
        return window.$firebaseAuth;
    }]);
}(app));