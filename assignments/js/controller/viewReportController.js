myApp.controller("viewReportCtrl",function($scope,manageService)
    {
        
        $scope.isShow=true;
    
        manageService.getData()
        .then(function(data)
            {
            $scope.Expenses = data.data; 
            $scope.Expenses = data.data;
            });
        
   });