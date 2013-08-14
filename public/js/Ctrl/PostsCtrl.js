define(['angular'], function(angular) {
	return function(app) {
		return app.controller('PostsCtrl', function ($scope) {
			var apiKey = 'AIzaSyD6waxLgpwHd0QXrExGwBMigr-01mQ4Lr4';
			var googlePlusUrl = 'https://www.googleapis.com/plus/v1/people/107744372254752109523/activities/public?&key=' + apiKey + '&fields=items(title,published,updated,url,actor,verb,object)&callback=define';

			$scope.Posts = [];

			$scope.loadGooglePlus = function() {
				require([googlePlusUrl], function(data) {
					$scope.Posts = data.items;
					apply();
				});
			};

			$scope.LoadReplies = function(post) {
				require([post.object.replies.selfLink + '?key=' + apiKey + '&callback=define'], function(data) {
					$scope.Posts.map(function(p, i) {
						if (p.url == post.url) {
							p.object.replies.items = data.items;
						}
						return p;
					});
					apply();
				});
			};

			$scope.RepliesLoaded = function(post) {
				return angular.isArray(post.object.replies.items);
			};


			var apply = function() {
				console.log('Posts', $scope.Posts);
				$scope.$apply();
			};

			var init = function() {
				$scope.loadGooglePlus();
			};

			init();
		});
	};
});