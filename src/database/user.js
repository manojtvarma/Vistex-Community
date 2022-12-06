import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import database from "./firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";

const collectionRef = collection(database, "users");
let users = [];
let user = {};

export function getUsers() {
  getDocs(collectionRef).then(function (snapshot) {
    snapshot.docs.forEach(function (doc) {
      users.push({ ...doc.data(), uid: doc.id });
    });
  });
  return users;
}

export function getUser(userID) {
  getDoc(doc(database, "users", userID)).then(function (snapshot) {
    user = snapshot.data();
    console.log(user);
  });
  return user;
}

export function createUser(user) {
  createUserWithEmailAndPassword(auth, user.email, user.password)
    .then(function (userCred) {
      updateProfile(userCred.user, {
        displayName: user.name,
      });
    })
    .catch(function (error) {
      console.log(error.message);
    });
}

export function signInUser(user) {
  signInWithEmailAndPassword(auth, user.email, user.password)
    .then(function () {
      console.log("user has sign in");
    })
    .catch(function (error) {
      console.log(error.message);
    });
}

export function signOutUser() {
  signOut(auth)
    .then(function () {
      console.log("user has sign out");
    })
    .catch(function (error) {
      console.log(error.message);
    });
}

onAuthStateChanged(auth, (user) => {});
