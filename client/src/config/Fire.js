import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyAT30iL9UFYWr_1GG0IGsEEeZytoWfKRm0",
    authDomain: "indicatorsapp-1e9b2.firebaseapp.com",
    databaseURL: "https://indicatorsapp-1e9b2.firebaseio.com",
    projectId: "indicatorsapp-1e9b2",
    storageBucket: "indicatorsapp-1e9b2.appspot.com",
    messagingSenderId: "60264643594"
}

const fire = firebase.initializeApp(config);
// const storage = firebase.storage();


export default fire


// export {
//     storage, fire as default
// }