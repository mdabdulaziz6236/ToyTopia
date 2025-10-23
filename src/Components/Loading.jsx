import { GridLoader } from "react-spinners";




const LoadingPage = () => {
  return (
    <div className="w-screen bg-pink-300 mx-auto h-screen flex justify-center items-center">
      <div className="flex flex-col items-center text-3xl lg:text-5xl font-extrabold">
        
        <div className="flex items-center">
          <span>Loading</span>
         
        </div>
          <div className="py-10">
          
            <GridLoader className="text-red-500" />
          </div>

        
      </div>
    </div>
  );
};

export default LoadingPage;
