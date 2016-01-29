var myApp=angular.module("myApp",['ngMessages']);
 
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
        $scope.isIncome=false;
    };
    $scope.AddInfo=function(){
        $scope.isAdd=false;     
    
    };
     

     $scope.submit=function(){
         
        manageService.submit($scope);
        $scope.isAdd=true;
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
    }
    $scope.update=function(){
                 
        manageService.update($scope.index,$scope.manageData);
        $scope.isAdd=true;
    }  
   
   
}]);
