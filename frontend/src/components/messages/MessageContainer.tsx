import MessageInput from "./MessageInput";
import Messages from "./Messages";

import useConversation from "../../zustand/useConversation";
import { MessageCircle } from "lucide-react";
import { useAuthContext } from "../../context/Auth.context";

const MessageContainer = () => {
  const { selectedConversation } = useConversation();

	return (
		<div className="w-full flex flex-col ">
      {!selectedConversation ? (
        <NoChatSelected />

      ): (
  <>
    {/* Header */}
    <div className="relative w-full max-w-[100%] sm:max-w justify-center p-[15px_20px] outline-none bg-[rgba(223,220,220,0.3)] border border-white/20 rounded-[5px] shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-lg mx-auto">
      <span className="label-text text-gray-800 font-bold">To:</span>
      <span className="text-gray-950 font-bold">{selectedConversation.fullName}</span>
    </div>

    <Messages />
    <MessageInput />
  </>
  )}
</div>

	);
};
export default MessageContainer;

const NoChatSelected = () => {
  const {authUser} = useAuthContext();
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-white hover:text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]
       font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 {authUser?.fullName} 🍁</p>
        <p>Select a chat to start messaging</p>
        <MessageCircle className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  );
};
