import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';


const config = {
    apiKey: "AIzaSyDAV0WLGiqRhMoKqM8P3OJTOUqj9Z4H3Jo",
    authDomain: "neflix-muhammed.firebaseapp.com",
    projectId: "neflix-muhammed",
    storageBucket: "neflix-muhammed.appspot.com",
    messagingSenderId: "331190702840",
    appId: "1:331190702840:web:70084eee7d4263ab40210d",
    measurementId: "G-SZFPY4LBXQ"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
