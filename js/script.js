let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while(numberOfFilms == '' || numberOfFilms == null ||  isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let q='', h = '';
console.log(numberOfFilms);

function rememberMyFilms(){
    for(let i = 1; i <= numberOfFilms; i++){
        q = prompt('Один из послених просмотренных фильмов?', '');
        h = prompt('На сколько оцените его?', '');
        if (q != null && h !=null && q != '' && h != '' && q.length <50){
            personalMovieDB.movies[q] = h; 
        }else{
            i--; 
        }
           
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log('Просмотренно довольно мало');
    } else if(personalMovieDB.count <30){
        console.log('Вы классический зритель');
    }else if (personalMovieDB.count >29){
        console.log('Вы киноман');
    }else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(){
    if (personalMovieDB.private == false){
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres(){
    for(let i = 1; i<=3; i++ ){
        personalMovieDB.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();