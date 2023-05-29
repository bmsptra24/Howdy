// import Header from "../components/Header";
import MessageReceiver from "../components/MessageReceiver";
import MessageSender from "../components/MessageSender";
import HeaderChats from "../components/HeaderChats";
import { IoMdSend } from "react-icons/io";
interface callback {
  contactCLickedCallback: () => void;
}
const HomePage = ({ contactCLickedCallback }: callback) => {
  return (
    <div className="flex flex-col w-auto h-screen bg-sky-50">
      <div className="grow-0 ">
        <HeaderChats contactCLickedCallback={contactCLickedCallback} />
      </div>
      <div className="grow ">
        <MessageSender massage="Hei Whats up bre!" />
        <MessageReceiver massage="Im gud" />
        <MessageSender massage="Nais" />
      </div>
      <div className="">
        <label className="cursor-text items-center px-3 flex justify-between h-14 bg-sky-100 m-3 rounded-full border-2 border-sky-700">
          <textarea
            name="message"
            id="message"
            className="w-full h-7 m-3 textarw bg-sky-100 focus:outline-none"
          ></textarea>
          <button>
            <IoMdSend className="text-3xl hover:text-sky-700 text-sky-900" />
          </button>
        </label>
      </div>
    </div>
  );
};

export default HomePage;
