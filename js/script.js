'use strict';

const numberOfFiles = +prompt('Сколько фильмов вы посмотрели', '3');
const personalMovieDB = {
    count: numberOfFiles,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let movieName = '',
    movieRating = 0;

    movieName = prompt('Один из последних просмотренных фильмов?', '');
    movieRating = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[movieName] = movieRating;

    movieName = prompt('Один из последних просмотренных фильмов?', '');
    movieRating = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[movieName] = movieRating;

    console.log(personalMovieDB);
