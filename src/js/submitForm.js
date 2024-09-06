import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import pasteError from "./pasteError";
import tabs from "./tabs";
import createUser from "./createUser";
import loginUser from "./loginUser";

export default function submitForm(form) {
    const firebaseConfig = {
        apiKey: 'AIzaSyDED9xP79swswnuukKrJXeoLNE6Wg1a5-k',
        authDomain: 'js-course-auth.firebaseapp.com',
        projectId: 'js-course-auth'
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        console.log('start');
        const emailInput = form.querySelector('.email-input');
        const passwordInput = form.querySelector('.password-input');
        const errors = document.querySelectorAll('.form__error');

        if (errors.length>0) {
            errors.forEach(error=> {
                error.remove();
            })
        };

        grecaptcha.ready(() => {
            grecaptcha.execute('6LfWtDYqAAAAAHhBYBWjJXByndWG6efoLppU0DCH', { action: 'submit' }).then(() => {

                if (form.getAttribute('data-form') === 'sign-up') {
                    createUser(form, emailInput, passwordInput, auth);
                }
                else {
                    loginUser(form, emailInput, passwordInput, auth);
                }
            })
        });
    })
}