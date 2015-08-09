/**
 * Created by kimsuho on 15. 8. 1..
 */
(function(app){
    "use strict";
    app.factory('Keyboard', ['$cordovaKeyboard', '$window', function($cordovaKeyboard, $window){
        var Keyboard = {
            show : function(){
                $cordovaKeyboard.show();
            },
            close : function(){
                $cordovaKeyboard.close();
            }
        };

        $window.Keyboard = Keyboard;

        return Keyboard;
    }]);
}(app));