import './scss/index.scss';
import logo from './img/hotgo-logo.svg';
import thumb from './img/video-thumb.svg';
import title from './img/video-title.svg';

document.getElementById('navbar-logo').src = logo;
document.getElementById('video-title').src = title;
document.getElementById('video-thumb').src = thumb;

let episodeList = [
                    { title: 'Capítulo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                    { title: 'Capítulo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                    { title: 'Capítulo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                    { title: 'Capítulo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                    { title: 'Capítulo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                    { title: 'Capítulo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                    { title: 'Capítulo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                    { title: 'Capítulo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                    { title: 'Capítulo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
                  ];

let episodeCard = prm => {
  return `<div class="card" style="width:15rem;">
            <img src="${prm.thumb}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${prm.title}</h5>
              <p class="card-text">${prm.description}</p>
            </div>
          </div>`;
}

let episodesContainer = document.getElementById('episodes');

episodeList.forEach(element => {
  episodesContainer.innerHTML += episodeCard({ thumb: thumb, title: element.title, description: element.description })
});