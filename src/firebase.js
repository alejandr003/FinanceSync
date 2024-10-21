import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD1ZSRBy0KXqOvBSFa9comt28ZnoptdDoM",
  authDomain: "financesync-b9b55.firebaseapp.com",
  projectId: "financesync-b9b55",
  storageBucket: "financesync-b9b55.appspot.com",
  messagingSenderId: "45065287404",
  appId: "1:45065287404:web:1e65508864762c467d97c9",
  measurementId: "G-CYLK2HEPTV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

export default app;
