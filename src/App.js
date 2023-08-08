import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import "./style.css";
import About from "./Components/About/About";
import Account from "./Components/Account/Account";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Products from "./Components/Products/Products";

import Footer from "./Components/Footer";
import ProductDetail from "./Components/Products/ProductComponents/ProductDetail";
import PurchaseCard from "./Components/Products/ProductComponents/PurchaseCard";

class App extends Component {
	state = {};
	render() {
		return (
			<div>
				<Switch>
					<Route path="/Products" exact component={Products} />
					<Route path="/Products-details/:id" component={ProductDetail} />
					<Route path="/Products/Card/" component={PurchaseCard} />
					<Route path="/About" component={About} />
					<Route path="/Contact" component={Contact} />
					<Route path="/Account" component={Account} />
					<Route path="/" exact component={Home} />
					<Route path="/NotFound" component={NotFound} />
					<Redirect to="/NotFound" />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
