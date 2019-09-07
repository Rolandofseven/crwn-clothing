import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyCkeHLOXgQghs-54Z5UcBcEddILEMVEGk8",
    authDomain: "my-react-burger-13e36.firebaseapp.com",
    databaseURL: "https://my-react-burger-13e36.firebaseio.com",
    projectId: "my-react-burger-13e36",
    storageBucket: "my-react-burger-13e36.appspot.com",
    messagingSenderId: "1009843723657",
    appId: "1:1009843723657:web:1cc15bed60f94a280d9558"
};

export const createUserProfileDocument = async (userAuth, additonalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({ displayName, email, createdAt, ...additonalData })
        } catch (error) {
            console.log('error creating user', error.message)
        }

        return userRef;
    }

    console.log(snapShot);
}
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;