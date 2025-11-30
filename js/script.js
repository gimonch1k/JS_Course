const numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

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

if (personalMovieDB["count"] < 10) {
  console.log("Просмотрено мало фильмов");
} else if (personalMovieDB["count"] >= 10 && personalMovieDB["count"] < 30) {
  console.log("Вы классический зритель!");
} else if (personalMovieDB["count"] >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Error");
}
console.log(personalMovieDB);

const num = 13.01;
console.log(Math.round(num));
