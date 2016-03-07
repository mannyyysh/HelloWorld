(function(){
	var app = angular.module('helloworld',[]);
	app.directive("appHeader",function(){
		return {
			restrict:'E',
			templateUrl:"templates/header.html"
		}
	});
	app.directive("appFooter",function(){
		return {
			restrict:'E',
			templateUrl:"templates/footer.html"
		}
	});
	app.directive("zipDetails",function(){
		return {
			restrict:'E',
			templateUrl:"templates/zipdetails.html"
		}
	});
})();
