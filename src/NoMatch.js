import React from "react";
import { Link } from "react-router-dom";

export default class NoMatch extends React.Component {
	render() {
		return (
			<div className="container">
				<h2 className="header my-3">Page not found</h2>
				<div className="center-btns">
					<div className="btn-group">
						<Link to={`/`} className="btn btn-secondary">
							Back to Home
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
