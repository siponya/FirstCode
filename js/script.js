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

   
    
    let result = '';
    const length = 7;

    for (let i = 1; i < length; i++) {

        for (j = 0; j < i; j++) {
            result += '*';
        }

        result += '\n';
    }

    console.log(result);