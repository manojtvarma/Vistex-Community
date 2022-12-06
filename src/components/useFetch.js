import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import database from "../database/firebase";

const useFetch = (collectionName, id, subCollectionName) => {
  const list = [];
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  let collectionRef;

  if (id && subCollectionName) {
    collectionRef = collection(database, collectionName, id, subCollectionName);
  } else {
    collectionRef = collection(database, collectionName);
  }

  useEffect(() => {
    getDocs(collectionRef)
      .then((snapshot) => {
        snapshot.docs.forEach(function (doc) {
          list.push({ ...doc.data(), id: doc.id });
        });
        setData(list);
        setIsPending(false);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
        console.log(error);
      });
  }, [collectionName]);

  return { data, isPending, error };
};

export default useFetch;
