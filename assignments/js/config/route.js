myApp.config(function($stateProvider, $urlRouterProvider){
   
    $urlRouterProvider.otherwise('/manageInfo');
    
    $stateProvider
        
        
        .state('addInfo', {
            url: '/addInfo',
            templateUrl: 'template/addInfo.html',
            controller: 'addInfoCtrl'
        })
        
        
        .state('manageInfo', {
            url: '/manageInfo',
       // url: '/detail/:name/:index',
            templateUrl: 'template/manageInfo.html',
            controller: 'manageInfoCtrl'
        })
    
       .state('viewReport', {
            url: '/viewReport',
            templateUrl:'template/viewReport.html',
            controller: 'viewReportCtrl'
        });

});