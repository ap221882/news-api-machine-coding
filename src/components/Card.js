const Card = ({ article }) => {
	return (
		<div className="flex flex-col w-[300px] h-[400px] gap-4 mb-10 justify-between">
			<img
				className="rounded-md w-96 object-cover h-48"
				src={article?.urlToImage}
			></img>
			<h2 className="font-bold">{article?.title}</h2>
			<p className="">{article?.description?.slice(0, 100) + "..."}</p>
			<div className="flex justify-between gap-2">
				<p className="text-slate-600 text-ellipsis">
					{article?.author}
				</p>
				<p className="text-slate-600">{article?.publishedAt}</p>
			</div>
		</div>
	);
};

export default Card;
