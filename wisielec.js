let body = document.querySelector('body');
let setWords = ['Gumball', 'Darwin', 'Anais', 'Penny', 'Tobias', 'Bobert', 'Jajogłowi', 'Rocky', 'Nicole', 'Richard', 'Watterson', 'Larry'];
let placeholderString;
let countBox = document.querySelector('#countBox');
let keybords = document.querySelector('table');
keybords.style.display = 'none';
let cells = keybords.querySelectorAll('td');
let guessLetter;

let word;

let button = document.querySelector('button');
button.style.cursor = 'pointer';
placeholder.style.display = 'none';
function randomize(words) {
    return words[Math.floor(Math.random() * setWords.length)];
}
let full_word = randomize(setWords);
let full_word_length = full_word.length;

let buttonBox = document.querySelector('#button');
let placeholderStringBig;

button.addEventListener('click', function () {
    count = 0;
    countBox.textContent = 'Pozostało prób: 10';
    countBox.style.display = 'block';
    keybords.style.display = 'block';
    placeholder.style.display = 'block';
    placeholder.style.width = '80%';

    full_word = randomize(setWords);
    full_word = full_word.toLowerCase();

    let placeholderArray = new Array(full_word.length).fill('_');
    placeholderString = placeholderArray.join(' ');

    placeholder.value = placeholderString;
    buttonBox.removeChild(button);
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];

        cell.style.cursor = 'pointer';
        cell.style.backgroundColor = 'grey';
        cell.style.cursor = 'pointer';
        cell.removeEventListener('click', cellStyle);
        cell.removeEventListener('click', check);
        cell.addEventListener('click', check);
        cell.addEventListener('click', cellStyle);

    }

});

let count;
function clear() { input.value = ''; }
placeholder.disabled = true;
let answer;
let letter;
function check(e) {

    letter = full_word.split('');
    //console.log(letter);

    answer = full_word.split('');
    //while (i<letter.length){}
    guessLetter = e.target.textContent;
    console.log(guessLetter);

    for (let i = 0; i < letter.length; i++) {


        // console.log(guessLetter);
        // console.log(letter[i]);
        if (guessLetter === letter[i]) {
            placeholderString = placeholderString.split(' ');
            placeholderString[i] = guessLetter;

            placeholderString = placeholderString.join(' ');



        }




        let firstLetter = placeholderString[0];
        let bigFirstLetter = firstLetter.toUpperCase();
        placeholderStringBig = placeholderString.replace(firstLetter, bigFirstLetter);
        placeholder.value = placeholderStringBig;
        if (placeholderString.toLowerCase() === answer.join(' ')) { win(); }
    }
    answer = answer.join(' ');
    if (answer.indexOf(guessLetter) === -1) { count += 1; }
    countBox.textContent = 'Pozostało prób: ' + (10 - count);
    if (count >= 10) { loose(); }
    //console.log(count);

}

function win() {
    swal({
        title: "Brawo!",
        text: "Jesteś kozak",
        icon: "success",
        button: "Jestem kozak!",
    });
    placeholder.value = '';
    buttonBox.appendChild(button);
    placeholder.style.display = 'none';
    keybords.style.display = 'none';
    countBox.style.display = 'none';




}
function loose() {

    answer = answer.replace(answer[0], answer[0].toUpperCase());
    swal({
        title: "Jesteś gamoń!",
        text: 'Prawidłowa odpowiedź to "' + answer + '"!',
        icon: "error",
        button: "Jestem gamoń",
    });
    placeholder.value = '';
    buttonBox.appendChild(button);
    placeholder.style.display = 'none';
    keybords.style.display = 'none';
    countBox.style.display = 'none';


    // input.disabled = true;
    //submit.style.display = 'none';
}


function cellStyle() {
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        //console.log(letter);

        // console.log(guessLetter);
        // console.log(letter[i]);
        //cell.style.backgroundColor = 'rgb(212, 209, 209)';
        this.removeEventListener('click', check);
        console.log(this);
        this.style.cursor = 'default';


        if (guessLetter === letter[i]) {
            this.style.backgroundColor = 'green';
            break;
        }
        else { this.style.backgroundColor = 'red'; }
        //console.log(letter[i]);
    }
    console.log(guessLetter);
}
let cellArr = [];
for (let i = 0; i < cells.length; i++) {
    cell = cells[i];

    cell.style.cursor = 'pointer';
    cell.addEventListener('click', function letter() {


    });
    cell.addEventListener('click', check);
    cell.addEventListener('click', cellStyle);
} //console.log(answer);






