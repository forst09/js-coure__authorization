'use strict';

import togglePassword from "./src/js/togglePassword";
import submitForm from "./src/js/submitForm";
import tabs from "./src/js/tabs";

document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('.form-js');

    if (forms.length > 0) {
        forms.forEach(form => {
            togglePassword(form);
            submitForm(form);
        })
    }

    tabs();
})