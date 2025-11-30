let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilm() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько его оцените?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

rememberMyFilm();

function detectPersonalLevel() {
  if (personalMovieDB["count"] < 10) {
    console.log("Просмотрено мало фильмов");
  } else if (personalMovieDB["count"] >= 10 && personalMovieDB["count"] < 30) {
    console.log("Вы классический зритель!");
  } else if (personalMovieDB["count"] >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Error");
  }
}

detectPersonalLevel();

function showMyDB() {
  if (personalMovieDB["privat"] === false) {
    console.log(personalMovieDB);
  }
}

showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genres = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i - 1] = genres;
  }
}

writeYourGenres();
