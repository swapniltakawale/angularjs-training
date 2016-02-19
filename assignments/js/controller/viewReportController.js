myApp.controller("viewReportCtrl",function($rootScope,$scope,manageService, $state)
    {
        
        $scope.isShow=true;
    
        manageService.getData()
        .then(function(data)
            {
            $scope.Expenses = data.data; 
            $scope.Expenses = data.data;
            });
    
            $state.go("viewReport.detailReport");
//Tabs
        $scope.tabs = [{
                title:'Detail Report',
                stateName:'viewReport.detailReport'
            }, {
                title: 'Search By Name',
                stateName:'viewReport.searchByName'
            }, {
                title: 'Search By Date',
                stateName:'viewReport.searchByDate'
            }];
    });