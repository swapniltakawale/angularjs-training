myApp.filter('dateFilter', function(){
    return function(arr, field){
        var filtered = [];        
        angular.forEach(arr, function(item){            
            if(moment(item.date).format('DD-MM-YYYY').indexOf(field) > -1)
                filtered.push(item);
        });
        return filtered;
    }
});