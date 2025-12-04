import { GridLoader } from "react-spinners";

const LoadingPage = () => {
  return (
    <div className=" bg-white mx-auto min-h-screen flex justify-center items-center">
      <div className="mx-auto min-h-screen flex justify-center items-center">
        <div className="flex flex-col items-center text-3xl lg:text-5xl font-extrabold">
          <div className="py-10">
            <GridLoader className="text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
