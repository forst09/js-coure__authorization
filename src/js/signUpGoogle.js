import { GoogleAuthProvider, signInWithPopup, sendEmailVerification } from "firebase/auth";
import pasteError from "./pasteError";

export default function signUpGoogle(auth, form) {
    const googleBtns = form.querySelectorAll('.sign-up-google');
    if (googleBtns.length > 0) {
        
        function signInPopup() {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
                .then(() => {
                    if (auth.currentUser.emailVerified === false) {
                        sendEmailVerification(auth.currentUser);
                    }
                }).catch((error) => {
                    pasteError(form.querySelector('.form__wrapper'), error.message);
                })
        }

        googleBtns.forEach(googleBtn=> {       
            googleBtn.addEventListener('click', () => {
                const agreeCheck = form.querySelector('#agree');
                if (agreeCheck) {
                    if (agreeCheck.checked) {
                        signInPopup();
                    }            
                    else {
                        pasteError(form.querySelector('#agree').closest('.form__checkbox'), 'Agreement checkbox must be checked');
                    }
                }
                else {
                    signInPopup();
                }
            })
        })
    }
}