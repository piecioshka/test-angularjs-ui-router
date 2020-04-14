angular.module('app', ['ui.router'])

    .config(function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            template: '<h2>Homepage</h2>',
        });
        $stateProvider.state('page', {
            url: '/pages/:page',
            template: '<h2>Page: {{page}}</h2>',
            controller: function ($scope, $stateParams) {
                $scope.page = $stateParams.page;
            }
        });
    })

    .controller('Application', ($scope, $state, $location) => {
        console.dir({ $scope, $state, $location });

        $scope.title = "Testing Angular Router";

        $scope.navigate1 = () => {
            console.log('> navigate1');
            $state.go('page', { page: 'contact-1' }, {
                // location: false,
                // notify: false,
                // reload: false,
            });
        };
        $scope.navigate2 = () => {
            console.log('> navigate2');
            $state.go('page', { page: 'contact-2' }, {
                location: false,
                // notify: false,
                // reload: false,
            });
        };
        $scope.navigate3 = () => {
            console.log('> navigate3');
            $state.go('page', { page: 'contact-3' }, {
                // location: false,
                notify: false,
                // reload: false,
            });
        };
        $scope.navigate4 = () => {
            console.log('> navigate4');
            $state.go('page', { page: 'contact-4' }, {
                // location: false,
                // notify: false,
                reload: false,
            });
        };
        $scope.navigate5 = () => {
            console.log('> navigate5');
            location.hash = '#!/pages/contact-5';
        };
        $scope.navigate5a = () => {
            console.log('> navigate5a');
            location.hash = '#!/pages/contact-5/foo';
        };
        $scope.navigate6 = () => {
            console.log('> navigate6');
            $location.path('/pages/contact-6');
        };
        $scope.navigate6a = () => {
            console.log('> navigate6a');
            $location.path('/pages/contact-6/bar');
        };
        $scope.navigate7 = () => {
            console.log('> navigate7');
            $location.search('key', 'value');
        };
        $scope.navigate8 = () => {
            console.log('> navigate8');
            $location.hash('section-8');
        };
    });
