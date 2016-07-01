/**
 * Created by User on 6/13/2016.
 */

app.controller('githubController', ['$translate', '$scope', '$http' , function($translate, $scope , $http){
    $http.get("https://api.github.com/users")
    .success(function(data) {
        $scope.userData = data;
        $scope.quantity = 50;
    });


    $scope.go = function (userName) {
        userName = $scope.userData[0].html_url;
        alert(userName);
    };
}]);