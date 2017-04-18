angular.module('myApp')

console.log('constants');

app.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated'
})

app.constant('API_ENDPOINT', {
  url: 'http://127.0.0.1:8100/api'
  //  For a simulator use: url: 'http://127.0.0.1:8080/api'
});
