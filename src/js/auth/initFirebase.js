import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
  
const firebaseConfig = {
    apiKey: 'AIzaSyDED9xP79swswnuukKrJXeoLNE6Wg1a5-k',
    authDomain: 'js-course-auth.firebaseapp.com',
    projectId: 'js-course-auth'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };