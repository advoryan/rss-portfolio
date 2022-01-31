const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message',
      'message': 'Message',
      'Phone': 'Phone',
      'E-mail': 'E-mail'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить',
      'Message': 'Сообщение',
      'Phone': 'Телефон',
      'E-mail': 'Электронная почта'
    }
  }

// - TRANSLATION ---------------------------------------
const enLink = document.querySelector('.en');
const ruLink = document.querySelector('.ru');

let lang = localStorage.getItem('lang');
if (lang == undefined) {
    lang = 'en';
    enLink.classList.toggle('golden');
};

enLink.addEventListener('click', () => {
    enLink.classList.add('golden');
    ruLink.classList.remove('golden');
    localStorage.setItem('lang', 'en');
    lang = 'en';
    getTranslate(lang);
})

ruLink.addEventListener('click', () => {
    ruLink.classList.add('golden');
    enLink.classList.remove('golden');
    localStorage.setItem('lang', 'ru');
    lang = 'ru';
    getTranslate(lang);
})

const allTrns = document.querySelectorAll('[data-i18]');
const inpTrns = document.querySelectorAll('input');
const tAreaTrns = document.querySelector('textarea');

const getTranslate = (lang) => {
    allTrns.forEach( trns => {
        trns.textContent = i18Obj[lang][trns.getAttribute('data-i18')];
    });
    inpTrns.forEach(inp => {
        console.log(inp.placeholder);
        inp.placeholder = i18Obj[lang][inp.placeholder]
    });
    tAreaTrns.placeholder = i18Obj[lang][tAreaTrns.placeholder]
    if (lang === 'ru') {
        ruLink.classList.add('golden');
        enLink.classList.remove('golden');
    } else {
        enLink.classList.add('golden');
        ruLink.classList.remove('golden');
    }
}

getTranslate(lang);


// - THEME -----------------------------------------------------------------
let theme = localStorage.getItem('theme');
console.log(`Начальная тема ${theme}`);

// --- PORTFOLIO IMGs CHANGER ---
const portfolioBtn = document.querySelector('.portfolio-btns');
const portfolioBtns = document.querySelectorAll('.portfolio-btns button')
const portfolioImages = document.querySelectorAll('.portfolio-image');

portfolioBtn.addEventListener('click', changeImage = (event) => {
    if(event.target.classList.contains('portfolio-btn')) {
        if (theme === 'light'){
            buttonsBG('white', 'black');
            event.target.style.setProperty('background-color', '#BDAE82');
            event.target.style.setProperty('color', 'white');
        } else {
            buttonsBG('black', '#BDAE82');
            event.target.style.setProperty('background-color', '#BDAE82');
            event.target.style.setProperty('color', 'black');
        };
        portfolioImages.forEach((img, index) => img.src = `../portfolio/assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
    };
});

// --- Portfolio buttonsBG FOO ---------------------
const portfolioButtons = document.querySelectorAll('.portfolio-btn');

buttonsBG = (back, text) => portfolioButtons.forEach( b => {
    b.style.setProperty('background-color', back);
    b.style.setProperty('color', text);
});

// --- NORMALISER --------------
const buttonsThemed = () => {
    if (theme === 'light'){
        buttonsBG('white', 'black')
        document.querySelector('[data-season="autumn"]').style.setProperty('color', 'white');
        document.querySelector('[data-season="autumn"]').style.setProperty('background-color', '#BDAE82');
        // document.querySelector('.day-night-mode-svg-icon').classList.add('day-night-mode-svg-icon-light');
    } else {
        buttonsBG('black', '#BDAE82');
        document.querySelector('[data-season="autumn"]').style.setProperty('color', 'black');
        document.querySelector('[data-season="autumn"]').style.setProperty('background-color', '#BDAE82');
        // document.querySelector('.day-night-mode-svg-icon').classList.remove('day-night-mode-svg-icon-light');
    };
}

buttonsThemed();

// THEME SWITCHER LISTENER
const themeSwitcher = document.querySelector('.day-night-mode-svg-icon');

themeSwitcher.addEventListener('click', () => {

    if (localStorage.getItem('theme') === 'light') {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    };
    theme = localStorage.getItem('theme');
    console.log(`После нажатия на кнопку: ${theme}`);

    swichFoo()

});

const swichFoo = () => {
    
    if (theme === 'light') {

        document.body.style.setProperty('color', 'black');
        document.body.style.setProperty('background-color', 'white');

        const containters = document.querySelectorAll('.container');
        containters.forEach( cont => {
            cont.classList.add('light-theme');
        });

        const h2HeadsLine = document.querySelectorAll('.h2__line');
        h2HeadsLine.forEach( hl => {
            hl.classList.add('h2__line_dark');
        });

        const h2Heads = document.querySelectorAll('.h2__title');
        h2Heads.forEach( h => {
            h.style.setProperty('background-color', 'white');
            h.style.setProperty('color', 'black');
        });

        const skillsFrames=document.querySelectorAll('.skill-item');
        skillsFrames.forEach( s => {
            s.style.removeProperty('color');
        });

        const priceFrames=document.querySelectorAll('.price-item');
        priceFrames.forEach( s => {
            if(!s.classList.contains('price')) {
                s.style.removeProperty('color');
            }
        });

        document.querySelector('.day-night-mode-svg-icon').classList.add('day-night-mode-svg-icon-light');

    } else {

        document.body.style.removeProperty('color');
        document.body.style.removeProperty('background-color');

        const containters = document.querySelectorAll('.container');
        containters.forEach( cont => {
            cont.classList.remove('light-theme');
        });

        const h2HeadsLine = document.querySelectorAll('.h2__line');
        h2HeadsLine.forEach( hl => {
            hl.classList.remove('h2__line_dark');
        });

        const h2Heads = document.querySelectorAll('.h2__title');
        h2Heads.forEach( h => {
            h.style.removeProperty('background-color');
            h.style.removeProperty('color');
        });

        const skillsFrames=document.querySelectorAll('.skill-item');
        skillsFrames.forEach( s => {
            s.style.setProperty('color', 'white');
        });

        const priceFrames=document.querySelectorAll('.price-item');
        priceFrames.forEach( s => {
            if(!s.classList.contains('price')) {
                s.style.setProperty('color', 'white');
            }
        });

        document.querySelector('.day-night-mode-svg-icon').classList.remove('day-night-mode-svg-icon-light');

    };

    if (portfolioBtn.classList.contains('portfolio-btn')) {
        if (theme === 'light'){
            buttonsBG('white', 'black');
            portfolioBtn.target.style.setProperty('background-color', '#BDAE82');
            portfolioBtn.target.style.setProperty('color', 'white');
        } else {
            buttonsBG('black', '#BDAE82');
            portfolioBtn.target.style.setProperty('background-color', '#BDAE82');
            portfolioBtn.target.style.setProperty('color', 'black');
        };
        portfolioImages.forEach((img, index) => img.src = `../portfolio/assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
    };
};

swichFoo(); // <--- start decoration according last choosen theme

// --- CLICK EVENT ---
// let clickEvent = new Event('click');
// console.log(document.querySelector('[data-season="autumn"]').style);

// document.querySelector('[data-season="autumn"]').style.setProperty('color', 'white');
// document.querySelector('[data-season="autumn"]').dispatchEvent(clickEvent);

// if (theme != localStorage.getItem('theme')) {
    // document.querySelector('.day-night-mode-svg-icon').dispatchEvent(clickEvent);
// }


// --- PORTFOLIO IMGs CACHE ---
const preloadSummerImages = (seasons) => {
    seasons.forEach(element => {
        for(let i = 1; i <= 6; i++) {
          const img = new Image();
          img.src = `../portfolio/assets/img/${element}/${i}.jpg`;
        }
    });
  }
const seasons = ['winter', 'spring', 'summer', 'autumn'];
preloadSummerImages(seasons);



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
// console.log (`
// 75 баллов

// Выполненные пункты:
// 1) блок header
// 2) секция hero
// 3) секция skills
// 4) секция portfolio
// 5) секция video
// 6) секция price
// 7) секция contacts
// 8) блок footer
// 9) нет полосы прокрутки при ширине страницы от 1440рх до 768рх
// 10) нет полосы прокрутки при ширине страницы от 768рх до 480рх
// 11) нет полосы прокрутки при ширине страницы от 480рх до 320рх
// 12) при ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка
// 13) при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик
// 14) высота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана
// 15) при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку
// 16) бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений
// 17) ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям
// 18) при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку
// `);













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