angular.module('myApp')

console.log('controllers');

app.controller('LoginCtrl', function($scope, AuthService, $state) { //$ionicPopup
  $scope.user = {
    name: '',
    password: ''
  };

  $scope.login = function() {
    AuthService.login($scope.user).then(function(msg) {
      $state.go('inside');
    }, function(errMsg) {
      //var alertPopup = $ionicPopup.alert({
      //  title: 'Login failed!',
      //  template: errMsg,
      //});
    });
  };
})

app.controller('RegisterCtrl', function($scope, AuthService, $state) { //$ionicPopup
  $scope.user = {
    name: '',
    password: ''
  };

  $scope.signup = function() {
    AuthService.register($scope.user).then(function(msg) {
      $state.go('outside.login');
      //var alertPopup = $ionicPopup.alert({
        //title: 'Register success!',
        //template: msg
      //});
    }, function(errMsg) {
      //var alertPopup = $ionicPopup.alert({
        //title: 'Register failed!',
        //template: errMsg
      //});
    });
  };
})

app.controller('InsideCtrl', function($scope, AuthService, API_ENDPOINT, $http, $state) {
  $scope.destroySession = function() {
    AuthService.logout();
  };

  $scope.getInfo = function() {
    $http.get(API_ENDPOINT.url + '/memberinfo').then(function(result) {
      $scope.memberinfo = result.data.msg;
    });
  };

  $scope.logout = function() {
    AuthService.logout();
    $state.go('outside.login');
  };
})

app.controller('AppCtrl', function($scope, $state, AuthService, AUTH_EVENTS) { //ionicPopup issue $ionicPopup
  $scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
    AuthService.logout();
    $state.go('outside.login');
    //var alertPopup = $ionicPopup.alert({
      //title: 'Session Lost!',
      //template: 'Sorry, You have to login again.'
    //});
  });
});
