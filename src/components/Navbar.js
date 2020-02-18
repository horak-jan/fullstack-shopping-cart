import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authentication";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
	onLogout(e) {
		e.preventDefault();
		this.props.logoutUser(this.props.history);
	}

	render() {
		const { isAuthenticated } = this.props.auth;
		const authLinks = (
			<div className="navbar">
				<ul>
					<li>
						<Link className="nav-link" to="/">
							Home
						</Link>
					</li>

					<li className="nav-item">
						<Link className="nav-link" to="/store">
							Store
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/cart">
							Cart ({this.props.cart.length})
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/checkout">
							Check out
						</Link>
					</li>
					<li>
						{" "}
						{/* eslint-disable-next-line  */}
						<a href="/" className="nav-link" onClick={this.onLogout.bind(this)}>
							Logout
						</a>
					</li>
				</ul>
			</div>
		);
		const guestLinks = (
			<div className="navbar-more">
				<ul>
					<li>
						<Link className="navbar-brand" to="/">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/store">
							Store
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/cart">
							Cart (
							{this.props.cart.reduce((acc, item) => {
								return acc + item.quantity;
							}, 0)}
							)
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/checkout">
							Check out
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/register">
							Sign Up
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/login">
							Sign In
						</Link>
					</li>
				</ul>
			</div>
		);
		return <>{isAuthenticated ? authLinks : guestLinks}</>;
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
	cart: state.cart
});

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));
