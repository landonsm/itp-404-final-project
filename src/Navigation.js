import React from "react";
import { Link, NavLink } from "react-router-dom";

export default class navigation extends React.Component {
	render() {
		return (
			<nav className="bg-dark">
				<ul className="nav justify-content-center">
					<li className="nav-item">
						<NavLink exact className="nav-link" to="/">
							Restaurants
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink exact className="nav-link" to="/restaurants/new">
							Add a Restaurant
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink exact className="nav-link" to="/favorites">
							Favorites
						</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}
