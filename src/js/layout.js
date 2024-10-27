import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetail from "./views/ItemDetail";
import AllItems from "./views/allItems";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import Card from "./component/card";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/details/characters/:theid" element={<ItemDetail category="characters" />} />
						<Route path="/details/planets/:theid" element={<ItemDetail category="planets" />} />
						<Route path="/details/starships/:theid" element={<ItemDetail category="starships" />} />
						<Route path="/all/characters/" element={<AllItems category="characters" />} />
						<Route path="/all/planets/" element={<AllItems category="planets" />} />
						<Route path="/all/starships/" element={<AllItems category="starships" />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
