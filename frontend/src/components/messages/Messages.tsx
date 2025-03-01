import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import uselistenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const { loading, messages } = useGetMessages();
	uselistenMessages();
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	// Scroll to bottom when messages change
	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	return (
		<div className='px-2 sm:px-4 flex-1 min-w-[200px] w-full max-w-screen-md overflow-y-auto  overflow-x-hidden max-h-[890px]'>
			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			
			{messages.map((message) => (
				<Message key={message.id} message={message} />
			))}
			
			{!loading && messages.length === 0 && (
				<p className='footer sm:footer-horizontal footer-center text-white hover:text-white p-4 
  backdrop-blur-lg bg-gradient-to-t from-white/20 via-white/10 to-transparent 
  border-t border-white/20 shadow-md'>
					Send a message to start the conversation
				</p>
			)}
			
			{/* Invisible element to scroll to */}
			<div ref={messagesEndRef} />
		</div>
	);
};

export default Messages;