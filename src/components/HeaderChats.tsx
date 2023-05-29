import { BiLeftArrowAlt } from "react-icons/bi";
import picture from "../_tests_/picture.png";
interface callback {
  contactCLickedCallback: () => void;
}
const Header = ({ contactCLickedCallback }: callback) => {
  return (
    <div className="flex  items-center text-2xl right-0 px-5 bg-sky-500 h-14">
      <div
        className="hover:text-sky-100 cursor-pointer ease-in-out duration-200"
        onClick={() => {
          contactCLickedCallback();
        }}
      >
        <BiLeftArrowAlt className="text-4xl" />
      </div>
      <img src={picture} alt="picture" className="w-10 rounded-full mr-3 " />
      <p>Bima Saputra</p>
    </div>
  );
};

export default Header;
