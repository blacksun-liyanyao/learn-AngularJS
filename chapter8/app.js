/**
 * Created by Administrator on 2016/11/17 0017.
 */
var app = angular.module('myApp',['myApp.directives']);

app.controller('MainCtrl',[
    '$scope',
    function ($scope) {
        $scope.uploadFinished = function (e, data) {
            console.log('we just finished uploading this baby');
        }
    }
])


angular.module('myApp.directives',[])
.directive('fileupload', function () {
        return{
            restrict:'A',
            scope:{
                done:'&',
                progress:'&'
            },
            link:function(scope,element,attrs){
                var optionsObj = {
                    dataType:'json'
                };
                if(scope.done){
                    optionsObj.done = function () {
                        scope.$apply(function () {
                            scope.done({e:e,data:data});
                        });
                    };
                }

                if(scope.progress){
                    optionsObj.progress = function (e, data) {
                        scope.$apply(function () {
                            scope.progress({e:e,data:data});
                        });
                    }
                }
                element.fileupload(optionsObj);
            }
        };

    });