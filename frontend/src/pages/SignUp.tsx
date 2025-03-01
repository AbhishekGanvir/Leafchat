import { Link } from "react-router-dom";
import GenderCheckbox from "../components/GenderCheckbox";
import { useState } from "react";
import useSignup from "../hooks/useSignup";

  //import toast from "react-hot-toast";


const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});
	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender: "male" | "female") => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmitForm = (e: React.FormEvent) => {
		e.preventDefault();
		signup(inputs);
	};

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
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='flex flex-col w-[500px] max-w-[95%] rounded-3xl text-center items-center justify-center   bg-[rgba(255, 255, 255, 0.25)] border-b border-r border-white/50  shadow-[0_25px_50px_rgba(0,0,0,0.1)] backdrop-filter backdrop-blur-[15px] border bg-opacity-0'>
				<h1 className='w-full text-[2.5em] mt-3.5 text-center relative font-semibold text-[#8f2c24] '>
					Sign Up <span className='text-[47px] font-bold bg-gradient-to-r from-[#FF6B35] via-[#CC4E2A] to-[#8B4513] text-transparent bg-clip-text'>Leafchat </span>
				</h1>

				<form onSubmit={handleSubmitForm} className='flex flex-col gap-6'>
					<div>
						
						<input type='text' placeholder='Full Name'
						value={inputs.fullName}
						onChange={(e) => setInputs ({ ...inputs, fullName: e.target.value})}
						className='relative w-[350px] justify-center  p-[15px_20px] mb-8  outline-none pr-12 pl-12 text-[1.25em] text-[#8f2c24]  bg-[rgba(223,220,220,0.3)] border border-white/20 rounded-[5px] shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-lg  ' />
					</div>

					<div>
						
						<input type='text' placeholder='Username'
						value={inputs.username}
						onChange={(e) => setInputs ({ ...inputs, username: e.target.value})}
						className='relative w-[350px] justify-center  p-[15px_20px] mb-8  outline-none pr-12 pl-12 text-[1.25em] text-[#8f2c24]  bg-[rgba(223,220,220,0.3)] border border-white/20 rounded-[5px] shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-lg  ' />
					</div>

					<div>
						
						<input
							type='password'
							placeholder='Enter Password'
							value={inputs.password}
						onChange={(e) => setInputs ({ ...inputs, password: e.target.value})}
							className='relative w-[350px] justify-center  p-[15px_20px] mb-8  outline-none pr-12 pl-12 text-[1.25em] text-[#8f2c24]  bg-[rgba(223,220,220,0.3)] border border-white/20 rounded-[5px] shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-lg'
						/>
					</div>

					<div>
						
						<input
							type='confirmPassword'
							placeholder='Confirm Password'
							value={inputs.confirmPassword}
						onChange={(e) => setInputs ({ ...inputs, confirmPassword: e.target.value})}
							className='relative w-[350px] justify-center  p-[15px_20px] mb-8  outline-none pr-12 pl-12 text-[1.25em] text-[#8f2c24]  bg-[rgba(223,220,220,0.3)] border border-white/20 rounded-[5px] shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-lg'
						/>
					</div>

					<GenderCheckbox 
					selectedGender={inputs.gender}
					onCheckboxChange={handleCheckboxChange}
					
					/>


					<div>
					
						<button className='btn text-[1.2rem] w-[350px] btn-sm bg-[#8f2c24] hover:bg-[#d64c42] mt-2' //onClick={() => {
				
				//toast(" 🍁 Signed up successfully");}}
				 disabled={loading}>
						{loading ? "Loading..." : "Sign Up"}
						</button>
					</div>

					<Link
						to={"/login"}
						className='text-sm  hover:underline text-[1.25em] text-[#8f2c24] font-medium no-underline inline-block'
					>
						Already have an account?
					</Link>

				</form>
			</div>
		</div>
		</section>
	);
};
export default SignUp;
