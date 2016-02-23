myApp.service("manageService",function($http, $q)
      {
        var that = this;

        this.expenseData ={};

        /** Access-Data Function **/

        this.getData = function(index){

            var deffered = $q.defer();

            $http.get("https://api.myjson.com/bins/2ilmr")
            // $http.get("http://127.0.0.1:49206/angularjs-training-master/assignments/json/expenseData.json")
                .then(function(response) {

                that.expenseData= response.data;  

                console.log("helo",that.expenseData);

                deffered.resolve(response);
            }, 
                      function (response) {

                console.log("Got error");

                deffered.reject("Error "+response);
            });

            return deffered.promise;
        };
    
        /** Add-Data Function **/
    
        this.postData=function(_scope){
                              
           that.expenseData.push({date:_scope.manageData.date,name:_scope.manageData.name, petrol:_scope.manageData.petrol, medical:_scope.manageData.medical, food:_scope.manageData.food, salary:_scope.manageData.salary, rent:_scope.manageData.rent, saving:_scope.manageData.saving});

            console.log("done",that.expenseData);

            $http({
                method  : 'PUT',
                url     : 'https://api.myjson.com/bins/2ilmr',
                //url     : 'http://127.0.0.1:49206/angularjs-training-master/assignments/json/expenseData.json',  
                data    : angular.toJson(that.expenseData) //forms user object
            })

        };
    
        /** Remove-Data Function **/
    
        this.remove=function(index){
            that.expenseData.splice(index,1);
            $http({
                method  : 'PUT',
                url     : 'https://api.myjson.com/bins/2ilmr',
                //url     : 'http://127.0.0.1:49206/angularjs-training-master/assignments/json/expenseData.json',       
                data    : angular.toJson(that.expenseData) //forms user object
            })

        };
    
        /** Update-Data Function **/

        this.update=function(index,tempManageData){

            that.expenseData[index] = {date:tempManageData.date,name:tempManageData.name, petrol:tempManageData.petrol, medical:tempManageData.medical, food:tempManageData.food, salary:tempManageData.salary, rent:tempManageData.rent, saving:tempManageData.saving};

            $http({
                method  : 'PUT',
                url     : 'https://api.myjson.com/bins/2ilmr',
                //url     : 'http://127.0.0.1:49206/angularjs-training-master(1)/angularjs-training-master/assignments/json/expenseData.json',      
                data    : angular.toJson(that.expenseData) //forms user object
            })

        };
        

});        
