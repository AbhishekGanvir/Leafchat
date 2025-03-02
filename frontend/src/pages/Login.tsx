import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../hooks/useLogin";
 // import toast from "react-hot-toast";
const Login = () => {
	const [inputs,setInputs] = useState({
		username: "",
		password: "",
	});
	 const {loading, login} = useLogin();
	const handleSubmitForm = async (e: React.FormEvent) => {
		e.preventDefault();
		login(inputs.username,inputs.password
		);
	}
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
		
		<div className='flex flex-col items-center  justify-center min-w-96 mx-auto '>
		  <div className=' flex flex-col  w-[500px] rounded-3xl text-center max-w-[95%] items-center justify-center   bg-[rgba(255, 255, 255, 0.25)] border-b border-r border-white/50  shadow-[0_25px_50px_rgba(0,0,0,0.1)] backdrop-filter backdrop-blur-[15px] border bg-opacity-0'>
		  
		  
			<h1 className='w-full text-[2.5em] mt-3.5 text-center relative font-semibold text-[#8f2c24] '>
			  Login <span className="text-[47px] font-bold bg-gradient-to-r from-[#FF6B35] via-[#CC4E2A] to-[#8B4513] text-transparent bg-clip-text">Leafchat</span>
			</h1>
  
			<form className='flex flex-col gap-6' onSubmit={handleSubmitForm}>
			  <div>
				
				<input type='username' placeholder='Username' 
				value={inputs.username}
				onChange={(e) => setInputs({...inputs, username: e.target.value})}

				className='relative w-[350px] justify-center  p-[15px_20px] mb-8  outline-none pr-12 pl-12 text-[1.25em] text-[#8f2c24]  bg-[rgba(223,220,220,0.3)] border border-white/20 rounded-[5px] shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-lg   ' />
			  </div>
  
			  <div>
				
				<input
				  type='password'
				  placeholder='Password'
				  value={inputs.password}
				onChange={(e) => setInputs({...inputs,  password: e.target.value})}
				  className='relative w-[350px] justify-center  p-[15px_20px] mb-8  outline-none pr-12 pl-12 text-[1.25em] text-[#8f2c24]  bg-[rgba(223,220,220,0.3)] border border-white/20 rounded-[5px] shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-lg'
				/>
			  </div>
  
			  <div>
				<button className='btn text-[1.2rem] w-[350px] btn-sm bg-[#8f2c24] hover:bg-[#d64c42] mt-2' //onClick={() => {
				
				//toast(" 🍁 Logged in successfully");}}
				 disabled={loading}> {loading ? "Loading..." : "Login"} </button>
			  </div>
			  <Link
				to='/signup'
				className='text-sm  hover:underline text-[1.25em] text-[#8f2c24] font-medium no-underline inline-block'
			  >
				{"Don't"} have an account?
			  </Link>
			</form>
		  </div>
		</div>
	  </section>
	);
  };
  
  export default Login;
  