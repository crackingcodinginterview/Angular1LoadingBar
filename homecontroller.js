(function () {
    var app = angular.module('DemoLoadingBar');
    app.controller('HomeController', function (LoadingBarFactory, $timeout) {
        var vm = this;

        function onClick() {
            LoadingBarFactory.show();
            $timeout(function () {
                LoadingBarFactory.hide();
            }, 3000);
        }
        vm.onClick = onClick;
    })
}());