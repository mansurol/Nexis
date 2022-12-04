import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCcV6PVFoyx1EWwto0NinS2N3-DHq3ZLjA",

    authDomain: "nexis-task-784bb.firebaseapp.com",
  
    projectId: "nexis-task-784bb",
  
    storageBucket: "nexis-task-784bb.appspot.com",
  
    messagingSenderId: "759905842256",
  
    appId: "1:759905842256:web:7e5f9a9ccc6b5f870b4d55"
  

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth ;