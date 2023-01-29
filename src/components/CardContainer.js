import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NEWS_API } from "../config";
import { updateArticles } from "../slices/articleSlice";
import Card from "./Card";

const CardContainer = () => {
	const dispatch = useDispatch();
	const articles = useSelector((store) => store.articles);

	const fetchData = async () => {
		const data = await fetch(NEWS_API);
		const json = await data.json();
		dispatch(updateArticles(json));
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="flex flex-wrap gap-7 p-5 mt-10 items-center justify-center">
			{articles?.map((article) => (
				<Card article={article} key={article.title} />
			))}
		</div>
	);
};

export default CardContainer;
