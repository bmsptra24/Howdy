import Img from "../_tests_/picture.png";

interface dataMessage {
  name: string;
  lastMessage: string;
  picture: string;
  idx: number;
  contactCLickedCallback: (idx: number) => void;
}

interface callback {
  contactCLickedCallback: (idx: number) => void;
}

const Massage = ({
  name,
  lastMessage,
  picture,
  idx,
  contactCLickedCallback,
}: dataMessage) => {
  return (
    <div
      className="ease-in-out duration-100 flex justify-between relative p-3 hover:bg-slate-200 cursor-pointer"
      onClick={() => {
        contactCLickedCallback(idx);
      }}
    >
      <img src={picture} alt="profil" className="w-16 rounded-full" />
      <div className="ml-3 w-full text-lg flex flex-col justify-center ">
        <p className="font-bold">{name}</p>
        <p>{lastMessage}</p>
      </div>
    </div>
  );
};

const ContactList = ({ contactCLickedCallback }: callback) => {
  return (
    <div className=" w-auto ">
      <Massage
        name="Udin"
        lastMessage="Hei buddy!"
        picture={Img}
        idx={0}
        contactCLickedCallback={contactCLickedCallback}
      />
      <Massage
        name="Marya"
        lastMessage="how about tomorow?"
        picture={Img}
        idx={1}
        contactCLickedCallback={contactCLickedCallback}
      />
    </div>
  );
};

export default ContactList;
