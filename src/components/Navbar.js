import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { HEADLINES_API, NEWS_API } from "../config";
import { updateArticles } from "../slices/articleSlice";

const Navbar = () => {
	const [country, setCountry] = useState("All");
	const dispatch = useDispatch();

	const updateData = async () => {
		const url =
			country === "All"
				? NEWS_API
				: HEADLINES_API + "&country=" + country;

		const data = await fetch(url);
		const json = await data.json();
		dispatch(updateArticles(json));
	};

	useEffect(() => {
		updateData();
	}, [country]);

	return (
		<div className="flex gap-4 justify-between py-5 px-10 bg-slate-200">
			<div className="flex gap-4 items-center">
				<span>Home</span>
				<span>About</span>
				<span>General</span>
				<span>Business</span>
				<span>Entertainment</span>
				<span>Health</span>
			</div>
			<select
				defaultValue="All"
				onChange={(e) => setCountry(e.target.value)}
				className="rounded-md px-5 w-32 outline-none border border-slate-700"
			>
				<option value="All">All</option>
				<option value="in">India</option>
				<option value="us">USA</option>
			</select>
		</div>
	);
};

export default Navbar;
