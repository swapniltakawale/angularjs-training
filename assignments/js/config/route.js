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
            templateUrl: 'template/manageInfo.html',
            controller: 'manageInfoCtrl'
        })
    
       .state('viewReport', {
            url: '/viewReport',
            templateUrl:'template/viewReport.html',
            controller: 'viewReportCtrl'
        })
    
        .state('viewReport.detailReport', {
            url: '/detailReport',
            templateUrl: 'template/detailReport.html'
        })
        
        .state('viewReport.searchByName', {
            url: '/searchByName',
            templateUrl: 'template/searchByName.html'
        })

        .state('viewReport.searchByDate', {
            url: '/searchByDate',
            templateUrl: 'template/searchByDate.html',
        })
        .state('paymentAlert', {
                url: '/paymentAlert',
                templateUrl: 'template/paymentAlert.html'
        });

});