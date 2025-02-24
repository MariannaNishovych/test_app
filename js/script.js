'use strict';


let numberOfFilms;

function start () {
    numberOfFilms = +prompt('How many films did you watch?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films did you watch?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of the last films you watched?', ''),
                b = prompt('How much would you rate it?', '');
    
                if (a != '' && b != '' && a != null && b != null && a.length < 50) {
                    console.log('done');
                    personalMovieDB.movies[a] = b;
                } else {
                    console.log('error');
                    i--;
                }        
    };
}

rememberMyFilms();


function detectPersonalLevel (){
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    };
};

detectPersonalLevel();

function showMyDB (hidden) {
    if(!hidden) {
        console.log(personalMovieDB)
    }
};

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
for (let i = 1; i <= 3; i++) {
    const genres = prompt(`Ваш любимый жанр под номером ${i}`)
personalMovieDB.genres[i - 1] = genres;
}
}

writeYourGenres();




