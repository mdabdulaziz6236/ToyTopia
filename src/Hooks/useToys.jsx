// import axios from "axios";
import axios from "axios";
import { useEffect, useState } from "react";

const useToys = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("/public/toy.json")
      .then((res) => {
        setTimeout(() => {
          setToys(res.data);
          setLoading(false);
        }, 500);
      })
      .catch((err) => {
        setTimeout(() => {
          setError(err);
          setLoading(false);
        }, 500);
      });
  }, []);

  return { toys, loading, error };
};

export default useToys;
