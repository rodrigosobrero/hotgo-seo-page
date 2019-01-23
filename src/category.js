import './scss/index.scss';
import logo from './img/hotgo-logo.svg';
import thumb from './img/video-thumb.jpg';

document.getElementById('navbar-logo').src = logo;
document.getElementById('thumb').src = thumb;

let categoryList = [ "Amateur", "Anal", "Asiaticas", "Black", "Chubby", "Conejitas", "Culonas", "Doble Penetración", "Entretenimiento", "Fatal", "Fetiche", "Ficción", "Interracial", "Jovencitas", "Juguetes", "Latinas", "Lesbianas", "Mamadas", "Milf", "Orgias", "Outdoor", "P.O.V.", "Reality", "Sex Stars", "Shows", "Squirting", "Tetonas", "Trios", "Voyeur" ];

let videoList = [
                  { description: 'Lorem ipsum', duration: '10:30', rating: '5.0' },
                  { description: 'Lorem ipsum', duration: '10:30', rating: '5.0' },
                  { description: 'Lorem ipsum', duration: '10:30', rating: '5.0' },
                  { description: 'Lorem ipsum', duration: '10:30', rating: '5.0' },
                  { description: 'Lorem ipsum', duration: '10:30', rating: '5.0' },
                  { description: 'Lorem ipsum', duration: '10:30', rating: '5.0' },
                  { description: 'Lorem ipsum', duration: '10:30', rating: '5.0' },
                  { description: 'Lorem ipsum', duration: '10:30', rating: '5.0' },
                  { description: 'Lorem ipsum', duration: '10:30', rating: '5.0' },
                ];

let videoCard = prm => {
  return `<div class="col-xs-6 col-md-4 float-left">
            <div class="video-thumb">
              <span class="video-list-rating shadow">
                <i class="fas fa-star"></i> ${prm.rating}
              </span>
              <img class="img-fluid" src="${prm.thumb}">
            </div>
            <div class="video-info mt-1">
              <div class="row">
                <div class="col">
                  <p class="video-list-title">${prm.description}</p>
                </div>
                <div class="col-auto">
                  <p class="video-list-duration text-right">${prm.duration}</p>
                </div>
              </div>
            </div>
          </div>`;
}

let episodeContainer = document.getElementById('video-list');
let episodeNumber = 0;

videoList.forEach(element => {
  episodeNumber++;
  episodeContainer.innerHTML += videoCard({ 
                                  thumb: thumb,
                                  description: element.description,
                                  duration: element.duration,
                                  rating: element.rating
                                });
});

let categoryContainer = document.getElementById('category-list');
let categoryContainerLg = document.getElementById('category-list-lg');
let categoryNumber = 0;

let categoryItemLg = prm => {
  return `<a href="#" class="list-group-item list-group-item-action">${prm}</a>`;
}

let categoryItem = prm => {
  return `<li><a href="#">${prm}</a></li>`;
}

categoryList.forEach(element => {
  categoryNumber++;
  categoryContainer.innerHTML += categoryItem(element);
  categoryContainerLg.innerHTML += categoryItemLg(element);
});

$(document).ready(function () {
  $('#dismiss').on('click', () => {
    if ($('#dismiss').hasClass('is-active')) {
      $('#sidebar, .overlay').removeClass('active');
      $('#dismiss').removeClass('is-active');
      $('main').removeClass('active');
    } else {
      $('#sidebar, .overlay').addClass('active');
      $('#dismiss').addClass('is-active');
      $('main').addClass('active');
    }
  });
});