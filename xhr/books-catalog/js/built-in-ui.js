/* Данный JS код */
const request = new XMLHttpRequest();
request.open('GET', 'https://neto-api.herokuapp.com/book');
request.send();

request.addEventListener("load", onLoad);

function setBooks(books) {
  const content = document.querySelector("#content");
  content.innerText = '';
  for (let book of books) {
    const li = document.createElement('li');
    content.appendChild(li);
    li.dataset.title = `${book.title}`;
    li.dataset.author = `${book.author.name}`;
    li.dataset.info = `${book.info}`;
    li.dataset.price = `${book.price}`;
    const img = document.createElement('img');
    li.appendChild(img);
    img.src = `${book.cover.small}`;
  }
}

function onLoad() {
  if (request.status === 200) {
    const response = JSON.parse(request.responseText);
    setBooks(response);
  }
}

// Регулируем видимость карточки
function toggleCardVisible () {
 document.getElementById('content').classList.toggle('hidden');
 document.getElementById('card').classList.toggle('hidden');
}


document.getElementById('close').addEventListener('click', toggleCardVisible);

document.getElementById('content').addEventListener('click', (event) => {
    let target = null;
    if (event.target.tagName === 'LI') {
        target = event.target;
    }
    if (event.target.parentNode.tagName === 'LI') {
        target = event.target.parentNode;
    }

    if (target) {
      toggleCardVisible();
      document.getElementById('card-title').innerHTML = target.dataset.title;
      document.getElementById('card-author').innerHTML = target.dataset.author;
      document.getElementById('card-info').innerHTML = target.dataset.info;
      document.getElementById('card-price').innerHTML = target.dataset.price;
    }
});
