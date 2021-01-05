import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's configuration
var firebaseConfig = {
  apiKey: "AIzaSyA7t8q5uHXaFx5OwlWtf2m4f-H29wBgd18",
  authDomain: "photo-gallery-1957d.firebaseapp.com",
  projectId: "photo-gallery-1957d",
  storageBucket: "photo-gallery-1957d.appspot.com",
  messagingSenderId: "858977276058",
  appId: "1:858977276058:web:cd0f59c35e2bebb7c48f23",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timestamp };
