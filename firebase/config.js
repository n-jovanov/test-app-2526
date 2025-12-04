import Constants from "expo-constants";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const extra = Constants.expoConfig.extra;

const firebaseConfig = {
  apiKey: extra.apiKey,
  authDomain: extra.authDomain,
  projectId: extra.projectId,
  storageBucket: extra.storageBucket,
  messagingSenderId: extra.messagingSenderId,
  appId: extra.appId,
};

const app = initializeApp(firebaseConfig);

console.log("EXPO EXTRA:", Constants.expoConfig?.extra);

export const auth = getAuth(app);
