import useConversation from "../../zustand/useConversation";
import { ConversationType } from "../../types/global";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation,emoji }: { conversation: ConversationType,emoji:string }) => {
	
	const { setSelectedConversation }= useConversation();
	const { selectedConversation } = useConversation();
	const isSelected = selectedConversation?.id === conversation.id;
	const {onlineUsers}= useSocketContext();
    const isOnline = onlineUsers.includes(conversation.id);
	
	return (
		<>
			<div className={`flex gap-2 items-center hover:bg-[#f07168] rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-[#f07168]" : ""}`}onClick={() => setSelectedConversation(conversation)} >



			<div className="relative flex items-center">
    {/* Green Dot */}
    {isOnline && (
      <div className="absolute -right-0 top-0 w-3 h-3 bg-green-500 rounded-full"></div>
    )}
					<div className='w-8 md:w-12 rounded-full'>
						<img src={conversation.profilePic} alt='user avatar' />
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-800 text-sm md:text-md'>{conversation.fullName}</p>
						<span className='text-xl   md:inline-block'>{emoji}</span>
					</div>
				</div>
			</div>

			<div className='divider border-t border-[rgba(107,114,128,0.25)] p-1 my-0 py-0 h-1' />
		</>
	);
};
export default Conversation;
