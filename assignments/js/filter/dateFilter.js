myApp.filter('dateRange', function(){

    return function(input, startDate, endDate) {
       angular.forEach(input, function(obj){

        if(obj.received.getTime() >= startDate.getTime() && obj.received.getTime() <= endDate.getTime())   {
            return obj;
        }
       });

    };
});
