import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import pasteError from "./pasteError";
import tabs from "./tabs";

export default function createUser(form, emailInput, passwordInput, auth) { 
    const agreeCheck = form.querySelector('#agree');

    if (agreeCheck.checked) {
        createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
            .then(() => {
                sendEmailVerification(auth.currentUser)
                .then(() => {
                    console.log('send email');
                })
            })
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const { code, message } = error;
                
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
    }
    else {
        pasteError(agreeCheck.closest('.form__checkbox'), 'Agreement checkbox must be checked');
    }
}