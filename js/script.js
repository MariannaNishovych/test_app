'use strict';

// let number = 5;

// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// console.log(typeof 123n);

const numberOfFilms = +prompt('How many films do you watch?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const a = prompt('One of the last films you watched?', ''),
      b = prompt('How much would you rate it?', ''),
      c = prompt('One of the last films you watched?', ''),
      d = prompt('How much would you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);