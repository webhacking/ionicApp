/**
 * Created by kimsuho on 15. 8. 29..
 */
(function(app){
    "use strict";
    app.factory('User', [function(){
        var user;

        return {
            setUser : function(_user){
                user = _user;
            },
            getUser : function(){
                return user;
            }
        };
    }]);
}(app));