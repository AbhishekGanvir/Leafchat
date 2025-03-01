import { Search } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import { ConversationType } from "../../types/global";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c: ConversationType) =>
			c.fullName.toLowerCase().includes(search.toLowerCase())
		);

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};

	return (
		<form  onSubmit={handleSubmit} className='flex  items-center gap-2 px-4 '>
			<input
				type='text'
				placeholder='Search…'
				className=' pr-3 h-9  text-center
				 rounded-full sm:rounded-full font-semibold  p-5.5 text-gray-800 outline-none   bg-[rgba(223,220,220,0.3)]  border-white/20  shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-lg  w-full '
				 value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button type='submit' className='btn md:btn-md btn-sm btn-circle bg-[#d64c42] hover:bg-[#f07168] text-white  '>
				<Search className='w-4 h-4 md:w-6 md:h-6  outline-none' />
			</button>
		</form>
	);
};
export default SearchInput;
