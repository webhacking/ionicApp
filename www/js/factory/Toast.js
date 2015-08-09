/**
 * Created by kimsuho on 15. 8. 1..
 */
(function(app){
    "use strict";
    app.factory('Toast', ['$cordovaToast', '$window', '$cordovaVibration', function($cordovaToast, $window, $cordovaVibration){
        var Toast = {
            show : function(msg, duration, position){
                if($window.plugins){
                    $cordovaVibration.vibrate(1000);
                    $cordovaToast.show(msg, (duration || 'short'), (position || 'center') );
                }else{
                    alert(msg);
                }
            }
        };
        $window.Toast = Toast;

        return Toast;
    }]);
}(app));