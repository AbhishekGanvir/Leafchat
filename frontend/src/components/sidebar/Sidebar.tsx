import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-r border-[rgba(107,114,128,0.25)] p-1 md:p-4 flex flex-col w-44 sm:w-1/2  md:w-1/2'>
			<span onClick={() => window.location.reload()} className="md:text-[45px] cursor-pointer sm:text-[26px] font-bold md:mt-80 bg-gradient-to-r from-[#FF6B35] via-[#CC4E2A] to-[#8B4513] text-transparent bg-clip-text">Leafchat</span>
			<SearchInput />
			<div className='divider px-3' />
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;
