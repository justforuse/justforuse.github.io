angular.module("myApp", ["ui.router"])
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state("start",{
				url:"/start",
				templateUrl:"partials/start.html"
			})
			.state("start.about", {
				url:'^/about',
				templateUrl:"partials/about.html"
			})
			.state("end",{
				url:'/end'
			})
			.state("info",{
				url:'/info/:id',
				templateUrl:'partials/user.html',
				controller:function($scope, $stateParams){
					$scope.uid=$stateParams.id;
				},
				onEnter:function(){

					
				},
				onExit:function(){
					
				}
			})
		$urlRouterProvider.otherwise('/start');
	})
	.constant("usersUrl", "http://justforuse.github.io/ui-router/users.json")
	.controller("mainCtrl", function($scope, $state){
		$scope.$on("$stateChangeStart", function(evt, toState, toParams, fromState, fromParams){
			
		})

		$scope.toEnd=function(){
			$state.go("end");
		}
	})
	.controller("startCtrl", function($scope, $http, usersUrl){

		$http.get(usersUrl)
			.success(function(data){
				console.log(data);
				$scope.userData=data;
			})
			.error(function(error){
				console.log("error"+error);
			})
		//$scope.userData=users;
		//console.log(userData);

	})