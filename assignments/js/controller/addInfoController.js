myApp.controller("addInfoCtrl",function($scope,manageService)
    {

    $scope.expenseData=manageService.expenseData;

    
        $scope.submit=function()
        {
            manageService.postData($scope);
            $scope.manageData=""; 
            $scope.myForm.$setPristine();
        };
});