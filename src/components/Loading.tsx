import { AiOutlineLoading } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="bg-gradient-to-br from-sky-200 to-sky-400 w-screen h-screen flex justify-center items-center ">
      <AiOutlineLoading className="text-sky-700 text-7xl animate-spin" />
    </div>
  );
};

export default Loading;
