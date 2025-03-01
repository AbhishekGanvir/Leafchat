import { LogOut } from "lucide-react";
import useLogout from "../../hooks/useLogout";
import toast from "react-hot-toast"
const LogoutButton = () => {
	const { logout } = useLogout();

	return (
		<>
		<div className='mt-auto'>
			<LogOut className='w-6 h-6 text-white hover:bg-[#f07168] cursor-pointer' onClick={() => {
				logout();
				toast(" 😿 Logged out successfully"); 
				 }} />
		</div>
		<footer className="footer sm:footer-horizontal footer-center text-[#1e293b]/100  p-4 
  ">
  <aside>
    <p><a href="https://github.com/AbhishekGanvir"> © Leafchat | Developed by Ahh🐝* </a></p>
  </aside>
</footer>
		</>
	);
};
export default LogoutButton;
