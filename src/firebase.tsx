import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDf46wwYjgDsJozY_oFAQl89_MgLgYoxtM",
  authDomain: "nwitter-reloaded-285da.firebaseapp.com",
  projectId: "nwitter-reloaded-285da",
  storageBucket: "nwitter-reloaded-285da.appspot.com",
  messagingSenderId: "958443943481",
  appId: "1:958443943481:web:d7a6598c33b691736f7fe8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
