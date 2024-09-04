import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function submitForm(form) {
    const firebaseConfig = {
        apiKey: 'AIzaSyDED9xP79swswnuukKrJXeoLNE6Wg1a5-k',
        authDomain: 'js-course-auth.firebaseapp.com',
        projectId: 'js-course-auth'
    };
    const app = initializeApp(firebaseConfig);

    const auth = getAuth();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        grecaptcha.ready(function () {
            grecaptcha.execute('6LfWtDYqAAAAAHhBYBWjJXByndWG6efoLppU0DCH', { action: 'submit' }).then(function (token) {
                console.log(token);
                // Add your logic to submit to your backend server here.
                createUserWithEmailAndPassword(auth, form.querySelector('#email').value, form.querySelector('#password').value)
                    .then((userCredential) => {
                        const user = userCredential.user;
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorMessage);
                    })
            });
        });
    })
}