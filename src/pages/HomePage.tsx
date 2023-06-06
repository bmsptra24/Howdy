import Header from "../components/HeaderHomepage";
import ContactList from "../components/ContactList";
import Chats from "./Chats";
import { useAuth0 } from "@auth0/auth0-react";

import { useState } from "react";

const HomePage = () => {
  const [isChatClicked, setIsChatClicked] = useState(false);
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return !isChatClicked ? (
    <div className="flex flex-col w-auto h-screen bg-sky-50">
      <div className="grow-0 ">
        <Header />
      </div>
      <div className="grow border">
        <ContactList
          contactCLickedCallback={() => {
            setIsChatClicked((e) => !e);
          }}
        />
      </div>
    </div>
  ) : (
    <Chats
      contactCLickedCallback={() => {
        setIsChatClicked((e) => !e);
      }}
    />
  );
};

export default HomePage;
