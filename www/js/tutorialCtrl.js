angular.module('app.controllers')

    .controller('tutorialCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
        $scope.startApp = function() {
            $state.go('tabs.map');
            $ionicSlideBoxDelegate.slide(0);
        };
        $scope.next = function() {
            $ionicSlideBoxDelegate.next();
        };
        $scope.previous = function() {
            $ionicSlideBoxDelegate.previous();
        };
    });