var myApp=angular.module("myApp",[]);
 
var Expenses=[
    {Name: "Amit",  Petrol: 2500,  Medical: 10000, Food: 15000},
    {Name: "Vijay",  Petrol: 3500,  Medical: 20000, Food: 15000},
    {Name: "Nitin",  Petrol: 5500,  Medical: 8000, Food: 10000}
]

var Income=[
    {Name: "Amit",  Salary: 50000,  Rent: 20000, Saving: 15000},
    {Name: "Vijay",  Salary: 750000,  Rent: 40000, Saving: 45000},
    {Name: "Nitin",  Salary: 150000,  Rent: 30000, Saving: 55000}
]

myApp.controller("myController",function($scope){
    
    $scope.isIncome=true;
    $scope.Income=Income;
    
    
    $scope.showIncome=function(){
        $scope.Income=Income;
        $scope.isIncome=true;
        
    };
    
    $scope.showExpenses=function(){
        $scope.Expenses=Expenses;
        $scope.isIncome=false;
    }
});