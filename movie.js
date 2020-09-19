var movies=[
{
	title:"In Time",
	watched:true,
	rate:5
},
{
	title:"Frozen 2",
	watched:false,
	rate:4.5
}]
movies.forEach(function(movie){
	var result="You have ";
	if(movie.watched){
		result+="watched ";
	}
	else{
		result+="not seen ";
	}
	result+="\"" + movie.title +"\" - ";
	result+=movie.rate + " stars";
	console.log(result)
})