/** Создать простую страничку которая выводит в выпадающий список
* всех персонажей (people) с name 'Cat' по запросу https://ghibliapi.herokuapp.com/species
* для начала, пусть в значении опции будет просто порядковый номер.
* после выбора опции, отсылается запрос на url https://ghibliapi.herokuapp.com/people/{id}
* внизу появляется информация о персонаже -
* // name, eye_color, gender, films
* а так же изображение (случайное с unsplash)
* https://ghibliapi.herokuapp.com/#
**/

const select = document.getElementById('mainSelect');
const div = document.getElementById('eyeDiv');
const div2 = document.getElementById('genderDiv');
const ol = document.getElementById('filmList');
const img = document.getElementById('catImg');

const catArr = [];
const peopleArr = [];
let newStr = [];
let filmsArr = [];


async function renderCatPic(){
    
    const catPic = await fetch('https://source.unsplash.com/300x300/?cat');
    img.setAttribute('src', `${catPic.url}`);
}


async function getAllChars() {
    
    const chars = await fetch('https://ghibliapi.herokuapp.com/species');
    const response = await chars.json();

    response.forEach(function(el){
        if (el.name === 'Cat') {
            catArr.push(el.people);
        }
    });
    newStr = catArr.toString().split(',');    
}


async function getAllPeople() {
    
    await getAllChars();
    newStr.forEach(async function(el){      
        
        const charsPeople = await fetch(el);
        const responsePeople = await charsPeople.json();        
        
        let newOption = document.createElement('option');
        newOption.innerHTML = `${responsePeople.name}`;
        newOption.setAttribute('value', `${el}`);
        select.append(newOption);
    });
    
    
    select.addEventListener('change', async function(){
        
        div.innerHTML = '';
        div2.innerHTML = '';
        ol.innerHTML = '';
        img.src = '';
        
        const charsPeopleOne = await fetch(`${this.value}`);
        const responsePeopleOne = await charsPeopleOne.json();
        
        let newEye = document.createElement('p');
        newEye.innerHTML = `${responsePeopleOne.eye_color}`;
        div.append(newEye);
        
        let newGender = document.createElement('p');
        newGender.innerHTML = `${responsePeopleOne.gender}`;
        div2.append(newGender);
        
        filmsArr = `${responsePeopleOne.films}`;
        filmsArr.split(',').forEach(async function(el){
            const characterFilms = await fetch(`${el}`);
            const responseFilms = await characterFilms.json();
            let newFilm = document.createElement('li');
            newFilm.innerHTML = `${responseFilms.title}`;
            ol.append(newFilm);
        });
        
        if (div.innerHTML != '') {
            renderCatPic();
        } 

    });
}

getAllPeople();


    



