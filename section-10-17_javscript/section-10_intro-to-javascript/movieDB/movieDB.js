console.log("CONNECTED!")

// **** create an object with movies ****


var movies = [
	{
		title: "In Bruges",
	 	hasWatched: true,
	 	rating: 4
	},
	{
		title: "The Lion King",
		hasWatched: true,
		rating: 5
	},
	{
		title: "The Godfather",
		hasWatched: true,
		rating: 5
	},
	{
		title: "Barton Fink",
		hasWatched: false,
		rating: 4.3
	}
]

// **** for loop to create a sentence for each movie object ****

movies.forEach(function(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	console.log(result)
})

// **** clean up that whole process by calling a function in your for loop instead **** //

function buildString(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	return result;
}

movies.forEach(function(movie){
	console.log(buildString(movie));
});