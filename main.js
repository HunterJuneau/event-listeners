'use strict';

let mainButton = document.querySelector('#main-btn');

const gotClicked = () => {
    console.log('You clicked me!')
}

mainButton.addEventListener('click', gotClicked)