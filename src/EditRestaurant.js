import React from "react";
import { toast } from "react-toastify";

export default class EditRestaurant extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			description: "",
			cuisine: "",
			meals: [
				{
					breakfast: false,
					lunch: false,
					dinner: false,
				},
			],
			location: "",
			address: "",
			distFromUsc: "",
			rating: "",
			favorite: false,
			favDate: "",
			menu: "",
			dateAdded: "",
			hours: [
				{
					monday: [
						{
							open: "",
							close: "",
						},
					],
					tuesday: [
						{
							open: "",
							close: "",
						},
					],
					wednesday: [
						{
							open: "",
							close: "",
						},
					],
					thursday: [
						{
							open: "",
							close: "",
						},
					],
					friday: [
						{
							open: "",
							close: "",
						},
					],
					saturday: [
						{
							open: "",
							close: "",
						},
					],
					sunday: [
						{
							open: "",
							close: "",
						},
					],
				},
			],
			authorId: "0",
		};
	}

	handleNameChange(event) {
		this.setState({ name: event.target.value });
	}
	handleDescriptionChange(event) {
		this.setState({ description: event.target.value });
	}
	handleCuisineChange(event) {
		this.setState({ cuisine: event.target.value });
	}
	handleBreakfastChange(event) {
		const updatedMeals = this.state.meals;
		updatedMeals[0].breakfast = event.target.checked;
		this.setState({ meals: updatedMeals });
	}
	handleLunchChange(event) {
		const updatedMeals = this.state.meals;
		updatedMeals[0].lunch = event.target.checked;
		this.setState({ meals: updatedMeals });
	}
	handleDinnerChange(event) {
		const updatedMeals = this.state.meals;
		updatedMeals[0].dinner = event.target.checked;
		this.setState({ meals: updatedMeals });
	}
	handleLocationChange(event) {
		this.setState({ location: event.target.value });
	}
	handleAddressChange(event) {
		this.setState({ address: event.target.value });
	}
	handleDistFromUscChange(event) {
		this.setState({ distFromUsc: event.target.value });
	}
	handleRatingChange(event) {
		this.setState({ rating: event.target.value });
	}
	handleMenuChange(event) {
		this.setState({ menu: event.target.value });
	}
	handleMondayOpenChange(event) {
		const updatedHours = this.state.hours;
		updatedHours[0].monday[0].open = event.target.value;
		this.setState({ hours: updatedHours });
	}
	handleMondayCloseChange(event) {
		const updatedHours = this.state.hours;
		updatedHours[0].monday[0].close = event.target.value;
		this.setState({ hours: updatedHours });
	}
	handleTuesdayOpenChange(event) {
		const updatedHours = this.state.hours;
		updatedHours[0].tuesday[0].open = event.target.value;
		this.setState({ hours: updatedHours });
	}
	handleTuesdayCloseChange(event) {
		const updatedHours = this.state.hours;
		updatedHours[0].tuesday[0].close = event.target.value;
		this.setState({ hours: updatedHours });
	}
	handleWednesdayOpenChange(event) {
		const updatedHours = this.state.hours;
		updatedHours[0].wednesday[0].open = event.target.value;
		this.setState({ hours: updatedHours });
	}
	handleWednesdayCloseChange(event) {
		const updatedHours = this.state.hours;
		updatedHours[0].wednesday[0].close = event.target.value;
		this.setState({ hours: updatedHours });
	}
	handleThursdayOpenChange(event) {
		const updatedHours = this.state.hours;
		updatedHours[0].thursday[0].open = event.target.value;
		this.setState({ hours: updatedHours });
	}
	handleThursdayCloseChange(event) {
		const updatedHours = this.state.hours;
		updatedHours[0].thursday[0].close = event.target.value;
		this.setState({ hours: updatedHours });
	}
	handleFridayOpenChange(event) {
		const updatedHours = this.state.hours;
		updatedHours[0].friday[0].open = event.target.value;
		this.setState({ hours: updatedHours });
	}
	handleFridayCloseChange(event) {
		const updatedHours = this.state.hours;
		updatedHours[0].friday[0].close = event.target.value;
		this.setState({ hours: updatedHours });
	}
	handleSaturdayOpenChange(event) {
		const updatedHours = this.state.hours;
		updatedHours[0].saturday[0].open = event.target.value;
		this.setState({ hours: updatedHours });
	}
	handleSaturdayCloseChange(event) {
		const updatedHours = this.state.hours;
		updatedHours[0].saturday[0].close = event.target.value;
		this.setState({ hours: updatedHours });
	}
	handleSundayOpenChange(event) {
		const updatedHours = this.state.hours;
		updatedHours[0].sunday[0].open = event.target.value;
		this.setState({ hours: updatedHours });
	}
	handleSundayCloseChange(event) {
		const updatedHours = this.state.hours;
		updatedHours[0].sunday[0].close = event.target.value;
		this.setState({ hours: updatedHours });
	}
	handleSubmit(event) {
		event.preventDefault();

		const id = this.props.match.params.id;
		// https://my-json-server.typicode.com/landonsm/restaurants-api-final-project/restaurants/${id}
		fetch(`https://final-restaurants.herokuapp.com/api/restaurants/${id}`, {
			method: "PUT",
			body: JSON.stringify({
				name: this.state.name,
				description: this.state.description,
				cuisine: this.state.cuisine,
				meals: this.state.meals,
				location: this.state.location,
				address: this.state.address,
				distFromUsc: this.state.distFromUsc,
				rating: this.state.rating,
				favorite: this.state.favorite,
				favDate: this.state.favDate,
				menu: this.state.menu,
				dateAdded: this.state.dateAdded,
				hours: this.state.hours,
				authorId: this.state.authorId,
			}),
			headers: {
				"Content-type": "application/json",
			},
		})
			.then((response) => {
				console.log("Start 1");
				console.log(response);
				console.log(response.json);
				console.log("End 1");
				return response.json();
			})
			.then((json) => {
				console.log("Start 2");
				console.log(json);
				toast.success(`"${json.name}" was updated`);
				console.log("End 2");
				this.props.history.push("/");
			});
	}

	// https://my-json-server.typicode.com/landonsm/restaurants-api-final-project/restaurants/
	componentDidMount() {
		const id = this.props.match.params.id;
		fetch(`https://final-restaurants.herokuapp.com/api/restaurants/${id}`)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				document.title = `Edit ${json.name}`;
				console.log(json);
				this.setState(json);
			});
	}

	render() {
		return (
			<form
				className="form-inline"
				onSubmit={(event) => {
					this.handleSubmit(event);
				}}
			>
				<div className="container">
					<h1 className="my-3 header">Edit {this.state.name}</h1>
					<div className="row form-row my-3">
						<div className="col-sm-1">
							<label htmlFor="name" className="form-label">
								Name
							</label>
						</div>
						<div className="col-sm-5">
							<input
								id="name"
								className={`form-control ${
									this.state.name.length == 0 ? "is-invalid" : "is-valid"
								}`}
								value={this.state.name}
								onChange={(event) => {
									this.handleNameChange(event);
								}}
							></input>
						</div>
						<div className="col-sm-1">
							<label htmlFor="cuisine" className="form-label">
								Cuisine
							</label>
						</div>
						<div className="col-sm-5">
							<input
								id="cuisine"
								className={`form-control ${
									this.state.cuisine.length == 0 ? "is-invalid" : "is-valid"
								}`}
								value={this.state.cuisine}
								onChange={(event) => {
									this.handleCuisineChange(event);
								}}
							></input>
						</div>
					</div>
					<div className="row form-row my-3">
						<div className="col-sm-1">
							<label htmlFor="description" className="form-label">
								Description
							</label>
						</div>
						<div className="col-sm-11">
							<textarea
								id="description"
								className={`form-control ${
									this.state.description.length == 0 ? "is-invalid" : "is-valid"
								}`}
								value={this.state.description}
								onChange={(event) => {
									this.handleDescriptionChange(event);
								}}
							></textarea>
						</div>
					</div>
					<div className="row form-row my-3">
						<div className="col-sm-1">
							<label htmlFor="location" className="form-label">
								Location
							</label>
						</div>
						<div className="col-sm-5">
							<input
								id="location"
								className={`form-control ${
									this.state.location.length == 0 ? "is-invalid" : "is-valid"
								}`}
								value={this.state.location}
								onChange={(event) => {
									this.handleLocationChange(event);
								}}
							></input>
						</div>
						<div className="col-sm-1">
							<label htmlFor="address" className="form-label">
								Address
							</label>
						</div>
						<div className="col-sm-5">
							<input
								id="address"
								className={`form-control ${
									this.state.address.length == 0 ? "is-invalid" : "is-valid"
								}`}
								value={this.state.address}
								onChange={(event) => {
									this.handleAddressChange(event);
								}}
							></input>
						</div>
					</div>
					<div className="row form-row my-3">
						<div className="col-sm-2">
							<label htmlFor="distFromUsc" className="form-label">
								Distance from USC (miles)
							</label>
						</div>
						<div className="col-sm-4">
							<input
								id="distFromUsc"
								className={`form-control ${
									this.state.distFromUsc.length == 0 ? "is-invalid" : "is-valid"
								}`}
								value={this.state.distFromUsc}
								onChange={(event) => {
									this.handleDistFromUscChange(event);
								}}
							></input>
						</div>
						<div className="col-sm-1">
							<label htmlFor="rating" className="form-label">
								Rating (0-5)
							</label>
						</div>
						<div className="col-sm-5">
							<input
								id="rating"
								className={`form-control ${
									this.state.rating.length == 0 ? "is-invalid" : "is-valid"
								}`}
								value={this.state.rating}
								onChange={(event) => {
									this.handleRatingChange(event);
								}}
							></input>
						</div>
					</div>
					<div className="row form-row my-3">
						<div className="col-sm-2">
							<label htmlFor="menu" className="form-label">
								Link to menu (url)
							</label>
						</div>
						<div className="col-sm-10">
							<input
								id="menu"
								className={`form-control ${
									this.state.menu.length == 0 ? "is-invalid" : "is-valid"
								}`}
								value={this.state.menu}
								onChange={(event) => {
									this.handleMenuChange(event);
								}}
							></input>
						</div>
					</div>
					<div className="row form-row my-3">
						<div className="col-sm-6">
							{/* MEALS */}
							<p>Open for:</p>
							<div className="row form-row">
								<div className="col-sm">
									<label htmlFor="breakfast" className="form-label checkbox-label">
										Breakfast
									</label>
									<input
										id="breakfast"
										type="checkbox"
										className="form-check-input"
										value={this.state.meals.breakfast}
										onChange={(event) => {
											this.handleBreakfastChange(event);
										}}
									/>
								</div>
							</div>
							<div className="row form-row">
								<div className="col-sm">
									<label htmlFor="lunch" className="form-label checkbox-label">
										Lunch
									</label>
									<input
										id="lunch"
										type="checkbox"
										className="form-check-input"
										value={this.state.meals.lunch}
										onChange={(event) => {
											this.handleLunchChange(event);
										}}
									/>
								</div>
							</div>
							<div className="row form-row">
								<div className="col-sm">
									<label htmlFor="dinner" className="form-label checkbox-label">
										Dinner
									</label>
									<input
										id="dinner"
										type="checkbox"
										className="form-check-input"
										value={this.state.meals.dinner}
										onChange={(event) => {
											this.handleDinnerChange(event);
										}}
									/>
								</div>
							</div>
							<div className="col-sm-3"></div>
						</div>
						<div className="col-sm-6">
							<p>Hours:</p>
							<div className="row form-row my-3">
								<div className="col-sm-2">
									<label htmlFor="monday" className="form-label">
										Monday
									</label>
								</div>
								<div className="col-sm-4">
									<input
										id="monday"
										type="time"
										className={`form-control ${
											this.state.hours[0].monday[0].open.length == 0
												? "is-invalid"
												: "is-valid"
										}`}
										value={this.state.hours[0].monday[0].open}
										onChange={(event) => {
											this.handleMondayOpenChange(event);
										}}
									/>
								</div>
								<div className="col-sm-2 center-dash">
									<label htmlFor="monClose" className="form-label">
										-
									</label>
								</div>
								<div className="col-sm-4">
									<input
										id="monClose"
										type="time"
										className={`form-control ${
											this.state.hours[0].monday[0].close.length == 0
												? "is-invalid"
												: "is-valid"
										}`}
										value={this.state.hours[0].monday[0].close}
										onChange={(event) => {
											this.handleMondayCloseChange(event);
										}}
									/>
								</div>
							</div>
							<div className="row form-row my-3">
								<div className="col-sm-2">
									<label htmlFor="tuesday" className="form-label">
										Tuesday
									</label>
								</div>
								<div className="col-sm-4">
									<input
										id="tuesday"
										type="time"
										className={`form-control ${
											this.state.hours[0].tuesday[0].open.length == 0
												? "is-invalid"
												: "is-valid"
										}`}
										value={this.state.hours[0].tuesday[0].open}
										onChange={(event) => {
											this.handleTuesdayOpenChange(event);
										}}
									/>
								</div>
								<div className="col-sm-2 center-dash">
									<label htmlFor="tuesClose" className="form-label">
										-
									</label>
								</div>
								<div className="col-sm-4">
									<input
										id="tuesClose"
										type="time"
										className={`form-control ${
											this.state.hours[0].tuesday[0].close.length == 0
												? "is-invalid"
												: "is-valid"
										}`}
										value={this.state.hours[0].tuesday[0].close}
										onChange={(event) => {
											this.handleTuesdayCloseChange(event);
										}}
									/>
								</div>
							</div>
							<div className="row form-row my-3">
								<div className="col-sm-2">
									<label htmlFor="wednesday" className="form-label">
										Wednesday
									</label>
								</div>
								<div className="col-sm-4">
									<input
										id="wednesday"
										type="time"
										className={`form-control ${
											this.state.hours[0].wednesday[0].open.length == 0
												? "is-invalid"
												: "is-valid"
										}`}
										value={this.state.hours[0].wednesday[0].open}
										onChange={(event) => {
											this.handleWednesdayOpenChange(event);
										}}
									/>
								</div>
								<div className="col-sm-2 center-dash">
									<label htmlFor="wedsClose" className="form-label">
										-
									</label>
								</div>
								<div className="col-sm-4">
									<input
										id="wedsClose"
										type="time"
										className={`form-control ${
											this.state.hours[0].wednesday[0].close.length == 0
												? "is-invalid"
												: "is-valid"
										}`}
										value={this.state.hours[0].wednesday[0].close}
										onChange={(event) => {
											this.handleWednesdayCloseChange(event);
										}}
									/>
								</div>
							</div>
							<div className="row form-row my-3">
								<div className="col-sm-2">
									<label htmlFor="thursday" className="form-label">
										Thursday
									</label>
								</div>
								<div className="col-sm-4">
									<input
										id="thursday"
										type="time"
										className={`form-control ${
											this.state.hours[0].thursday[0].open.length == 0
												? "is-invalid"
												: "is-valid"
										}`}
										value={this.state.hours[0].thursday[0].open}
										onChange={(event) => {
											this.handleThursdayOpenChange(event);
										}}
									/>
								</div>
								<div className="col-sm-2 center-dash">
									<label htmlFor="thursClose" className="form-label">
										-
									</label>
								</div>
								<div className="col-sm-4">
									<input
										id="thursClose"
										type="time"
										className={`form-control ${
											this.state.hours[0].thursday[0].close.length == 0
												? "is-invalid"
												: "is-valid"
										}`}
										value={this.state.hours[0].thursday[0].close}
										onChange={(event) => {
											this.handleThursdayCloseChange(event);
										}}
									/>
								</div>
							</div>
							<div className="row form-row my-3">
								<div className="col-sm-2">
									<label htmlFor="friday" className="form-label">
										Friday
									</label>
								</div>
								<div className="col-sm-4">
									<input
										id="friday"
										type="time"
										className={`form-control ${
											this.state.hours[0].friday[0].open.length == 0
												? "is-invalid"
												: "is-valid"
										}`}
										value={this.state.hours[0].friday[0].open}
										onChange={(event) => {
											this.handleFridayOpenChange(event);
										}}
									/>
								</div>
								<div className="col-sm-2 center-dash">
									<label htmlFor="friClose" className="form-label">
										-
									</label>
								</div>
								<div className="col-sm-4">
									<input
										id="friClose"
										type="time"
										className={`form-control ${
											this.state.hours[0].friday[0].close.length == 0
												? "is-invalid"
												: "is-valid"
										}`}
										value={this.state.hours[0].friday[0].close}
										onChange={(event) => {
											this.handleFridayCloseChange(event);
										}}
									/>
								</div>
							</div>
							<div className="row form-row my-3">
								<div className="col-sm-2">
									<label htmlFor="saturday" className="form-label">
										Saturday
									</label>
								</div>
								<div className="col-sm-4">
									<input
										id="saturday"
										type="time"
										className={`form-control ${
											this.state.hours[0].saturday[0].open.length == 0
												? "is-invalid"
												: "is-valid"
										}`}
										value={this.state.hours[0].saturday[0].open}
										onChange={(event) => {
											this.handleSaturdayOpenChange(event);
										}}
									/>
								</div>
								<div className="col-sm-2 center-dash">
									<label htmlFor="satClose" className="form-label">
										-
									</label>
								</div>
								<div className="col-sm-4">
									<input
										id="satClose"
										type="time"
										className={`form-control ${
											this.state.hours[0].saturday[0].close.length == 0
												? "is-invalid"
												: "is-valid"
										}`}
										value={this.state.hours[0].saturday[0].close}
										onChange={(event) => {
											this.handleSaturdayCloseChange(event);
										}}
									/>
								</div>
							</div>
							<div className="row form-row my-3">
								<div className="col-sm-2">
									<label htmlFor="sunday" className="form-label">
										Sunday
									</label>
								</div>
								<div className="col-sm-4">
									<input
										id="sunday"
										type="time"
										className={`form-control ${
											this.state.hours[0].sunday[0].open.length == 0
												? "is-invalid"
												: "is-valid"
										}`}
										value={this.state.hours[0].sunday[0].open}
										onChange={(event) => {
											this.handleSundayOpenChange(event);
										}}
									/>
								</div>
								<div className="col-sm-2 center-dash">
									<label htmlFor="sunClose" className="form-label">
										-
									</label>
								</div>
								<div className="col-sm-4">
									<input
										id="sunClose"
										type="time"
										className={`form-control ${
											this.state.hours[0].sunday[0].close.length == 0
												? "is-invalid"
												: "is-valid"
										}`}
										value={this.state.hours[0].sunday[0].close}
										onChange={(event) => {
											this.handleSundayCloseChange(event);
										}}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="row form-row my-3">
						<div className="col-sm-12">
							<button type="submit" className="btn btn-primary btn-block">
								Update Restaurant
							</button>
						</div>
					</div>
				</div>
			</form>
		);
	}
}
