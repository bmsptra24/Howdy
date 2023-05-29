interface Message {
  massage: string;
}
// import Header from "../components/Header";
const MessageSender = (Props: Message) => {
  return (
    <div className=" flex justify-end p-3 ">
      <div className="p-2 bg-sky-200 rounded-lg">
        <p>{Props.massage}</p>
      </div>
    </div>
  );
};

export default MessageSender;
