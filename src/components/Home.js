import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchNewsAction from "../actions/newsActions";
import { getNewsError, getNews, getNewsPending } from "../reducers/newsReducer";
import fetchCommentAction from "../actions/commentActions";
import { getComment } from "../reducers/commentReducer";

import LoadingSpinner from "../features/loading-spinner";
import NewsListing from "../features/newsListing";

class Home extends Component {
	constructor(props) {
		super(props);

		this.shouldComponentRender = this.shouldComponentRender.bind(this);
	}

	componentDidMount() {
		const { fetchNews, fetchComment } = this.props;
		fetchNews();
		fetchComment();
	}

	shouldComponentRender() {
		if (this.pending === false) return false;
		return true;
	}

	render() {
		const { news, comments, auth } = this.props;

		if (!this.shouldComponentRender()) return <LoadingSpinner />;

		return (
			<div className="wrapper">
				<div className="news">
					<h2>News</h2>
					<NewsListing news={news} comments={comments} auth={auth} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	error: getNewsError(state),
	news: getNews(state.news),
	comments: getComment(state.comments),
	pending: getNewsPending(state),
	auth: state.auth
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			fetchNews: fetchNewsAction,
			fetchComment: fetchCommentAction
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
