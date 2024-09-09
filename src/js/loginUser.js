import { signInWithEmailAndPassword  } from "firebase/auth";
import pasteError from "./pasteError";
import pastePreloader from "./pastePreloader";

export default function loginUser(form, emailInput, passwordInput, auth) {
    pastePreloader(form);
    signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
        .then(() => {
            document.querySelector('.preloader').remove();
            window.location.pathname = `${window.location.pathname}nested/login.html`;
        })
        .catch((error) => {  
            document.querySelector('.preloader').remove();

            const { code, message } = error;
            switch(code) {
                case 'auth/invalid-credential':
                    pasteError(form.querySelector('.form__wrapper'), 'Invalid data credentials. Please try again');
                    break;
                default: 
                    pasteError(form.querySelector('.form__wrapper'), message);
            }
        });
}