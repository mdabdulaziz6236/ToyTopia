
import { Link } from "react-router";
import Loading from "./Loading";
import useToys from "../Hooks/useToys";

const PopularToys = () => {
  const {toys, loading}= useToys()
  // const [toys, setToys] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Fetch the toys JSON file from public folder
  //   fetch("../../public/toy.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setToys(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching toys:", err);
  //       setLoading(false);
  //     });
  // }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {toys.map((toy) => (
        <div
          key={toy.toyId}
          className="group relative p-3 bg-gradient-to-br from-base-200 to-base-300 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
        >
          <img
            src={toy.pictureURL}
            alt={toy.toyName}
            className="h-48 w-full object-cover rounded-xl"
          />

          <h3 className="text-2xl font-bold mt-4 text-gray-800 group-hover:text-pink-600 transition-colors">
            {toy.toyName}
          </h3>

          <div className="flex justify-between items-center py-3 text-gray-700">
            <p className="font-semibold">
              Price: <span className="text-pink-600">${toy.price}</span>
            </p>

            <p className="text-sm font-medium">
              Available: {toy.availableQuantity}
            </p>
          </div>

          <div className="flex justify-between items-center text-gray-600">
            <p className="flex items-center gap-1 font-medium">
              {toy.rating} ⭐
            </p>
            <Link to={`/toyDetails/${toy.toyId}`}>
              <button className="btn btn-sm bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                View More
              </button>
            </Link>
          </div>

          {/* ছোট decoration effect */}
          <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-pink-400 transition-all duration-300 pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
};

export default PopularToys;
