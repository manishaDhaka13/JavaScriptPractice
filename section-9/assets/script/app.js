const movies = [];

// const addMovieBtnHandler = () => {
//   const title = document.getElementById("fav-movie").value;
//   const extraName = document.getElementById("fav-movie-name").value;
//   const extraValue = document.getElementById("fav-movie-value").value;

//   if (
//     title.trim() === "" ||
//     extraName.trim() === "" ||
//     extraValue.trim() === ""
//   ) {
//     alert("fill all entry");
//     return;
//   }
//   const movie = {
//     // title:title,    if the key value are same the we ca write like this the value is variale here ot a strig
//     title,
//     [extraName]: extraValue,
//     id: Math.random() * 100,
//   };
//   movies.push(movie);
//   console.log(movies);
//   clearInput();
//   renderMovie(movie, extraName);
// };

// const clearInput = () => {
//   document.getElementById("fav-movie").value = "";
//   document.getElementById("fav-movie-name").value = "";
//   document.getElementById("fav-movie-value").value = "";
//   document.getElementById("filter-movie").value = "";
// };

// const renderMovie = (movie, extraName) => {
//   filterList.classList.remove("visible");
//   movieList.classList.add("visible");
//   const newLi = document.createElement("li");
//   newLi.className = "list-item";
//   newLi.innerHTML = ` ${movie.title}-${extraName}:${movie[extraName]}`;
//   console.log(newLi);
//   movieList.append(newLi);
//   console.log(movieList);
// };

// const renderFilterMovie = (searchMovie) => {
//   const title = searchMovie.title;

//   let extraName;
//   for (const key in searchMovie) {
//     if (key != "title" && key != "id") {
//       extraName = key;
//       break;
//     }
//   }
//   let extraValue = searchMovie[extraName];
//   movieList.classList.remove("visible");
//   filterList.classList.add("visible");
//   const newLi = document.createElement("li");
//   newLi.className = "list-item";
//   newLi.innerHTML = "";
//   newLi.innerHTML = ` ${title}-${extraName}:${extraValue}`;
//   console.log(newLi);
//   filterList.append(newLi);
//   clearInput();
// };

// const searchMovieBtnHandler = () => {
//   const filterMovieTitle = document.getElementById("filter-movie").value;
//   let filterMovie;
//   if (filterMovieTitle.trim() === "") {
//     alert("write the title");
//     return;
//   }
//   for (const movie of movies) {
//     if (movie.title === filterMovieTitle) {
//       filterMovie = movie;
//       break;
//     }
//   }
//   if (filterMovie) {
//     renderFilterMovie(filterMovie);
//   } else {
//     alert("no movie found");
//   }
// };

// addMovieBtn.addEventListener("click", addMovieBtnHandler);
// searchMovieBtn.addEventListener("click", searchMovieBtnHandler);

const renderMovies = (filter = "") => {
  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  movieList.innerHTML = "";
  const filterMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));
  filterMovies.forEach((movie, idx, movies) => {
    const newLi = document.createElement("li");
    // newLi.textContent = movie.info.title;
    // let text = movie.info.title + "-";
    // object destructing
    // to access the property value with just the key name
    // we have to destruct the object and give the exaxt same key name
    //with this we can access it like name than obj.name
    const { info, ...otherPropes } = movie;

    // if we have to give another name then
    //const {keyName:new name}=obj;

    // const { title: movieTitle } = info;

    // let text = movieTitle + " ";
    // let text = movie.getFormattedTitle() + " ";

    let { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    //getFormattedTitle.bind(movie) does not execute write now
    //but execute when we call getFormattedTitle()
    //this refer in getFormattedTitle function to bind(first parameter(refer to this) )
    // let text = getFormattedTitle() + " ";

    // call and apply execute function write away;
    // let text = getFormattedTitle.call(movie) + " ";
    // call take second argiment as array;
    let text = getFormattedTitle.apply(movie) + " ";
    // this refer to movie here

    for (const key in info) {
      if (key !== "title") {
        text = text + `${key}: ${info[key]}`;
      }
    }
    newLi.textContent = text;
    movieList.append(newLi);
  });
};

const addMovieBtnHandler = () => {
  const title = document.getElementById("fav-movie").value;
  const extraName = document.getElementById("fav-movie-name").value;
  const extraValue = document.getElementById("fav-movie-value").value;

  if (
    // title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    alert("fill all entry");
    return;
  }

  const newMovie = {
    // info: {
    //   title,
    //   [extraName]: extraValue,
    // },
    // we use setter to set some value
    // we use geter to get that value
    // if use get and set then we can only set value using set
    // and get value using get
    // we use them for security purpose  and to set some default
    // we rarely use them
    // we can use set and get like a property of a object
    info: {
      set title(val) {
        if (val.trim() === "") {
          this._title = "default"; // here we use _ because it's internal property
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    // getFormattedTitle: function () {
    //   return this.info.title;
    // },
    getFormattedTitle() {
      console.log(this);

      // this refer to movie which is responsible for calling it
      return this.info.title;
    },
  };

  //in a fuction with function  key word or without it this inside that
  //function refer to the one who is responsible for calling
  //it .it is usually refer to the obj before .
  //like movie.getFormattedTitle() in it this refer to movie
  //if we don't specify it then this became undefine;

  //in arrow function they does not know this and this inside arrow
  // function refer to what global this refer
  //in arrow function this refer to window object

  newMovie.info.title = title; // we can assign as property using set
  console.log("hiii", newMovie.info.title); // we access it like this using get
  movies.push(newMovie);
  renderMovies();
};

const searchMovieBtnHandler = () => {
  const filterTitle = document.getElementById("filter-movie").value;
  renderMovies(filterTitle);
  console.log(this); // this refer to window object
};

addMovieBtn.addEventListener("click", addMovieBtnHandler);
searchMovieBtn.addEventListener("click", searchMovieBtnHandler);
