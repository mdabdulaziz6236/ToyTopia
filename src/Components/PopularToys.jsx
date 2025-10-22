import { useEffect, useState } from "react";
import { Link } from "react-router";
import Loading from "./Loading";


const PopularToys = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the toys JSON file from public folder
    fetch("../../public/toy.json")
      .then((res) => res.json())
      .then((data) => {
        setToys(data); 
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching toys:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {toys.map((toy) => (
        <div key={toy.toyId} className="border p-4 rounded-lg shadow-lg">
          <img
            src={toy.pictureURL}
            alt={toy.toyName}
            className="h-48 w-full object-cover rounded"
          />
          <h3 className="text-xl font-bold mt-2">{toy.toyName}</h3>
          <p>Rating: {toy.rating} ⭐</p>
          <p>Available: {toy.availableQuantity}</p>
          <p>Price: ${toy.price}</p>
          <Link to={`/toy/${toy.toyId}`}>
            <button className="mt-2 btn btn-primary">View More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PopularToys;
