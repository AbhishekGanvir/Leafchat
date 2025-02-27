import { useAuthContext } from "../../context/Auth.context";
import { extractTime } from "../../utils/extractTime";
import useConversation, { MessageType } from "../../zustand/useConversation";

const Message = ({ message }: { message: MessageType }) => {
  
  const {authUser} = useAuthContext();
  const {selectedConversation} =useConversation();

	const fromMe = message?.senderId === authUser?.id;

	const img = fromMe
		? authUser?.profilePic
		: selectedConversation?.profilePic;
	const chatClass = fromMe ? "chat-end" : "chat-start";

	const bubbleBg = fromMe ? "bg-[#d64c42]" : "";
  const shakeClass = message.shouldShake ? "shake" : "";

	
  return (

		<div className={`chat ${chatClass}`}>
			 {/* Avatar - Visible on all screens, but smaller on sm */}
  <div className="chat-image avatar">
    <div className="w-5 sm:w-6 md:w-10 rounded-full">
      <img alt="User avatar" src={img} />
    </div>
  </div>

  {/* Chat Bubble */}
  
  <p className={`chat-bubble ${shakeClass} text-white ${bubbleBg} text-xs sm:text-sm md:text-md max-w-[80%]`}>
    {message.body}
  </p>

  {/* Chat Footer (Time) */}
  <span className="chat-footer opacity-50 text-[10px] sm:text-xs flex gap-1 items-center text-gray-950 font-extrabold">
    {extractTime(message.createdAt)}
  </span>
		</div>
	);
};
export default Message;
