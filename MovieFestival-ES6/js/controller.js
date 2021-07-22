let festival = new Festival();

let inputTitle = document.getElementById('title');
let inputLength = document.getElementById('length');
let optionGenre = document.getElementById('genre');
let createMovieButton = document.getElementById('create-movie');
let paraErrorMessage = document.getElementById('para-error-message');
let listOfMovies = document.getElementById('listOfMovies');
let movieSelect = document.getElementById('movie-select');
let createProgram = document.getElementById('create-program');
let inputDate = document.getElementById('input-date');
let programError = document.getElementById('program-error');
let programSelect = document.getElementById('program-select');
let programList = document.getElementById('program-list');
let addMovieToProgram = document.getElementById('add-movie-to-program');



function createMovieFunction() {
    let titleValue = inputTitle.value;
    let lengthValue = inputLength.value;
    let genreValue = optionGenre.value;


    if (!titleValue || !lengthValue || !genreValue) {
        paraErrorMessage.textContent = 'You must fill all of the fields !';
        return;
    }

    paraErrorMessage.textContent = '';

    let movie = new Movie(titleValue, lengthValue, genreValue);
    festival.listOfAllMovies.push(movie);
    let indexOfMovie = festival.listOfAllMovies.length - 1;
    console.log(movie);

    let li = document.createElement('li');
    li.textContent = movie.getData();
    listOfMovies.append(li);

    let movieOptionElement = document.createElement('option');
    movieOptionElement.textContent = movie.title;
    movieOptionElement.setAttribute('value', indexOfMovie);
    movieSelect.appendChild(movieOptionElement);


    console.log(festival);
}


array = [];
function createProgramFunction() {
    let programDate = inputDate.value;
    console.log(programDate);



    let date = new Date(programDate);

    if (date.getTime() < (Date.now() - 86400000)) {
        programError.textContent = 'Invalid date !';
        console.log(Date.now());
        return;
    }
    if (array.includes(date.getTime())) {
        programError.textContent = 'That program already exists !';
        return;
    }

    if (!programDate) {
        programError.textContent = 'Date input is requared !';
        return;
    }

    programError.textContent = '';


    let program = new Program(date);
    festival.listOfprograms.push(program);
    let index = festival.listOfprograms.length - 1;

    let li = document.createElement('li');
    li.setAttribute('id', 'id-' + index);
    li.textContent = program.getData();
    programList.appendChild(li);


    let optionProgram = document.createElement('option');
    optionProgram.setAttribute('value', index);
    optionProgram.setAttribute('id', 'option-' + index);
    optionProgram.textContent = program.getData();
    programSelect.appendChild(optionProgram);

    array.push(date.getTime());



    console.log(array);
    console.log(festival);


}

function addMovieToProgramFunction() {

    let movieIndex = movieSelect.value;
    let programIndex = programSelect.value;
    let movie = festival.listOfAllMovies[movieIndex];
    let program = festival.listOfprograms[programIndex];
    let li = document.querySelector('#id-' + programIndex);
    let option = document.querySelector('#option-' + programIndex);

    program.addMovie(movie);
    li.textContent = program.getData();
    option.textContent = program.getData();

}



createMovieButton.addEventListener('click', createMovieFunction);
createProgram.addEventListener('click', createProgramFunction);
addMovieToProgram.addEventListener('click', addMovieToProgramFunction);
