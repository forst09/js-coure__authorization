import { auth } from "./initFirebase";
import { signOut } from "firebase/auth";

export default function signOutUser() {
    const signOutBtn = document.querySelector('.btn-sign-out');
    if (signOutBtn) {
        signOutBtn.addEventListener('click', () => {
            signOut(auth).then(() => {
                console.log('sign out');
                window.location.pathname = window.location.pathname.replace('nested/login.html', '');
            }).catch((error) => {
                console.log(error);
            })
        });
    }
}