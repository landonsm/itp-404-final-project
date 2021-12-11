import React from "react";
import { toast } from "react-toastify";

export default class EditRestaurant extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			favorite: "",
		};
	}

	// https://my-json-server.typicode.com/landonsm/restaurants-api-final-project/restaurants/
	componentDidMount() {
		const id = this.props.match.params.id;
		fetch(`https://final-restaurants.herokuapp.com/api/restaurants/${id}`)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				this.setState(json);
				// https://my-json-server.typicode.com/landonsm/restaurants-api-final-project/restaurants/
				fetch(`https://final-restaurants.herokuapp.com/api/restaurants/${id}`, {
					method: "PATCH",
					body: JSON.stringify({
						favorite: !this.state.favorite,
					}),
					headers: {
						"Content-type": "application/json",
					},
				})
					.then((response) => {
						return response.json();
					})
					.then((json) => {
						if (this.state.favorite) {
							toast.success(`"${json.name}" was removed from favorites`);
						} else {
							toast.success(`"${json.name}" was added to favorites`);
						}
						this.props.history.push("/");
					});
			});
	}

	render() {
		return null;
	}
}
