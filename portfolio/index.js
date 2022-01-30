// --- PORTFOLIO IMGs CHANGER ---
const portfolioBtn = document.querySelector('.portfolio-btns');
const portfolioImages = document.querySelectorAll('.portfolio-image');

portfolioBtn.addEventListener('click', changeImage = (event) => {
    if(event.target.classList.contains('portfolio-btn')) {
        console.log(event.target.dataset.season);
        portfolioImages.forEach((img, index) => img.src = `../portfolio/assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
    };
});

// --- HAMBURGER ---
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const navItems = document.querySelector('.header__nav-item');
const dark = document.querySelector('.darken');

hamburger.onclick = () => {
    hamburger.classList.toggle('is-active');
    navigation.classList.toggle('is-active');
    navItems.classList.toggle('is-active');
    dark.classList.toggle('is-active');
};

document.querySelectorAll('.header__nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('is-active');
    navigation.classList.remove('is-active');
    navItems.classList.remove('is-active');
    dark.classList.remove('is-active');
}))

// --- DESCRIPTION ---
console.log (`
75 баллов

Выполненные пункты:
1) блок header
2) секция hero
3) секция skills
4) секция portfolio
5) секция video
6) секция price
7) секция contacts
8) блок footer
9) нет полосы прокрутки при ширине страницы от 1440рх до 768рх
10) нет полосы прокрутки при ширине страницы от 768рх до 480рх
11) нет полосы прокрутки при ширине страницы от 480рх до 320рх
12) при ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка
13) при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик
14) высота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана
15) при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку
16) бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений
17) ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям
18) при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку
`);













// console.log (
// `Ваша оценка - 100 баллов\n
// ✔ [+10] Вёрстка валидная. Для проверки валидности вёрстки используйте сервис https://validator.w3.org/\n
// ✔ [+20] Вёрстка семантическая:`
// );

// [
//     ['header', 1, 1],
//     ['main', 1, 1],
//     ['footer', 1, 1],
//     ['section', 6, Infinity],
//     ['h1', 1, 1],
//     ['h2', 5, Infinity],
//     ['nav', 1, 1],
//     ['ul', 2, Infinity],
//     ['button', 10, Infinity],
//     ['input[type="email"]', 1, Infinity],
//     ['input[type="tel"]', 1, Infinity],
//     ['textarea', 1, Infinity],
//     ['input, textarea[placeholder]', 3, Infinity],
// ]
//     .map((x) => [...x, [...document.querySelectorAll(x[0])].length])
//     .map((x) =>
//         x[3] >= x[1] && x[3] <= x[2]
//             ? `    ✔ ${x[0]} (${x[3]})`
//             : `    ✘ ${x[0]} (expected - ${x[1]}, actual - ${x[3]})`
//     )
//     .forEach((x) => console.log(x));

// console.log(
// `\n✔ [+45] Вёрстка соответствует макету:
//     ✔ блок header
//     ✔ секция hero
//     ✔ секция skills
//     ✔ секция portfolio
//     ✔ секция video
//     ✔ секция price
//     ✔ секция contacts
//     ✔ блок footer\n
// ✔ [+12] Требования к css:
//     ✔ для построения сетки используются флексы или гриды
//     ✔ при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону
//     ✔ фоновый цвет тянется на всю ширину страницы
//     ✔ иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления
//     ✔ изображения добавлены в формате .jpg
//     ✔ есть favicon\n
// ✔ [+20] Интерактивность, реализуемая через css:
//     ✔ плавная прокрутка по якорям
//     ✔ ссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/
//     ✔ интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета
//     ✔ обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы
// `)