const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB["count"] = +prompt("Сколько фильмов вы просмотрели?", "");

    while (
      personalMovieDB["count"] == "" ||
      personalMovieDB["count"] == null ||
      isNaN(personalMovieDB["count"])
    ) {
      personalMovieDB["count"] = +prompt("Сколько фильмов вы просмотрели?", "");
    }
  },
  rememberMyFilm: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
        b = prompt("На сколько его оцените?", "").trim();

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB["count"] < 10) {
      console.log("Просмотрено мало фильмов");
    } else if (
      personalMovieDB["count"] >= 10 &&
      personalMovieDB["count"] < 30
    ) {
      console.log("Вы классический зритель!");
    } else if (personalMovieDB["count"] >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Error");
    }
  },
  showMyDB: function () {
    if (personalMovieDB["privat"] === false) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB["privat"]) {
      personalMovieDB["privat"] = false;
    } else {
      personalMovieDB["privat"] = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      const genres = prompt(`Ваш любимый жанр под номером ${i}`);
      if (genres === "" || genres === null) {
        console.log("Вы ввели некорректные данные или не ввели их вообще");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genres;
      }
    }
    personalMovieDB["genres"].forEach((item, i) => {
      console.log(`Любимый жанр №${i + 1} - это ${item}`);
    });
  },
};
