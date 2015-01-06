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