(function () {
    var app = angular.module('DemoLoadingBar');
    app.directive('loadingBar', function () {
        function linkFn(scope, $element, attribute) {
            scope.$on('loadingBar:show', function (event, data) {
                $element.removeClass('out').addClass('in');
            });
            scope.$on('loadingBar:hide', function () {
                $element.removeClass('in').addClass('out');
            });
        }

        return {
            templateUrl: './loadingbar/template.html',
            link: linkFn,
            restrict: 'E',
            replace: true
        }
    })
        .factory('LoadingBarFactory', function ($rootScope) {
            var factory = {};

            function show() {
                $rootScope.$broadcast('loadingBar:show');
            }
            function hide() {
                $rootScope.$broadcast('loadingBar:hide');
            }
            factory.show = show;
            factory.hide = hide;

            return factory;
        })
}());