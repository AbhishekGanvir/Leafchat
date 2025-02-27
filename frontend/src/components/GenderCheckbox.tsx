const GenderCheckbox = ( {
	selectedGender,
	onCheckboxChange,}: {
		selectedGender:string;
		onCheckboxChange: (gender: "male" | "female") => void;
	}
) => {
	return (
		<div className='flex gap-2'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text'>Male</span>
					<input type='checkbox' className='checkbox bg-[rgba(223,220,220,0.3)] border border-white/20 rounded-[5px] shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-lg'
				checked={selectedGender === "male"}
				onChange={() => onCheckboxChange ("male")}	
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text'>Female</span>
					<input type='checkbox' className='checkbox bg-[rgba(223,220,220,0.3)] border border-white/20 rounded-[5px] shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-lg'
					
					checked={selectedGender === "female"}
					onChange={() => onCheckboxChange ("female")}
					/>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;
