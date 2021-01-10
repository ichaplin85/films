/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

function delBanners() {
        const banners = document.getElementsByClassName('promo__adv');
        // console.log(banners);
        for (let i = 0; i < banners.length; i++) {
            banners[i].remove();
        }
}
// delBanners();   

const adv = document.querySelectorAll('.promo__adv img');

adv.forEach(item => {
    item.remove();
});


function changeGenre() {
    const comedy = document.getElementsByClassName('promo__genre');
    // const comedy = document.querySelector('.promo__genre');
    comedy[0].textContent = "драма";
    console.log(comedy);
    // console.log()

}
// changeGenre();

const poster = document.querySelector('.promo__bg'), 
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      add = document.querySelector('.add'),
      button = add.querySelector('button'),
      input = add.querySelector('.adding__input'),
      dels = document.querySelectorAll('.delete'),
      checkbox = add.querySelector('input[type=checkbox]');


const addNewFilm = (e) => {
        e.preventDefault();
        let newFilm = input.value;
        newFilm = newFilm.toUpperCase();
        if (newFilm.length > 21) {
            newFilm = newFilm.substring(0, 20) + '...';
            movieDB.movies.push(newFilm);
        } else {
            movieDB.movies.push(newFilm);
        }        
        movieList.innerHTML = "";
        movieDB.movies.sort();
        movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item"> ${i + 1} ${film}
                <div class="delete"></div>
            </li>`;
        if (checkbox.checked) {
            console.log("Добавляем любимый фильм!");
        }
        });
};

button.addEventListener('click', addNewFilm);
console.log(movieDB.movies);
genre.textContent = "драма";


function changePhoto() {
    poster.style.backgroundImage = "url('img/bg.jpg')";
}
changePhoto();

movieList.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item"> ${i + 1} ${film}
        <div class="delete"></div>
    </li>`;
});


let img = document.querySelectorAll('.promo__interactive-item');
console.log(img);
const deleteElement = (e) => {
    console.log(e.target.parentElement);
    e.target.parentElement.remove();
    };

for (let i = 0; i < dels.length; i++) {
    dels[i].addEventListener('click', (e) => {
        console.log(e);
    });
}
// console.log(dels[0].parentElement);
// dels[0].addEventListener('click', deleteElement);
// dels[1].addEventListener('click'. deleteElement);
// dels.addEventListener('click', (e) => {
//     console.log(e);
// });


    // 1) получить элемент(ховер) с помощью клика
    // addEventListener('mouseover', deleteElement);
    // addEventListener('click'. deleteElement);
    // 2) Пол
    // 2) удалить этот элемент
    // console.log(dels[0].parentElement.remove()); - при клике это нужно удалить


// dels.forEach((t) => {
//     // console.log(t);
//     t.addEventListener('click', deleteElement);
// }); 
// dels.addEventListener('click', deleteElement);
// console.log(poster.innerHTML);


// Решение задания 33
// input.value 
// click button = movieDB.movies.push();


// function watchedFilms() {
//     const films = document.querySelectorAll('.promo__interactive-item');
//         movieDB.movies.sort();
//         movieDB.movies.forEach((item, i) => {
//             films[i].textContent = `${i+1} ${item}`;
//         });
// }
// watchedFilms();


// console.log(arr);
