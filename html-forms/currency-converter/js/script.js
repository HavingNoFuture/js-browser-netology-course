'use strict'
const request = new XMLHttpRequest();
const loader = document.querySelector('#loader');
const content = document.querySelector('#content');
const source = document.querySelector('#source');
const result = document.querySelector('#result');
const from = document.querySelector('#from');
const to = document.querySelector('#to');

loader.classList.remove('hidden');

request.open('GET', 'https://neto-api.herokuapp.com/currency');
request.send();

function onLoad(event) {
  loader.classList.add('hidden');
  if (request.status === 200) {
    const response = JSON.parse(request.responseText);

    insertionOfCurrencies(response);

    dataProcessing(response);
  }
  content.classList.remove('hidden');
}

request.addEventListener('load', onLoad);

function insertionOfCurrencies(data) {
  for (let item of data) {
    from.innerHTML += `<option select=${item['code']}>${item['code']}</option>`;
  }
  to.innerHTML = from.innerHTML;
}


function dataProcessing(data) {
    function getResult() {
	  return Math.round(valueSource * (valueTo / valueFrom) * 100) / 100;
    }

    let valueFrom = Number(data[0]['value']);
    function onInputFrom(event) {
    	valueFrom = Number(data[this.selectedIndex]['value']);
    	result.innerHTML = getResult();
    }
    from.addEventListener('input', onInputFrom);

    let valueTo = Number(data[0]['value']);
    function onInputTo(event) {
    	valueTo = Number(data[this.selectedIndex]['value']);
    	result.innerHTML = getResult();
    }
    to.addEventListener('input', onInputTo);

    let valueSource = Number(source.value);
    function onInputSource(event) {
    	valueSource = Number(this.value);
    	result.innerHTML = getResult();
    }
    source.addEventListener('input', onInputSource);

    result.innerHTML = getResult();
}



