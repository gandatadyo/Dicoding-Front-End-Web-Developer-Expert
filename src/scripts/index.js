import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json';

console.log('Hello Coders! :)');
  
let main_data = document.getElementById('list_main');
main_data.innerHTML = '';
data.restaurants.forEach(data_item => {
  const item = document.createElement('div');
  item.id = data_item.id;
  item.classList = 'card';
  item.innerHTML = `
  <div class="card-img">
    <div class="quote-item">
      <h4 style="margin:10px 20px">${data_item.city}</h4>
    </div>
    <img src="${data_item.pictureId}" style="width:100%" alt=""/>
  </div>
  <div class="card-body">
      <p><b>Rating ${data_item.rating}</b></p>
      <p><h3>${data_item.name}</h3></p>
      <p style="text-align:justify">${data_item.description}</p>
  </div>`
  main_data.appendChild(item);
});

const hamburgerButtonElement = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");
const mainElement = document.querySelector("main");

hamburgerButtonElement.addEventListener("click", event => {
  drawerElement.classList.toggle("open");
  event.stopPropagation();
});

mainElement.addEventListener("click", event => {
  drawerElement.classList.remove("open");
  event.stopPropagation();
})