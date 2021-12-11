import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import NewRestaurant from "./NewRestaurant";
import EditRestaurant from "./EditRestaurant";
import FavoriteChange from "./FavoriteChange";
import Favorites from "./Favorites";
import Restaurants from "./Restaurants";
import Details from "./Details";
import NoMatch from "./NoMatch";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="container-fluid">
					<Navigation />
					<Switch>
						<Route path="/restaurants/new" component={NewRestaurant} />
						<Route path="/restaurants/:id/edit" component={EditRestaurant} />
						<Route
							path="/restaurants/:id/favoritechange"
							component={FavoriteChange}
						/>
						<Route path="/restaurants/:id" component={Details} />
						<Route path="/favorites" component={Favorites} />

						<Route exact path="/">
							<Restaurants />
						</Route>
						<Route path="*">
							<NoMatch />
						</Route>
					</Switch>
				</div>
				<ToastContainer />
			</Router>
		);
	}
}
