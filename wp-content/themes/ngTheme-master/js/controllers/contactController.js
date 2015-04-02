app.controller("contactController", ["$scope", "$http", "SITE_INFO", function($scope, $http, SITE_INFO) {
	console.log("contactController is alive!");

	$scope.result = 'hidden';

	$scope.submitButtonDisabled = false;
	$scope.submitted = false;

	$scope.submitForm = function(contactForm){
		$scope.submitted = true;
		$scope.submitButtonDisabled = true;

		console.log("formData: ", $scope.formData)

		if(contactForm.$valid) {

			$http({
				method	: 'POST',
				url		: SITE_INFO.http_root+'wp-content/themes/ngTheme-master/php/contactForm.php',
				data	: $scope.formData,
				headers	: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).success(function(data) {
				console.log("contact form data: ", data);
				
				$scope.resultMessage = data.message;
				
				if(data.success) {
					$scope.submitButtonDisabled = true;
					$scope.result = 'bg-success';
				} else {
					if(typeof data.errorInfo != 'undefined') {
						console.log("PHPMailer errorInfo: ", data.errorInfo);
					}
					$scope.submitButtonDisabled = false;
					$scope.result = 'bg-danger';
				}
			});
		} else {
			$scope.submitButtonDisabled = false;
			$scope.resultMessage = "Your message couldn't be sent. Please fill out all the fields."
			$scope.result = 'bg-danger'
		}
	}
}]);