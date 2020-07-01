var services = angular.module('services', ['ng']);
/*services.factory('CacheService', function($cacheFactory) {
	return $cacheFactory('CacheService');
});*/

var directives = angular.module('directives',['services']);
directives.directive('scroll', slider);
directives.directive('clickSlider', clickSlider);
directives.directive('draggable', ['$document', draggable]);
directives.directive('backButton', goBack);
directives.directive('scrollTop', scrollTop);

var mainCtrl = angular.module('mainCtrl', ['ngRoute','services','directives'])
	.config(router)
	.run(run);

/*
mainCtrl.factory('DataService', function(CacheService, CacheService) {
    return {
        getItem: function(key) {
			return CacheService.get(key)|| null;
        },
        setItem: function(folderKey, key, value) {
			CacheService.put(key, value);
        }
    };
});*/

function router($routeProvider){
	$routeProvider
		.when('/', {templateUrl:'partials/about.html'})
		.when('/404', {templateUrl:'partials/404.html', controller : 'pageCtrl'})
		.when('/current', {templateUrl:'partials/current.html', controller : 'pageCtrl'})
		.when('/portfolio', {templateUrl:'partials/portfolio.html', controller : 'pageCtrl'})
		.when('/:page/:item', {templateUrl:'partials/itemView.html', controller : 'pageCtrl'})
		.when('/:anything', {templateUrl:'partials/404.html', controller : 'pageCtrl'});
}

function run($rootScope, $location, $window){
	$rootScope.headerMarginTop = 0;
	$rootScope.go = function(path){
		$location.path(path);
	};
	$rootScope.go_external = function(url){
		$window.open(url, "_blank")
	};
}

/*Directive*/
function slider(){
	return {
		restrict: 'CA',
		link: function($scope, elem, attr, ctrl) {
			var scrollPos = 0;
			var raw = elem[0];
			elem.bind('scroll', function () {
				/* maybe available in version 2
				if(raw.scrollTop > scrollPos) {
					if($scope.headerMarginTop > -56)
						$scope.headerMarginTop -= 4;
				}else if($scope.headerMarginTop !== 0){
					$scope.headerMarginTop = 0; // must fit in 56/4
				}*/
				scrollPos = raw.scrollTop;
				var slideWidth = raw.offsetWidth - 100; //minus sliderWidth
				var scrollPerc = raw.scrollTop / (raw.scrollHeight-raw.offsetHeight);
				var margin = scrollPerc * slideWidth;
				$scope.$parent.sliderMargin = margin; /*do not use a own sliderMargin,  use parent*/
				$scope.$parent.$apply();
			});
		}
	};
}
function clickSlider(){
	return {
		restrict: 'CA',
		link: function($scope, elem, attr, ctrl) {
			elem.bind('click', function (event) {
				if(!$scope.openMenu){
					var newSliderMiddle = event.pageX - (100/2);
					newSliderMiddle = Math.min($('.container').width()- 100, newSliderMiddle);
					$scope.sliderMargin = Math.max(newSliderMiddle, 0);
					$scope.$apply();
					var perc = $scope.sliderMargin / ($('.container').width() - 100);
					var containerHeight = $('.container').height();
					var scrollTo = ($('.container')[0].scrollHeight - containerHeight )* perc;
					$('.container').scrollTop(scrollTo);
				}
			});
		}
	};
}
function draggable($document){
	return {
		restrict: 'CA',
		link: function($scope, element, attr, ctrl) {
			var startX = 0, x = 0, offset = 0, containterH = 0, containerScrH = 0, containerBodyW = 0;
			if(!$scope.openMenu){
				element.on('mousedown', function(event) {
					// Prevent default dragging of selected content
					event.preventDefault();
					startX = event.pageX - x;
					offset = event.offsetX;
					containerH = $('.container').height();
					containerScrH = $('.container')[0].scrollHeight;
					containerBodyW = $('.container').width();
					$document.on('mousemove', mousemove);
					$document.on('mouseup', mouseup);
				});
			}
			function mousemove(event) {
				x = event.pageX - offset;
				x = Math.max(Math.min(containerBodyW - 100,x),0);
				$scope.sliderMargin = x;
				$scope.$apply();
				var perc = $scope.sliderMargin / (containerBodyW - 100);
				var screenHeight = containerH;
				var scrollTo = (containerScrH - screenHeight )* perc;
				$('.container').scrollTop(scrollTo);
			}

			function mouseup() {
				$document.off('mousemove', mousemove);
				$document.off('mouseup', mouseup);
			}
		}
	};
}
function goBack(){
	return {
		restrict: 'CA',
		link: function(scope, element, attrs) {
			element.bind('click', function () {
				history.back();
				scope.$apply();
			});
		}
	};
}
function scrollTop(){
	return {
		restrict: 'CA',
		link: function($scope, elem, attr, ctrl) {
			elem.bind('click', function (event) {
				$('.container').animate({
					scrollTop: 0
				});
			});
		}
	};
}
