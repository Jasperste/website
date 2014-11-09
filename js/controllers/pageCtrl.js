function pageCtrl($scope, $location, $routeParams, $http, $rootScope, $sce){
	$scope.detailItem = {};
	var page = $routeParams['page'] || $location.path().substring(1);
	var item = $routeParams['item'] || undefined;

	if(page === "current"){
		if(!$rootScope.CurrentData){ //get data if there's no
			$http.get('js/data/current.js')
				.success(function(data) {
					$rootScope.currentData = data;
					if(item) //set item with the new data
						setItem($rootScope.currentData, item);
				});
		}else if(item)
			setItem($rootScope.currentData, item);
	}
	if(page === "portfolio"){
		if(!$rootScope.portfolioData){
			$http.get('js/data/portfolio.js')
				.success(function(data) {
					$rootScope.portfolioData = data;
					if(item)
						setItem($rootScope.portfolioData, item);
				});
		}else if(item)
			setItem($rootScope.portfolioData, item);
	}
	
	function setItem(array, item){
		for(var i in array){
			if(array[i].title === item){
				$scope.detailItem = array[i];
				return;
			}
		}
		$location.path("404");
	}
	$scope.trustSrc = function(src) {
		return $sce.trustAsResourceUrl(src);
	};
}