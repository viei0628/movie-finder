import { fetchMovies, updateResultsList } from './movies.js';
import { initSortable } from './plugins/init_sortable.js'; // <-- add this
import './css/style.css';

fetchMovies('harry potter');
initSortable(); // <-- add this

// const form = document.querySelector('#search-form');
const form = document.querySelector("#search-movies");
form.addEventListener('submit', updateResultsList);