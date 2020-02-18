import React from "react";
import CommentListing from "../commentListing";
import CreateComment from "../commentListing/CreateComment";

export default function NewsListItem(props) {
	return (
		<div className="newsWrapper">
			<div className="newsItem">
				<span>
					<h4>{props.news.Date}</h4>
					<h3>{props.news.Title}</h3>
				</span>

				<img
					alt="desc"
					height={100}
					title={props.name}
					src={props.news.Image}
				/>
				<p className="news-text">{props.news.Text}</p>
			</div>
			<CommentListing comments={props.comments} />
			{props.auth.isAuthenticated === false ? (
				<div className="non-auth-com">
					Only logged in users can post comments.
				</div>
			) : (
				<CreateComment
					newsId={props.news._id}
					username={props.auth.user.name}
				/>
			)}
		</div>
	);
}
