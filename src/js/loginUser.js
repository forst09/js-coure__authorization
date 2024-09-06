import { signInWithEmailAndPassword  } from "firebase/auth";
import pasteError from "./pasteError";

export default function loginUser(form, emailInput, passwordInput, auth) {
    signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {            
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