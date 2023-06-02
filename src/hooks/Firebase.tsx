import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYDS8IrcBcFozIhkp0MFjpf4ORmQU0TFE",
  authDomain: "howdy-da328.firebaseapp.com",
  projectId: "howdy-da328",
  storageBucket: "howdy-da328.appspot.com",
  messagingSenderId: "784099413504",
  appId: "1:784099413504:web:a6087621263779a1e152e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const addNewDataToDatabse = async (data: object) => {
  const db = getFirestore(app);

  try {
    const docRef = await addDoc(collection(db, "users"), data);

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getDataFromDatabase = async (path: string) => {
  const db = getFirestore(app);
  const querySnapshot = await getDocs(collection(db, path));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    console.log(doc.data());
  });
};

export const updateDataInDatabase = async (
  path: string,
  pathSegments: string
) => {
  const db = getFirestore(app);
  const docRef = doc(db, path, pathSegments);

  await updateDoc(docRef, {
    born: 24,
    first: "Bima",
  });
};

// return addNewDataToDatabse({
//   first: "Alan",
//   middle: "Mathison",
//   last: "Turing",
//   born: 1912,
// });
// updateDataInDatabase("users", "0qvtnnrGKFYkvIMzX2jN");
// return getDataFromDatabase("users");
