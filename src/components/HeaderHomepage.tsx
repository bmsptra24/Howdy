import { BiLeftArrowAlt } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { IsMenuClickedState } from "../hooks/State";
// eror when clik menu (want to togle it)
const Menu = ({ setIsMenuClicked }: { setIsMenuClicked: () => void }) => {
  return (
    <>
      <div className="flex  items-center text-2xl right-0 px-5 bg-sky-500 h-14">
        <div
          className="hover:text-sky-100 cursor-pointer ease-in-out duration-200"
          onClick={() => {
            setIsMenuClicked();
          }}
        >
          <BiLeftArrowAlt className="text-4xl" />
        </div>
        <p>Menu</p>
      </div>
      <div className="bg-sky-100 bg-gradient-to-br w-screen h-screen"></div>
    </>
  );
};

const Header = () => {
  const [IsMenuClicked, setIsMenuClicked] = [
    IsMenuClickedState().IsMenuClicked,
    IsMenuClickedState().setIsMenuClicked,
  ];
  IsMenuClicked && console.log("work");

  // const [IsMenuClicked, setIsMenuClicked] = useState(false);
  const [IsSearchClicked, setIsSearchClicked] = useState(false);
  return (
    <>
      {IsMenuClicked && (
        <Menu
          setIsMenuClicked={() => {
            setIsMenuClicked((e) => !e);
          }}
        />
      )}
      {!IsMenuClicked && (
        <div className="flex justify-between items-center text-2xl right-0 px-5 bg-sky-500 h-14">
          <div
            className="hover:text-sky-100 cursor-pointer ease-in-out duration-200"
            onClick={() => {
              setIsMenuClicked((e) => !e);
            }}
          >
            <RxHamburgerMenu />
          </div>
          <p>Howdy</p>
          <div
            className="relative hover:text-sky-100 cursor-pointer ease-in-out duration-200"
            onClick={() => {
              setIsSearchClicked((e) => !e);
            }}
          >
            <label htmlFor="search" className="cursor-pointe select-none">
              <BiSearch />
            </label>
          </div>
          <input
            className={
              (IsSearchClicked ? "visible" : "hidden") +
              " absolute z-10 left-0 right-16 ml-3 bg-sky-100 px-2 rounded-md "
            }
            type="text"
            name="search"
            id="search"
          />
        </div>
      )}
    </>
  );
};

export default Header;
