;(function () {
    'use strict';
    
    angular.module('app',[])
    
        .controller('HelloController',[
            '$scope',
            function ($scope) {
                $scope.greeting = {text: 'Hello'}
            }
        ])
})();