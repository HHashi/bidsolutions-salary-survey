'use strict';

//Setting up route
angular.module('salaries').config(['$stateProvider',
    function ($stateProvider) {
        // Salaries state routing
        $stateProvider.
            state('listSalaries', {
                url: '/',
                templateUrl: 'modules/salaries/views/list-salaries.client.view.html'
            });
    }
]);
