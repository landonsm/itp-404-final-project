import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { isThisTypeNode } from "typescript";
import Modal from "./Modal";

export default class Playlist extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			restaurant: [],
			mondayHours: [],
			tuesdayHours: [],
			wednesdayHours: [],
			thursdayHours: [],
			fridayHours: [],
			saturdayHours: [],
			sundayHours: [],
			meals: [],
			isModalOpen: false,
			confirmDelete: false,
		};
	}

	// https://my-json-server.typicode.com/landonsm/restaurants-api-final-project/restaurants/
	componentDidMount() {
		document.title = this.state.restaurant.name;
		const id = this.props.match.params.id;
		fetch(`https://final-restaurants.herokuapp.com/api/restaurants/${id}`)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				document.title = json.name;
				this.setState({
					restaurant: json,
					mondayHours: json.hours[0].monday[0],
					tuesdayHours: json.hours[0].tuesday[0],
					wednesdayHours: json.hours[0].wednesday[0],
					thursdayHours: json.hours[0].thursday[0],
					fridayHours: json.hours[0].friday[0],
					saturdayHours: json.hours[0].saturday[0],
					sundayHours: json.hours[0].sunday[0],
					meals: json.meals[0],
				});
			})
			.catch((error) => console.error(error));

		document.title = this.state.restaurant.name;
		console.log(this.state.restaurant.name);
	}

	deleteRestaurant() {
		const id = this.props.match.params.id;
		// https://my-json-server.typicode.com/landonsm/restaurants-api-final-project/restaurants/
		fetch(`https://final-restaurants.herokuapp.com/api/restaurants/${id}`, {
			method: "DELETE",
		}).then(() => {
			toast.success(`"${this.state.restaurant.name}" was deleted`);
			this.props.history.push("/");
		});
	}

	render() {
		let openFor = false;
		let openForString = "Open for: ";
		if (
			this.state.meals.breakfast ||
			this.state.meals.lunch ||
			this.state.meals.dinner
		) {
			openFor = true;
		}
		if (openFor) {
			if (this.state.meals.breakfast) {
				openForString += "breakfast";
			}
			if (this.state.meals.lunch && this.state.meals.breakfast) {
				openForString += ", lunch";
			} else if (this.state.meals.lunch) {
				openForString += "lunch";
			}
			if (
				this.state.meals.dinner &&
				(this.state.meals.breakfast || this.state.meals.lunch)
			) {
				openForString += ", dinner";
			} else if (this.state.meals.dinner) {
				openForString += "dinner";
			}
		}

		return (
			<div className="container-fluid">
				<div className="row my-3">
					<div className="restaurant-name">
						<h2>{this.state.restaurant.name}</h2>
					</div>
				</div>
				<div className="row my-3">
					<div className="col-sm-6 details-col-left">
						<p>{this.state.restaurant.description}</p>
						<p>Cuisine: {this.state.restaurant.cuisine}</p>
						<p>{this.state.restaurant.rating} Stars</p>
						{openFor && <p>{openForString}</p>}
						<div className="btn-group">
							<a className="btn btn-dark" href={this.state.restaurant.menu}>
								View Menu
							</a>
						</div>
					</div>
					<div className="col-sm-6 details-col-right">
						<p>Location: {this.state.restaurant.location}</p>
						<p>
							Distance from USC's campus: {this.state.restaurant.distFromUsc} Miles
						</p>
						<p>{this.state.restaurant.address}</p>
						<p>Hours:</p>
						<ul>
							<li>
								Monday: {this.state.mondayHours.open}-{this.state.mondayHours.close}
							</li>
							<li>
								Tuesday: {this.state.tuesdayHours.open}-{this.state.tuesdayHours.close}
							</li>
							<li>
								Wednesday: {this.state.wednesdayHours.open}-
								{this.state.wednesdayHours.close}
							</li>
							<li>
								Thursday: {this.state.thursdayHours.open}-
								{this.state.thursdayHours.close}
							</li>
							<li>
								Friday: {this.state.fridayHours.open}-{this.state.fridayHours.close}
							</li>
							<li>
								Saturday: {this.state.saturdayHours.open}-
								{this.state.saturdayHours.close}
							</li>
							<li>
								Sunday: {this.state.sundayHours.open}-{this.state.sundayHours.close}
							</li>
						</ul>
					</div>
				</div>
				<div className="center-btns">
					<div className="btn-group">
						<Link
							to={`/restaurants/${this.state.restaurant.id}/edit`}
							className="btn btn-secondary"
						>
							Edit Details
						</Link>
					</div>
					<div className="btn-group">
						<button
							type="button"
							className="btn btn-danger"
							onClick={() => {
								this.setState({ isModalOpen: true });
							}}
						>
							Delete
						</button>
					</div>
					{this.state.isModalOpen && (
						<Modal
							title={`Are you sure you want to delete ${this.state.restaurant.name}?`}
							body="This action cannot be undone."
							onClose={() => {
								this.setState({ isModalOpen: false });
							}}
							onConfirm={() => {
								this.setState({ isModalOpen: false });
								this.deleteRestaurant();
							}}
						/>
					)}
				</div>
			</div>
		);
	}
}
