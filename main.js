'use strict';

import togglePassword from "./src/js/togglePassword";
import submitForm from "./src/js/submitForm";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');

    if (form) {
        togglePassword(form);
        submitForm(form);
    }
})