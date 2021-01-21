//import * as firebase from 'firebase';
import firebase from 'firebase'
//import firebase from 'firebase/app';

//import {facebookProvider} from 'react-facebook';
//export const auth = firebase.auth();
//export const facebookProvider = firebase.auth();
//export {facebookProvider} from "./fire";
//export const facebookProvider = firebase.auth('./fire');
//import facebookProvider from './fire';

var firebaseConfig = {
    apiKey: "AIzaSyAv0jfJ3ohFFcc_r63Zkn4UQogSaoEKXtk",
    authDomain: "weather-d2468.firebaseapp.com",
    projectId: "weather-d2468",
    storageBucket: "weather-d2468.appspot.com",
    messagingSenderId: "742380104767",
    appId: "1:742380104767:web:94c83b3dbaefe6e90edc8a",
    measurementId: "G-8MRSF1RGNZ"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export {fire, facebookProvider};