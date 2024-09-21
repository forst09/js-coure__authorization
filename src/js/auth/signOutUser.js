import showPopup from "../popup/showPopup";
import { auth } from "./initFirebase";
import { signOut } from "firebase/auth";

export default function signOutUser() {
    const signOutBtn = document.querySelector('.btn-sign-out');
    if (signOutBtn) {
        signOutBtn.addEventListener('click', () => {
            signOut(auth).then(() => {
                
            }).catch((error) => {               
                showPopup(document.querySelector('.popup-error'));
                throw new Error(error);
            })
        });
    }
}