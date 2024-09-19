import { signInWithEmailAndPassword  } from "firebase/auth";
import pasteError from "../forms/pasteError";
import pastePreloader from "./pastePreloader";

export default function loginUser(form, emailInput, passwordInput, auth) {
    pastePreloader(form.closest('.tab-wrap'));
    signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
        .then(() => {
            document.querySelector('.preloader').remove();
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