
const list = document.querySelector('#results');
console.log("In movies.js");
const insertMovies = (data) => {
  data.Search.forEach((result) => {
    const movie = `<li class="card">
      <img src="${result.Poster}" alt="" />
      <p>${result.Title}</p>
    </li>`;
    list.insertAdjacentHTML('beforeend', movie);
  });
};

const fetchMovies = (query) => {
  // fetch(`http://www.omdbapi.com/?s=${query.toLowerCase()}&apikey=adf1f2d7`)
  fetch(`https://www.omdbapi.com/?s=${query.toLowerCase()}&apikey=a002f3ac`)
    .then(response => response.json())
    .then(insertMovies);
};

  const updateResultsList = (event) => {
    // console.log(event);
    event.preventDefault();
    list.innerHTML = '';
    const input = document.querySelector('.form-control');
    fetchMovies(input.value);
  }
  
  export { fetchMovies, updateResultsList };