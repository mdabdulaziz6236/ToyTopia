import { GridLoader } from "react-spinners";

const LoadingPage = () => {
  return (
    <div className=" bg-gradient-to-r from-green-200 via-emerald-200 to-teal-200 mx-auto min-h-screen flex justify-center items-center">
      <div className="mx-auto min-h-screen flex justify-center items-center">
        <div className="flex flex-col items-center text-3xl lg:text-5xl font-extrabold">
          <div className="flex items-center">
            <span>Loading</span>
          </div>
          <div className="py-10">
            <GridLoader className="text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
