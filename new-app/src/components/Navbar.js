const Navbar = () => {
	return (
		<div className="flex gap-4 justify-between p-5 bg-slate-200">
			<div className="flex gap-4 items-center">
				<span>Home</span>
				<span>About</span>
				<span>General</span>
				<span>Business</span>
				<span>Entertainment</span>
				<span>Health</span>
			</div>
			<select>
				<option>in</option>
				<option>us</option>
			</select>
		</div>
	);
};

export default Navbar;
