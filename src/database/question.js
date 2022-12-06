import { collection, getDocs, addDoc } from "firebase/firestore";
import database from "./firebase";

const collectionRef = collection(database, "questions");
let questions = [];

export function getQuestions() {
  getDocs(collectionRef).then(function (snapshot) {
    snapshot.docs.forEach(function (doc) {
      questions.push({ ...doc.data(), id: doc.id });
    });
  });
  return questions;
}

export function addQuestion(question) {
  addDoc(collectionRef, {
    title: question.title,
    body: question.body,
    timestamp: Date.now(),
    uid: question.uid,
    tags: question.tags,
    author: question.author,
    votes: question.votes,
  }).then(function () {
    console.log("Question Added Successfully");
  });
}
