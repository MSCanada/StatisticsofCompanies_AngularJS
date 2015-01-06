var app_1=angular.module("app1",[]);
app_1.controller("customersController1",function($scope,$http)
{
	$http.get("http://inorthwind.azurewebsites.net/Service1.svc/getAllCustomers")
    .success(function(response) {$scope.names = response.GetAllCustomersResult;});

$scope.inp1=function(id1,id2)
{


return (id1*id2);
}
$scope.inp=function(id){


  $scope.out=id;
$http.get("http://inorthwind.azurewebsites.net/Service1.svc/getBasketsForCustomer/"+$scope.out)
    .success(function(response) {$scope.names1 = response.GetBasketsForCustomerResult});

}







})
app_1.filter('orderTotal', function () {
    return function (listOfProducts) {
        //  Calculate the total value of a particular Order
        var total = 0;
        angular.forEach(listOfProducts, function (product) {
            total += product.Quantity * product.UnitPrice;
        });
        return total;
    }
});

app_1.filter('quantityTotal', function () {
    return function (listOfProducts) {
        //  Calculate the total value of a particular Order
        var total = 0;
        angular.forEach(listOfProducts, function (product) {
            total =total+ product.Quantity ;
        });
        return total;
    }
});
app_1.filter('productTotal', function () {
    return function (listOfProducts) {
        //  Calculate the total value of a particular Order
        var total = 0;
        angular.forEach(listOfProducts, function (product) {
            total =total+ 1 ;
        });
        return total;
    }
});