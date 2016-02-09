myApp.service("manageService",function($http){
    var that = this;

    
    this.Expenses=[
        {name: "Amit",  petrol: 2500,  medical: 10000, food: 15000,salary: 50000,  rent: 20000, saving: 15000},
        {name: "Vijay",  petrol: 3500,  medical: 20000, food: 15000,salary: 750000,  rent: 40000, saving: 45000},
        {name: "Nitin",  petrol: 5500,  medical: 8000, food: 10000,salary: 150000,  rent: 30000, saving: 55000}
    ];
   
    
    this.submit=function(tempScope){
        that.Expenses.push({name:tempScope.manageData.name, petrol:tempScope.manageData.petrol, medical:tempScope.manageData.medical, food:tempScope.manageData.food, salary:tempScope.manageData.salary, rent:tempScope.manageData.rent, saving:tempScope.manageData.saving});
    };
        
    this.remove=function(index){
        this.Expenses.splice(index,1);
        
    };
    
    this.update=function(index,tempManageData){
        
        that.Expenses[index] = {name:tempManageData.name, petrol:tempManageData.petrol, medical:tempManageData.medical, food:tempManageData.food, salary:tempManageData.salary, rent:tempManageData.rent, saving:tempManageData.saving};
        
    } 
        
});        
        