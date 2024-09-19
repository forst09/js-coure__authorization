import { auth } from "./initFirebase";
import { signOut } from "firebase/auth";

export default function signOutUser() {
    const signOutBtn = document.querySelector('.btn-sign-out');
    if (signOutBtn) {
        signOutBtn.addEventListener('click', () => {
            signOut(auth).then(() => {
                
            }).catch((error) => {
                alert('Something went wrong. Please try again');
                throw new Error(error);
            })
        });
    }
}