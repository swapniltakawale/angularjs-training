myApp.config(function($stateProvider, $urlRouterProvider){
   
    $urlRouterProvider.otherwise('/addInfo');
    
    $stateProvider
        
        .state('addInfo', {
            url: '/addInfo',
            templateUrl: 'template/addInfo.html',
            controller: 'myController'
        })
        
        .state('showExpenses', {
            url: '/showExpenses',
            templateUrl:'template/showExpenses.html',
            controller: 'myController'
        })
        
        .state('showIncome', {
            url: '/showIncome',
            templateUrl: 'template/showIncome.html',
            controller: 'myController'
        });

});