angular.module("myApp",['ui.router'])
	.config(function($stateProvider, $urlRouteProvider){
		$stateProvider
			.state("inbox", {
				views:{
					'view1':{
						template:"<h2>View1 Page</h2>",
						controller:function($scope){}
					},
					"view2":{
						template:"<h2>View2 Page</h2>",
						controller:function($scope){}
					},
					"view3":{
						template:"<h2>View3 Page</h2>",
						controller:function($scope){}
					}
				}
			})
	})