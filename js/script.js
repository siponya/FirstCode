'use strict';

let numberOfFiles;

function start() {
    numberOfFiles = +prompt('Сколько фильмов вы посмотрели', '3');
    while (numberOfFiles == '' || numberOfFiles == null || isNaN(numberOfFiles)) {
        numberOfFiles = +prompt('Сколько фильмов вы посмотрели', '3');
    }
}

start();

const personalMovieDB = {
    count: numberOfFiles,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    let movieName = '',
    movieRating = 0;

    for (let i = 1; i < 3; i++) {
        movieName = prompt('Один из последних просмотренных фильмов?', '');
        movieRating = prompt('На сколько оцените его?', '');
        if (movieName != null && movieRating != null && movieName != '' && movieRating != '' && movieName.length < 50) {
            personalMovieDB.movies[movieName] = movieRating;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено мало фильмов!')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель!')
    } else if (personalMovieDB.count >= 30) {
        alert('Вы кономан!')
    } else {
        alert('Ошибка!')
    }
};    

detectPersonalLevel();

function ShowMyDB() {   
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        genre = prompt(`Ваш любимый жанр под номером ${i}`);
        if (genre != null && genre != '') {
            personalMovieDB.genres[i-1] = genre;
        }
        else i--;
    }
}

writeYourGenres();