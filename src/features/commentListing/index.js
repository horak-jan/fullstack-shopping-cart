import React from "react";
import CommentListItem from "./CommentListItem";

export default function CommentListing(props) {
	return props.comments === undefined ? null : (
		<div>
			{props.comment}
			<div>
				{props.comments.map(comment => (
					<CommentListItem comment={comment} key={comment.created} />
				))}
			</div>
		</div>
	);
}
