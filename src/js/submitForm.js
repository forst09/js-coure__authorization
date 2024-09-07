import pasteError from "./pasteError";
import tabs from "./tabs";
import createUser from "./createUser";
import loginUser from "./loginUser";
import { auth } from "./initFirebase";

export default function submitForm(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

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