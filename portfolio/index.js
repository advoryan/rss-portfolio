const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const navItems = document.querySelector('.header__nav-item');

hamburger.onclick = () => {
    hamburger.classList.toggle('is-active');
    navigation.classList.toggle('is-active');
    navItems.classList.toggle('is-active');   
};

document.querySelectorAll('.header__nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('is-active');
    navigation.classList.remove('is-active');
    navItems.classList.remove('is-active');
}))

















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