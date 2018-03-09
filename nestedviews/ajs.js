var app = angular.module("main", ["ui.router"]);

app.config(["$stateProvider", function($stateProvider) {

    // var a = {
    //     name: "Employee",
    //     url: "/emp",
    //     template: "<strong>hii</strong>",
    //     controller: "cntrl"
    // }
    // $stateProvider.state(a);



    // $stateProvider.state("s1", {
    //     url: "/emp",
    //     template: "<strong>hiiii</strong>",
    //     controller: "cntrl"
    // });


    $stateProvider.state("s1", {
        url: "/emp",
        templateUrl: "t1.html",
        // views: {
        //     "uv1": {
        //         templateUrl: "t1.html",
        //         controller: "cntrl",
        //     }

        // }


    });

    $stateProvider.state("c1", {
        parent: "s1",
        url: "/child",
        views: {
            "uv1": {
                templateUrl: "c1.html",
                controller: "uv1Controller"
            },
            "uv2": {
                templateUrl: "t1.html",
                controller: "uv2Controller"
            }

        }
    })


}]);

app.controller("cntrl", function($scope) {

});


app.controller("uv1Controller", function($scope) {
    $scope.uv1Variable = "uv1Variable"
});

app.controller("uv2Controller", function($scope) {
    $scope.uv2Variable = "uv2Variable"
})