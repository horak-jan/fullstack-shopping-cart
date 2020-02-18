import React, { Component } from "react";
import { submitComment } from "../../actions/commentActions";
import { connect } from "react-redux";

class CreateComment extends Component {
	constructor() {
		super();

		this.state = {
			body: ""
		};
	}

	updateComment(event) {
		this.setState({
			body: event.target.value
		});
	}

	submitComment() {
		this.props.dispatch(
			submitComment(this.props.newsId, this.props.username, this.state.body, {
				body: this.state.body
			})
		);

		this.setState({
			body: ""
		});
	}

	render() {
		return (
			<div className="create-comment">
				<h3>Post comment</h3>
				<textarea
					value={this.state.body}
					onChange={this.updateComment.bind(this)}
					id="body"
					type="text"
				></textarea>
				<br />

				<button onClick={this.submitComment.bind(this)}>Post</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		username: state.auth.user.name
	};
};

export default connect(mapStateToProps)(CreateComment);
