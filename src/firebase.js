import { initializeApp, getAnalytics } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyB1OonqjmWLkl4_4wB8moixRnDk4bI7wwM",
  authDomain: "photography-portfolio-template.firebaseapp.com",
  projectId: "photography-portfolio-template",
  storageBucket: "photography-portfolio-template.appspot.com",
  messagingSenderId: "479175121788",
  appId: "1:479175121788:web:3cc1fe588ba9814dd422f9",
  measurementId: "G-T1H1VFWJ6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);