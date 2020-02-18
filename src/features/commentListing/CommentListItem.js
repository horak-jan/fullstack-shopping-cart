import React from "react";
var moment = require("moment");

export default function CommentListItem(props) {
	return (
		<div className="commentListItem">
			<div>
				{props.comments && props.comments.length === 0 ? (
					<div>No comments yet.</div>
				) : (
					<>
						<p className="date">
							{moment(props.comment.created).format("D MMM YYYY")}
						</p>
						<div>
							<span className="fat">{props.comment.username}:</span>{" "}
							{props.comment.body}
						</div>
					</>
				)}
			</div>
		</div>
	);
}
