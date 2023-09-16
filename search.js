$(document).ready(() => {
    $("#searchForm").on('submit', (e) => {
      e.preventDefault();
      let searchText = $("#searchText").val();
      getMovies(searchText);
    });
  });
  
  function getMovies(searchText){
    //make request to api using axios
    // Make a request for a user with a given ID
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US&query=${searchText}`)
      .then(function (response) {
        let movies = response.data.results;
        localStorage.setItem("movies",JSON.stringify(movies))
        let output = '';
        $.each(movies, (index, movie) => {
          output+=`
            <div class="col-md-3">
              <div class="well text-center">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                <h5>${movie.title}</h5>
                <a onclick="movieSelected('${index}')" class="btn btn-primary" href="#">Movie Details</a>
              </div>
            </div>
          `;
        });
        $('#movies').html(output);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  function movieSelected(movie){
    // localStorage.setItem("movie",JSON.stringify(movie))
    window.location ='detail.html?id='+movie;
    return false;
  }
  
  function getMovie(){
    let movieId = sessionStorage.getItem('movieId');
    // Make a request for a user with a given ID
    axios.get("https://api.themoviedb.org/3/movie/" + movieId + "?api_key=3fd2be6f0c70a2a598f084ddfb75487c")
      .then(function (response) {
      let movie = response.data;
      //console.log(movie);
      let output = `
          <div class="row">
            <div class="col-md-4">
              <img src="${movie.poster_path}" class="thumbnail">
            </div>
            <div class="col-md-8">
              <h2>${movie.title}</h2>
              <ul class="list-group">
                <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
                <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
                <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
                <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
                <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
                <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
                <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="well">
              <h3>Plot</h3>
              ${movie.Plot}
              <hr>
              <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
              <a href="index.html" class="btn btn-default">Go Back To Search</a>
            </div>
          </div>
      `;
      $('#movie').html(output);
      })
      .catch(function (error) {
        console.log(error);
      });
  }