var myApp=angular.module("myApp",[]);
 
var Expenses=[
    {Name: "Amit",  Petrol: 2500,  Medical: 10000, Food: 15000,Salary: 50000,  Rent: 20000, Saving: 15000},
    {Name: "Vijay",  Petrol: 3500,  Medical: 20000, Food: 15000,Salary: 750000,  Rent: 40000, Saving: 45000},
    {Name: "Nitin",  Petrol: 5500,  Medical: 8000, Food: 10000,Salary: 150000,  Rent: 30000, Saving: 55000}
]


myApp.controller("myController",function($scope){
    
    
    $scope.index = 0;
    $scope.isIncome=true;
    $scope.Expenses=Expenses;
    $scope.isUpdate=false;
    
    $scope.showIncome=function(){
        $scope.Expenses=Expenses;
        $scope.isIncome=true;
        
    };
    
    $scope.showExpenses=function(){
        $scope.Expenses=Expenses;
        $scope.isIncome=false;
    };
    
    $scope.submit=function(){
        
        $scope.Expenses.push({ Name: $scope.Name, Petrol: $scope.Petrol, Medical:$scope.Medical, Food:$scope.Food, Salary:$scope.Salary, Rent:$scope.Rent, Saving:$scope.Saving });
    };
    $scope.Remove=function(index){
        $scope.Expenses.splice(index,1);
        
    };
     
    $scope.View=function(index){
      $scope.Name = $scope.Expenses[index].Name ;
      $scope.Petrol=  $scope.Expenses[index].Petrol;
      $scope.Medical=  $scope.Expenses[index].Medical;
      $scope.Food=  $scope.Expenses[index].Food;
      $scope.Salary=  $scope.Expenses[index].Salary;
      $scope.Rent=  $scope.Expenses[index].Rent;
      $scope.Saving=  $scope.Expenses[index].Saving; 
        
        $scope.index = index;
        $scope.isUpdate=true;
     
    };
    $scope.Update=function(index){
         $scope.Expenses[$scope.index].Name = $scope.Name;
        $scope.Expenses[$scope.index].Petrol = $scope.Petrol;
        $scope.Expenses[$scope.index].Medical = $scope.Medical;
        $scope.Expenses[$scope.index].Food = $scope.Food;
        $scope.Expenses[$scope.index].Salary = $scope.Salary;
        $scope.Expenses[$scope.index].Rent = $scope.Rent;
        $scope.Expenses[$scope.index].Saving = $scope.Saving;
    }
});
