const search = document.querySelector('.search-bar__search-input');
const searchButton = document.querySelector('.search-bar__search-btn');
const orderList = document.querySelectorAll('.search');
const dropbtn = document.querySelector('.dropbtn');

let order;

async function getImages (txt, order) {
  order = order === undefined ? 'popular' : order;
  const url = `https://api.unsplash.com/search/photos?page=1&per_page=100&order_by=${order}&query=${txt}%3E&client_id=w7zjBbQUxAMsNsw7jiVC_TBIzf1-svlvfxX4RcXZ9hE`;
  console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  document.querySelectorAll('.images__item').forEach((oldItem) => oldItem.remove());
  document.querySelectorAll('.images__emptyItem').forEach((oldItem) => oldItem.remove());
  let items = data.results;

  if (items.length > 0) {
    addItems(items)
  } else {
    let newItem = document.createElement('div');
    newItem.className = 'images__emptyItem';
    newItem.innerHTML = `Sorry, I have nothing like "${txt}"`;
    document.querySelector('.images').append(newItem);
  } 

}

addItems = (items) => {
  items.forEach( (url) => {
    let newItem = document.createElement('div');
    let newLink = document.createElement("a");
    newItem.className = 'images__item';
    newLink.className = 'images__link';
    newLink.target = "_blank";
    newLink.href = url.links.html;
    newItem.style.backgroundImage = `url("${url.urls.regular}")`;
    document.querySelector('.images').append(newItem);
    newItem.append(newLink);
  })
}

search.addEventListener('keydown', (event) => event.keyCode === 13 && getImages(search.value, order))
searchButton.addEventListener('click', (event) => getImages(search.value, order))

for (var i = 0; i < orderList.length; i++) {
  orderList[i].addEventListener("click", (item) => {
    order = item.composedPath()[0].innerHTML;
    dropbtn.innerHTML = `Sorted by: ${order}`;
    console.log(order);
    getImages(search.value, order)
  })
}

// Presets
search.value = 'belarus';
getImages ('belarus') 
search.value = '';