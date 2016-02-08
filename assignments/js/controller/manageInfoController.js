myApp.controller("myController",['$scope','manageService',function($scope,manageService){
    
    $scope.index = 0;
    $scope.isIncome=true;
    $scope.Expenses=manageService.Expenses;
    $scope.isUpdate=false;
    $scope.isAdd=true;
    
   
    
    $scope.showIncome=function(){
        
        $scope.isIncome=true;
        
    };    
    $scope.showExpenses=function(){
        $scope.isIncome=true;
    };
    $scope.AddInfo=function(){
        $scope.isAdd=false;     
    
    };
     

     $scope.submit=function(){
         
        manageService.submit($scope);
        $scope.isAdd=true;
        $scope.manageData=""; 
     };
    
    $scope.View=function(index)
    {       
        $scope.manageData = $scope.Expenses[index];
       
        $scope.index = index;
        $scope.isUpdate=true;
        $scope.isAdd=false;
    };
    
    $scope.remove = function(index)
    {
        manageService.remove(index);
        $scope.manageData=""; 
        $scope.isUpdate=false;
        $scope.isAdd=true;
    }
    $scope.update=function(){
        manageService.update($scope.index,$scope.manageData);
        $scope.isAdd=true;
        $scope.isUpdate=false;
        $scope.manageData="";         

    }  
   
   
}]);
