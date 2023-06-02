import {
  addNewDataToDatabse,
  getDataFromDatabase,
  updateDataInDatabase,
} from "../hooks/Firebase";

interface Props {
  setUser: (e: any) => void;
}

import { FaHatCowboy } from "react-icons/fa";
const Login = ({ setUser }: Props) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-sky-200 to-sky-400 ">
      <div className="flex flex-col items-center curso">
        <div className="border-b-2 border-sky-600 flex">
          <p className="sm:text-6xl text-4xl text-sky-950">Hey Howdy!</p>
          <FaHatCowboy className="hover:animate-bounce sm:text-6xl text-4xl ml-2 sm:hover:scale-110 hover:scale-125 hover:mb-2 ease-out duration-300" />
        </div>
        <div
          className="ease-out duration-300 flex justify-center mt-6 bg-sky-400 border-sky-500 border px-4 py-2 rounded-full hover:scale-110 hover:bg-sky-500 cursor-pointer"
          onClick={() => {
            setUser((e: boolean) => !e);
          }}
        >
          <p className="text-xl select-none group">login with google</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
