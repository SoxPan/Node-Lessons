/**
 * Created by User on 6/13/2016.
 */

app.controller('githubController', ['$translate', '$scope', '$http', '$routeParams' , function($translate, $scope , $http, $routeParams){
    $http.get("https://api.github.com/users")
    .success(function(data) {
        $scope.userData = data;
        $scope.quantity = 50;
    });

    $http.get("https://api.github.com/users/" + $routeParams.name)
        .success(function(data){
            $scope.user_nickname = data.login;
            $scope.user_name = data.name;
            $scope.user_link = data.url;
            $scope.user_avatar = data.avatar_url;
        });


}]);