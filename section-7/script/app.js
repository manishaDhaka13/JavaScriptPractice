const startAddMoviebtn = document.getElementById("add-movie");
const AddMovie = document.getElementById("add-movie-section");
const backdrop = document.getElementById("backdrop");
const movieTitle = document.getElementById("movie-title");
const imageUrl = document.getElementById("image-url");
const rating = document.getElementById("your-rating");
const cancelButton = document.getElementById("btn-cancel");
const addButton = document.getElementById("btn-success");
const ul = document.getElementById("unorderd-list");
const discription = document.getElementById("discription");
const deleteMovie = document.getElementById("delete-movie-section");

const newMovies = [];

const AddMovieSection = () => {
  AddMovie.classList.add("visible");
};

const closeAddMovieSection = () => {
  AddMovie.classList.remove("visible");
};

const closeDeleteMovieSection = () => {
  backdropToggle();
  deleteMovie.classList.remove("visible");
};

const backdropToggle = () => {
  backdrop.classList.toggle("visible");
};

const clearUi = () => {
  rating.value = "";
  movieTitle.value = "";
  imageUrl.value = "";
};

const updateUI = () => {
  if (newMovies.length === 0) {
    discription.style.display = "flex";
  } else {
    discription.style.display = "none";
  }
};

const backdropHandler = () => {
  closeAddMovieSection();
  closeDeleteMovieSection();
  clearUi();
  updateUI();

  // toggleMovie();
};

const startAddMovieHandler = () => {
  backdropToggle();
  AddMovieSection();
  discription.style.display = "none";
};
const deleteNewMovie = (id) => {
  let index = 0;

  for (num of newMovies) {
    if (num.id === id) {
      break;
    }
    index++;
  }
  newMovies.splice(index, 1);
  const ul = document.getElementById("unorderd-list");
  // ul.children[index].remove();
  ul.removeChild(ul.children[index]);
  backdropToggle();
  deleteMovie.classList.remove("visible");
  updateUI();
};

const deleteMovieHandler = (id) => {
  const cancelDeleteMovie = document.getElementById("delete-cancel");
  let confirmDeleteMovie = document.getElementById("delete-yes");
  backdropToggle();
  deleteMovie.classList.add("visible");
  cancelDeleteMovie.removeEventListener("click", closeAddMovieSection);
  cancelDeleteMovie.addEventListener("click", closeDeleteMovieSection);
  confirmDeleteMovie.replaceWith(confirmDeleteMovie.cloneNode(true));
  confirmDeleteMovie = document.getElementById("delete-yes");
  confirmDeleteMovie.addEventListener("click", deleteNewMovie.bind(null, id));
};

const renderNewMovieElement = (id, newTitle, newImageUrl, newRatingValue) => {
  const newLi = document.createElement("li");
  newLi.className = "list-item";
  newLi.innerHTML = `<img src="${newImageUrl}" alt="movie-image"/>
<div class="movie-info">
 <p class="movie-name">${newTitle}</p>
 <span class ="movie-rating">${newRatingValue}/5 Stars</span>
 </div>`;

  ul.append(newLi);
  newLi.addEventListener("click", deleteMovieHandler.bind(null, id));
  updateUI();
};

const addButtonHandler = () => {
  let ratingValue = parseInt(rating.value);
  let titleValue = movieTitle.value;
  let imageUrlValue = imageUrl.value;

  if (!(rating.value && movieTitle.value && imageUrl.value)) {
    alert("please fill all  enteries ");
    return;
  } else if (ratingValue > 5 || ratingValue < 0) {
    alert("please rate out of 5");
    return;
  }

  closeAddMovieSection();
  backdropToggle();

  const id = Math.random() * 10;
  const movies = {
    id: id,
    title: titleValue,
    imgUrl: imageUrlValue,
    ratingMovie: ratingValue,
  };
  newMovies.push(movies);
  renderNewMovieElement(id, titleValue, imageUrlValue, ratingValue);
  updateUI();
  clearUi();
};

startAddMoviebtn.addEventListener("click", startAddMovieHandler);
backdrop.addEventListener("click", backdropHandler);
addButton.addEventListener("click", addButtonHandler);
cancelButton.addEventListener("click", () => {
  closeAddMovieSection();
  backdropToggle();
  clearUi();
  updateUI();
});
