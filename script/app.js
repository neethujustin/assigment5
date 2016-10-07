var myApp = angular.module('myApp', ['ui.router']);
myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/index.html");
  $stateProvider
  .state('index',{
    url: '/index.html'
  })
    .state('descrip', 
    {
      url: '/descrip/:key',
      views: {
    '': {
      templateUrl: 'descrip.html',
      controller: 'myController'
    }}
    })
    
  });
myApp.controller('myController',['$scope','$http','$stateParams','$location',function($scope,$http,$stateParams,$location){
 $scope.data;
 $http.get('script/data.json').success(function(response){ 
  $scope.data=response;
  //console.log(response);
  var n=$stateParams.key;
   if(n!=undefined){
      $scope.t=response.destdetails[n].name;
      $scope.u=response.destdetails[n].url;
      $scope.d=response.destdetails[n].description;
   } 
  });
}]);