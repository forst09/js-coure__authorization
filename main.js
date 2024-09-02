'use strict';

import hehe from "./src/js/hehe";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');

    if (form) {
        hehe(form);
    }
})