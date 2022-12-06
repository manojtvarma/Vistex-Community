import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import database from "../database/firebase";

const useFetchSingle = (collectionName, id) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDoc(doc(database, collectionName, id))
      .then(function (snapshot) {
        setData(snapshot.data());
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

export default useFetchSingle;
