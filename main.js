'use strict';

import togglePassword from "./src/js/togglePassword";
import submitForm from "./src/js/submitForm";
import tabs from "./src/js/tabs";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-js');

    if (form) {
        togglePassword(form);
        submitForm(form);
    }

    tabs();
})