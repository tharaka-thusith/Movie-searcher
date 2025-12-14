//abe5cc73
let apiKey="abe5cc73"
function search(){
    let movieName=document.getElementById("movie").value;
    console.log(movieName);

    let url="https://www.omdbapi.com/?apikey="+apiKey+"&t="+movieName
    console.log(url)

    let httpRequst=new XMLHttpRequest()
    httpRequst.open("GET",url)
    httpRequst.responseType="json"
    httpRequst.send()

    httpRequst.onload=function(){
        let movie = httpRequst.response
        console.log(movie)
        document.getElementById("title").innerHTML=movie.Title
        document.getElementById("poster").src=movie.Poster
        document.getElementById("Actors").innerHTML="Actors: " + movie.Actors
        document.getElementById("plot").innerHTML=movie.Plot
        document.getElementById("director").innerHTML="Director: " + movie.Director
        document
        document.getElementById("imdbRating").innerHTML="IMDB Rating: " + movie.imdbRating
    }
}