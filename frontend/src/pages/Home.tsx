import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
	return (
		<section>
			<div className="leaves">
		  <div className="set">
			<div><img src="leaf_01.png" alt="leaf" /></div>
			<div><img src="leaf_02.png" alt="leaf" /></div>
			<div><img src="leaf_03.png" alt="leaf" /></div>
			<div><img src="leaf_04.png" alt="leaf" /></div>
			<div><img src="leaf_01.png" alt="leaf" /></div>
			<div><img src="leaf_02.png" alt="leaf" /></div>
			<div><img src="leaf_03.png" alt="leaf" /></div>
			<div><img src="leaf_04.png" alt="leaf" /></div>
		  </div>
		</div>
		<img src="bg.jpg" className="bg" alt="background" />
		<img src="girl.png" className="girl" alt="girl" />
		<img src="trees.png" className="trees" alt="trees" />
		<div className='flex h-[80vh] w-full max-w-[90%] sm:max-w-sm min-w-[200px]  md:max-w-screen-md md:h-[550px] rounded-lg overflow-hidden bg-clip-padding bg-[rgba(255,255,255,0.06)] border-b border-r border-white/50 shadow-[0_25px_50px_rgba(0,0,0,0.1)] backdrop-filter backdrop-blur-[15px] border bg-opacity-0 '>
			<Sidebar />
			<MessageContainer />
		</div>
		</section>
	);
};
export default Home;
