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
      
      $('#movie').html(output);
      })
      .catch(function (error) {
        console.log(error);
      });
  }