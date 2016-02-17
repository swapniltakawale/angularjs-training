myApp.controller("manageInfoCtrl",function($scope,manageService)
    {
        $scope.myText = "<h5>&copy; sv.takawale &#124; 2016</h5>";

    
        $scope.index = 0;
        $scope.isIncome=true;
        $scope.isUpdate=false;
        $scope.isview=false;
        $scope.isShow=true;
    
        
        /** Access-Data Function **/
    
        manageService.getData()
        .then(function(data)
            {
            $scope.Expenses = data.data; 
            $scope.Expenses = data.data;
            });
        
       

        $scope.viewInfo=function(index)
        {
            
            $scope.manageData = manageService.expenseData[index];
            $scope.isview=true; 
            $scope.isUpdate=false;
            $scope.isShow=false;
            

        };
    
        $scope.manageInfo = function () 
        {
            $scope.isview=false;
            $scope.isShow=true;
        };
    
    
        /** View-Data Function **/

        $scope.view=function(index)
        {       
            console.log("view : "+index);
         $scope.manageData = manageService.expenseData[index];
            $scope.index = index;
            $scope.isUpdate=true;
            
            $scope.isShow=false;
            $scope.isview=false; 
        };
       
        /** Remove-Data Function **/

        $scope.remove = function(index)
        {
            manageService.remove(index);
            $scope.manageData=""; 
            $scope.isUpdate=false;
            $scope.isAdd=true;

        }
        
        /** Update-Data Function **/

        $scope.update=function()
        {
            manageService.update($scope.index,$scope.manageData);
            $scope.isUpdate=false;
            $scope.manageData=""; 
            $scope.isShow=true;

        }  
        
       

    });
