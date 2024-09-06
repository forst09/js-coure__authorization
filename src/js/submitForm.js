import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import pasteError from "./pasteError";
import tabs from "./tabs";

export default function submitForm(form) {
    const firebaseConfig = {
        apiKey: 'AIzaSyDED9xP79swswnuukKrJXeoLNE6Wg1a5-k',
        authDomain: 'js-course-auth.firebaseapp.com',
        projectId: 'js-course-auth'
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth();

    form.addEventListener('submit', (e) => {
        console.log('start');
        const emailInput = form.querySelector('#email');
        const passwordInput = form.querySelector('#password');
        const agreeCheck = form.querySelector('#agree');
        const errors = document.querySelectorAll('.form__error');

        e.preventDefault();

        if (errors.length>0) {
            errors.forEach(error=> {
                error.remove();
            })
        };

        if (agreeCheck.checked) {
            grecaptcha.ready(() => {
                grecaptcha.execute('6LfWtDYqAAAAAHhBYBWjJXByndWG6efoLppU0DCH', { action: 'submit' }).then(() => {
                    console.log('captcha');
                    // Add your logic to submit to your backend server here.
                    createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
                        .then((userCredential) => {
                            const user = userCredential.user;
                            console.log('user', user);
                        })
                        .catch((error) => {
                            const { code } = error;
                            const { message } = error;
                            
                            switch(code) {
                                case 'auth/weak-password':
                                    pasteError(passwordInput, 'Password should be at least 6 characters');
                                    break;
                                case 'auth/invalid-email':
                                    pasteError(emailInput, 'Invalid email');
                                    break;
                                case 'auth/email-already-in-use':
                                    pasteError(emailInput, 'Email already in use. <a href="" class="link-underline" data-tab="login">Login</a>');
                                    tabs();
                                    break;
                                default: 
                                    pasteError(form.querySelector('.form__checkboxes'), message);
                            }
    
                        })
                    })
            });
        }
        else {
            pasteError(agreeCheck.closest('.form__checkbox'), 'Agreement checkbox must be checked');
        }
    })
}