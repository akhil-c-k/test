(function() {
    var app = angular.module("githubViewer");
      var MainController = function($scope, $interval, $location, github) 
        {
        var decrementCountdown = function()
         {
           $scope.countdown -= 1;
           if($scope.countdown < 1)
            {
             
              $scope.search($scope.username);
              
            }
         };
         
      var countdownInterval="null";
          var startCountdown = function()
           {
             countdownInterval=$interval(decrementCountdown,1000,$scope.countdown);
           };
         
      var onUserComplete = function(data) 
       {
          $scope.user = data;
          github.getRepos($scope.user).then(onRepos,onError);
        };
         
      var onRepos = function(data) 
        {
          $scope.repos = data;
        };
        
      var onError = function(reason)
       {
          $scope.error = "cannot fetch the data !";
        };
      
       $scope.search = function(username)
         {
        github.getUser($scope.username).then(onUserComplete,onError);
             // alert("1")
              // if(countdownInterval)
              // {
              //   $interval.cancel(countdownInterval);
              //   $scope.countdown=null;
              // }
             
          // $location.path("/user/"+ username);   
            
        };
          

        $scope.username;
        
       //  github.getUser($scope.username).then(onUserComplete,onError);
        $scope.countdown=5;
        startCountdown();


     
    };

      app.controller("MainController",MainController);

    }());