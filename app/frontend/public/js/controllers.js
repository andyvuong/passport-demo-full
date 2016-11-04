var mp4Controllers = angular.module('passportControllers', []);

mp4Controllers.controller('LoginController', ['$scope', '$http',  function($scope, $http) {
  var url = "http://localhost:3000/api/user/login";
  
  // login into our app
  $scope.submit = function(username, password) {
    $http.post(url, data)
      .success(function(data) {
        var data = {
          username: username,
          password: password
        }
      })
      .error(function(err) {


      }); 
  };

}]);

mp4Controllers.controller('SignupController', ['$scope', '$http', function($scope, $http) {
  var url = "http://localhost:3000/api/user/signin";
  
  // sign into our app
  $scope.submit = function(username, password) {
    var data = {
      username: username,
      password: password
    }

    $http.post(url, data)
      .success(function(data) {

      })
      .error(function(err) {
        
      }); 
  };

}]);

mp4Controllers.controller('profileController', ['$scope', '$http', function($scope, $http) {
    var url = "http://localhost:3000/api/user/logout";

    // sign into our app
    $scope.logout = function() {
      $http.get(url)
        .success(function(data) {

        })
        .error(function(err) {
          
        }); 
    };

    $scope.access = function() {
      var url = "http://localhost:3000/api/protected";
      $http.get(url)
        .success(function(data) {

        })
        .error(function(err) {
          
        }); 
    };



}]);