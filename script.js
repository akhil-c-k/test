// Code goes here
// Code goes here

(function() {
  
  var app = angular.module("githubViewer",[]);
  
  var MainController = function ($scope,$http)
    {
      var onUserComplete = function(response)
        {
          $scope.user = response.data;
          console.log("ok");
        }
        
      var onError = function(error_show)
       {
        $scope.error_show = "cannot fetch data";
       }
      
      $scope.search = function(username)
       {
         $http.get("https://api.github.com/users/" + username)
         .then(onUserComplete,onError)
       };
       
       $scope.username="angular";
       $scope.message="github viewer"
      
    };
    
    app.controller("MainController",["$scope","$http",MainController]);

}());
