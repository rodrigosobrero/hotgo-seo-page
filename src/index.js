import './scss/index.scss';
import logo from './img/hotgo-logo.svg';
import logoMin from './img/hotgo-logo-min.svg';
import thumb from './img/video-thumb.svg';
import play from './img/video-play-icon.png';
import preview from './img/video-preview.png';

document.getElementById('navbar-logo').src = logo;
document.getElementById('navbar-logo-min').src = logoMin;
document.getElementById('navbar-logo-min').style.height = '30px';
document.getElementById('video-preview').src = preview;
document.getElementById('video-play').src = play;
document.getElementById('video-thumb-series').src = thumb;

let episodeList = [
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
  return `<div class="col-xs-6 col-md-3 float-left mb-4">
            <div class="card card-episodes">
              <img src="${prm.thumb}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${prm.title} ${prm.episode}</h5>
                <p class="card-text">${prm.description}</p>
              </div>
            </div>
          </div>`;
}

let episodeContainer = document.getElementById('episodes');
let episodeNumber = 0;

episodeList.forEach(element => {
  episodeNumber++;
  episodeContainer.innerHTML += episodeCard({ 
                                  thumb: thumb,
                                  title: element.title,
                                  description: element.description,
                                  episode: episodeNumber
                                })
});