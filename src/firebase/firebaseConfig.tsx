// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAs8Rz7fax1iIkT6WdHC7wnxO0UFPI15w4',
  authDomain: 'typescriptproject-5956f.firebaseapp.com',
  projectId: 'typescriptproject-5956f',
  storageBucket: 'typescriptproject-5956f.appspot.com',
  messagingSenderId: '543807623277',
  appId: '1:543807623277:web:c324a8111ba1b8db336f64'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export {
  app,
  auth,
  googleProvider
}
