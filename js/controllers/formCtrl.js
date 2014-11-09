function formCtrl($scope, $location, $routeParams){
	$scope.buttonEnabled = true;

	$scope.validMail = function(email){
		email = email || $scope.email;
		email = email.toLowerCase();
		return email.match(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/);
	};
	$scope.sendMail = function(){
		if(!$scope.buttonEnabled)return;
		$scope.firstCheck = true;

		// yup, there's also a server side check.
		if(!$scope.aName || !$scope.email || !$scope.validMail($scope.email) ||
			!$scope.subject || !$scope.message){
			return;
		}
		$scope.buttonEnabled = false;
		var url = "php/handlers/mail.php";
		var data = {
			"name" : $scope.aName,
			"mail" : $scope.email,
			"subject" : $scope.subject,
			"message" : $scope.message

		};
		$.post(url, data, mailCb, 'json');
	};

	var mailCb = function(response){
		if(response.state === "succes"){
			$scope.responseMessage = "Thanks for your email, I will reply as soon as possible!";
			$scope.mailDone = true;
			$scope.$apply();
			return;
		}
		$scope.$apply(function () {
			$scope.responseMessage = response.message;
		});
		$scope.buttonEnabled = true;
	};
}