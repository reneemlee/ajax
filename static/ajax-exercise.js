'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  fetch('/fortune')
    .then(response => response.text())
    .then(responseData => {
      document.querySelector('#fortune-text').innerText = responseData;
    });
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;

  // TODO: request weather with that URL and show the forecast in #weather-info
  fetch(`/weather.json?${zipcode}`)
    .then(response => response.json())
    .then(JsonData => {
      document.querySelector('#weather-info').innerHTML = JsonData.forecast;
    });
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS
// Use post request and take data entered from form as object
// extract status code & message
// show result message in order status 


function orderMelons(evt) {
  evt.preventDefault();

  
  const formInputs = {
    type: document.querySelector('#melon-type-field').value,
    amount: document.querySelector('#qty-field').value,
  };

  fetch('/order-melons.json', {
    method: 'POST',
    body: JSON.stringify(formInputs),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(responseJson => {
      document.querySelector('#order-status').innerText = JsonData.msg;
    });
};

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

document.querySelector('#order-form').addEventListener('submit', orderMelons);
