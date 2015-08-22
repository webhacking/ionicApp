/**
 * Created by kimsuho on 15. 8. 22..
 */
(function(app){
    "use strict";
    app.controller('DetailCtrl', ['$scope', '$stateParams', '$ionicModal', '$window', function($scope, $stateParams, $ionicModal, $window){
        var params = $stateParams; // {name : 'suho', age : 31}
        $scope.name = $stateParams.name;
        $scope.age = params.age;

        $ionicModal.fromTemplateUrl('my-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function() {
            $scope.modal.show();
        };
        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            //console.log('modal.hidden');
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            //console.log('modal.removed');
        });

        $window.$scope = $scope;
    }]);
}(app));