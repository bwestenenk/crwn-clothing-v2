import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import {getFirestore, doc, getDoc, setDoc } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDbRTkmAR1oWNjKiOBCYsoxGDXV9523teg",
    authDomain: "crwn-clothing-db-4542b.firebaseapp.com",
    projectId: "crwn-clothing-db-4542b",
    storageBucket: "crwn-clothing-db-4542b.appspot.com",
    messagingSenderId: "485269322712",
    appId: "1:485269322712:web:8b755e6aa6de113d8d90ad"
  };
  


  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db =getFirestore();


 export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }
        catch (error){
            console.log("error creating the user", error.message);
        }

    }

    return userDocRef;
  }