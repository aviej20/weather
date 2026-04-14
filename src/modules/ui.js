import {fetchWeather} from "./weatherAPI.js";
import weatherIcon from "./icons.js";

const form = document.getElementById('search-form');

let currentSlide = 0;

function nextSlide(direction){
    const divWrapper = document.querySelector('.week-weather--wrapper');
    const weatherCards = divWrapper.querySelectorAll('.week-weather__day');
        
        if (!weatherCards.length) return;

        const cardWidth = weatherCards[0].offsetWidth;
        const maxSlide = weatherCards.length -1;

        if(direction === 'next' && currentSlide < maxSlide){
            currentSlide++;
        }else if(direction === 'prev' && currentSlide > 0){
            currentSlide--;
        }

        divWrapper.style.transform = `translateX(-${currentSlide * cardWidth}px)`;

}


function updateWeatherUI (weatherObject){

    let dayWeatherDiv = document.querySelector('.city-weather--day');
    let weekWeatherDiv = document.querySelector('.city-weather--week');

    dayWeatherDiv.innerHTML = `

        <h2>${weatherObject.city}</h2>
        <p class="city-weather-day__temp"><span>${weatherObject.temp}</span>&deg;F</p>
        <p class="city-weather-day__icon"><img src=${weatherIcon(weatherObject.icon)} alt="" /></p>
        <p class="city-weather-day__conditions">${weatherObject.conditions}</p>
        <p>${weatherObject.desc}</p>
    `;

    const divWrapper = document.createElement('div');
    divWrapper.className = "week-weather--wrapper";
    weekWeatherDiv.innerHTML = `<h3>10-Day Weather</h3>`;

    for(let i = 0; i< weatherObject.week.length; i++){
        let div = document.createElement('div');
        div.className = "week-weather__day";
        div.innerHTML = `
            <h4>Day ${i+1}</h4>
            <p class="week-weather-day__icon"><img src=${weatherIcon(weatherObject.week[i].icon)} /></p>
            <p>${weatherObject.week[i].temp}&deg;F</p>
            <p>${weatherObject.week[i].conditions}</p>

        `;

        divWrapper.appendChild(div);
    }

    weekWeatherDiv.appendChild(divWrapper);

    const buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'btn-wrapper';

    const prevButton = document.createElement('button');
    prevButton.className = 'btn';
    prevButton.id = 'btn--prev';
    prevButton.innerHTML = `Previous`;
    prevButton.addEventListener("click", () => {nextSlide('prev')});

    const nextButton = document.createElement('button');
    nextButton.className = 'btn';
    nextButton.id = 'btn--next';
    nextButton.innerHTML = `Next`;
    nextButton.addEventListener("click", () => {nextSlide('next')});


    buttonWrapper.appendChild(prevButton);
    buttonWrapper.appendChild(nextButton);
    weekWeatherDiv.appendChild(buttonWrapper);
}


 form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const city = formData.get('city');
    
    const fetchedWeatherDataObject = await fetchWeather(city);

    updateWeatherUI(fetchedWeatherDataObject);

});


async function loadDefautlWeatherObject() {
    const defaultWeatherObject = await fetchWeather('Houston');
    updateWeatherUI(defaultWeatherObject);
}

loadDefautlWeatherObject();