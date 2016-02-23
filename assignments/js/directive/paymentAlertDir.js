myApp.directive("paymentAlert",function(manageService)
    {   
        return{
        link:function($scope,$element){
            manageService.getData()
        .then(function(data)
            {
            $scope.expenseDues=[]; 
            $scope.Expenses = data.data; 
            
            console.log("dir",$scope.Expenses);
            for(var i=0; i<$scope.Expenses.length; i++){
                var isDue=false;
                var paymentDue=0;
                console.log($scope.Expenses[i]['date'].substr(8,2));
                if($scope.Expenses[i]['date'].substr(8,2)<15){
                    console.log($scope.Expenses[i]['date'].substr(0,10)+"alert payment due");
                    isDue=true;
                  paymentDue="alert payment due";
                }
               $scope.expenseDues.push({index:i, isDue:isDue, paymentDue:paymentDue})
          }
            
        });
    }
        }
    });