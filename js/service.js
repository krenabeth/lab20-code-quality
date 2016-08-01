var app = angular.module("myApp");

app.controller('myCtrl', function($scope) {
		// $scope.quote = {};
  //           $scope.getQuote = function() {
  //               $scope.quote = quotes[Math.floor(Math.random()*quotes.length)];
  //           };

  $scope.quotes = [
	{
		poetry: 'If I feel physically as if the top of my head were taken off, I know that is poetry.',
		poet: 'Emily Dickinson'
	},
	{
		poetry: 'Poetry is the journal of a sea animal living on land, wanting to fly in the air.',
		poet: 'Carl Sandburg'
	},
	{
		poetry: 'Poetry is everywhere; it just needs editing.',
		poet: 'James Tate'
	},
	{
		poetry: 'The courage of the poet is to keep ajar the door that leads into madness.',
		poet: 'Christopher Morley'
	},
	{
		poetry: 'Poetry began when somebody walked off of a savanna or out of a cave and looked up at the sky with wonder and said, “Ahhh.” That was the first poem.',
		poet: 'Lucille Clifton'
	},
	{
		poetry: 'The true poem rests between the words.',
		poet: 'Vanna Bonta'
	},
	{
		poetry: 'Poetry is an act of peace.',
		poet:'Pablo Neruda'
	},
	{
		poetry: 'To be a poet is a condition, not a profession.',
		poet: 'Robert Frost'
	}
  ];
        
});


