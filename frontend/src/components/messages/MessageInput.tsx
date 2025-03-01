import { Send } from "lucide-react";
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");

	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!message.trim()) return;
		await sendMessage(message);
		setMessage("");
	};
	return (
		<form className='px-4 my-3  w-[98%] self-center min-w-[200px] max-w sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto' onSubmit={handleSubmit}>
			<div className='w-full relative'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full h-8  pr-14  pl-3 font-semibold text-gray-800 outline-none bg-[rgba(223,220,220,0.3)] border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-lg'
					placeholder='Send a message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type='submit' className='absolute inset-y-0 right-2 flex end-0 items-center px-2'>
					{loading ? <span className='loading loading-spinner' /> : <Send className='w-5 h-5 text-white' />}
				</button>
			</div>
		</form>
	);
};
export default MessageInput;