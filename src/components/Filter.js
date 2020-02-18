import React, { Component } from "react";

export default class Filter extends Component {
	render() {
		return (
			<div className="filter-row">
				<div>
					<label>
						Order by
						<select
							className="form-control"
							value={this.props.sort}
							onChange={this.props.handleChangeSort}
						>
							<option value="">Select</option>
							<option value="lowest">lowest to highest</option>
							<option value="highest">highest to lowest</option>
						</select>
					</label>
				</div>
				<div>
					<label>
						By platform
						<select
							className="form-control"
							value={this.props.platform}
							onChange={this.props.handleChangePlatform}
						>
							<option value="">Select</option>
							<option value="linux">Linux</option>
							<option value="windows">Windows</option>
							<option value="mac">Mac</option>
						</select>
					</label>
				</div>
			</div>
		);
	}
}
