'use strict';

import togglePassword from "./src/js/forms/togglePassword";
import submitForm from "./src/js/forms/submitForm";
import tabs from "./src/js/tabs";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./src/js/auth/initFirebase";
import signOutUser from "./src/js/auth/signOutUser";
import signUpGoogle from "./src/js/auth/signUpGoogle";
import calcFormsHeight from "./src/js/forms/calcFormsHeight";

document.addEventListener('readystatechange', () => {

    onAuthStateChanged(auth, (user) => {
        if (user) {
            if (window.location.pathname.includes('login.html')) {
                document.querySelector('h1').textContent = `You are logged in, ${user.email}`;
                signOutUser();
            }
            else {
                window.location.pathname = `${window.location.pathname}login.html`;
            }
        }
        else {
            if (window.location.pathname.includes('login.html')) {
                window.location.pathname = window.location.pathname.replace('login.html', '');
            }
        }
    })

    const forms = document.querySelectorAll('.form-js');

    if (forms.length > 0) {
        forms.forEach(form => {
            togglePassword(form);
            submitForm(form);
            signUpGoogle(auth, form);
        });

        calcFormsHeight();
    }

    tabs();
})