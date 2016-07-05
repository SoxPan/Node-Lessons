/**
 * Created by User on 6/13/2016.
 */

app.controller('githubController', ['$translate', '$scope', '$http', '$routeParams' , function($translate, $scope , $http, $routeParams){
    $http.get("https://api.github.com/users")
    .success(function(data) {
        $scope.userData = data;
    });

    $http.get("https://api.github.com/users/" + $routeParams.name)
    .success(function(data){
        $scope.user = data;
    });

    $http.get("https://api.github.com/users/" + $routeParams.name +"/repos")
    .success(function(data){
        $scope.repos = data;
        if($scope.repos.language == '') {
            console.log('idinaxui');
        } else {

        }
    });


}]);