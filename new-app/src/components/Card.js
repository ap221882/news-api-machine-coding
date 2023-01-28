const Card = ({ article }) => {
	return (
		<div className="flex flex-col w-[300px]">
			<img className="rounded w-96" src={article?.urlToImage}></img>
			<h2 className="font-bold">{article?.title}</h2>
			<p className="truncate ...">{article?.description}</p>
			<div className="flex justify-between">
				<p>{article.author}</p>
				<p>{article.publishedAt}</p>
			</div>
		</div>
	);
};

export default Card;
