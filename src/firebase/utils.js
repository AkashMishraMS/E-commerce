
import firebase from "firebase/app";
import  "firebase/firestore";
import 'firebase/auth';

  var firebaseConfig = {
    apiKey: "AIzaSyAyKzIR_kVQ84D2d6jHfcCTOJq9wlRtWQM",
    authDomain: "retailcommerce-b3f3c.firebaseapp.com",
    databaseURL: "https://retailcommerce-b3f3c.firebaseio.com",
    projectId: "retailcommerce-b3f3c",
    storageBucket: "retailcommerce-b3f3c.appspot.com",
    messagingSenderId: "22682070213",
    appId: "1:22682070213:web:23105e103438c53138d4ac",
    measurementId: "G-L1791TNYL5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return
    }

    const userRef = firestore.doc(`user/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userAuth.set({
                displayName, email, createdAt, ...additionalData
            })
        } catch(error) {
            console.log('error occured')
        }
     }

     return userRef
}

  // export const addCollectionAndDocuments  = async(collectionKey, objectsToAdd)=> {
  //   const collectionRef = firestore.collection(collectionKey)
  //   console.log('collectionRef',collectionRef)

  //   const batch = firestore.batch()
  //   objectsToAdd.forEach(obj => {
  //     const newDocRef = collectionRef.doc()
  //     batch.set(newDocRef, obj)
  //   })
  //   return await batch.commit()
  // }

  export const convertCollectionSnapshotToMap = (collection) => {
      const transformedCollection = collection.docs.map(doc => {
        const { title, items} = doc.data()
        return {
          routeName: encodeURI(title.toLowerCase()),
          id : doc.id,
          title,
          items
        }
      })
      console.log('trans',transformedCollection)
      return transformedCollection.reduce((acc,collection) => {
        acc[collection.title.toLowerCase()] = collection
        return acc
      }, {})
  }

  
  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe()
        resolve(userAuth)
      }, reject)
    })
  }

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  export const googleprovider = new firebase.auth.GoogleAuthProvider();
  googleprovider.setCustomParameters({ prompt: 'select_account' })
  export const SignInWithGoogle = () => auth.signInWithPopup(googleprovider)


  export default firebase

