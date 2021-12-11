import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import Accordion from "./Accordion";

export default class Library extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			restaurants: [],
			openPanel: 1,
			titles: [],
			descriptions: [],
		};
	}

	// https://my-json-server.typicode.com/landonsm/restaurants-api-final-project/restaurants
	componentDidMount() {
		document.title = "Favorites";
		fetch("https://final-restaurants.herokuapp.com/api/restaurants")
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				let allTitlesArray = [];
				let allDescriptionsArray = [];
				let tempTitlesArray = [];
				let tempDescriptionsArray = [];
				let favCounter = 0;

				for (let i = 0; i < json.length; i++) {
					if (json[i].favorite) {
						favCounter += 1;
					}
				}

				if (json.length >= 3 && favCounter >= 3) {
					for (let i = 0; i < json.length; i++) {
						if (json[i].favorite) {
							allTitlesArray.push(json[i].name);
							allDescriptionsArray.push(json[i].description);
						}
					}
					let arr = [];
					while (arr.length < 3) {
						let r = Math.floor(Math.random() * allTitlesArray.length);
						if (arr.indexOf(r) === -1) arr.push(r);
					}
					for (let i = 0; i < arr.length; i++) {
						tempTitlesArray.push(allTitlesArray[arr[i]]);
						tempDescriptionsArray.push(allDescriptionsArray[arr[i]]);
					}
				}

				this.setState({
					restaurants: json,
					titles: tempTitlesArray,
					descriptions: tempDescriptionsArray,
				});
			});
	}

	render() {
		return (
			<div className="container">
				<table className="table my-3 table-striped">
					<thead>
						<tr>
							<th>Restaurant</th>
							<th>Cuisine</th>
							<th>Location</th>
							<th>Rating</th>
							<th>Favorite</th>
						</tr>
					</thead>
					<tbody>
						{this.state.restaurants.map((restaurant) => {
							return (
								restaurant.favorite && (
									<tr>
										<td key={restaurant.id} className="td-element">
											<Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
										</td>
										<td className="td-element">{restaurant.cuisine}</td>
										<td className="td-element">{restaurant.location}</td>
										<td className="td-element">{restaurant.rating}</td>
										<td className="td-element">
											<div className="btn-group">
												<Link
													to={`/restaurants/${restaurant.id}/favoriteChange`}
													className="btn"
												>
													<FontAwesomeIcon
														icon={faStar}
														color={restaurant.favorite ? "yellow" : "black"}
														size="2x"
														className="star"
													/>
												</Link>
											</div>
											<button
												className="btn"
												onClick={(event) => {
													this.handleFavoritesChange(event, restaurant.id);
												}}
											></button>
										</td>
									</tr>
								)
							);
						})}
					</tbody>
				</table>
				{this.state.titles.length != 0 && (
					<div className="row accordion-container">
						<div className="col-sm-8 accordion-col my-3">
							<h4>Popular Today</h4>
							<Accordion
								className="my-3"
								description={this.state.descriptions}
								title={this.state.titles}
								value={this.state.openPanel}
								onPanelClick={(clickedPanel) => {
									this.setState({ openPanel: clickedPanel });
								}}
								display="none"
							/>
						</div>
					</div>
				)}
			</div>
		);
	}
}