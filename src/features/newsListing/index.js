import React from "react";

import NewsListItem from "./NewsListItem";

export default function NewsListing(props) {
	return (
		<div>
			{props.comments === undefined ? null : (
				<div>
					{props.news.map(news => (
						<NewsListItem
							news={news}
							key={news._id}
							comments={props.comments.filter(
								comment => comment.newsId === news._id
							)}
							auth={props.auth}
						/>
					))}
				</div>
			)}
		</div>
	);
}
