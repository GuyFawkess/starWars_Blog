import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Card from "../component/card";
import "../../styles/home.css";
import Button from "../component/button";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div className="background-container">
            {/* Background element */}
            <div className="background"></div>
            
            {/* Main content */}
            <div className="container text-center mt-5">
                <h1 className="text-danger mb-3">Characters</h1>
                <div className="container overflow-auto d-flex flex-nowrap">
                    <div className="d-flex flex-nowrap overflow-auto align-items-stretch">
                        {store.characters.map((item) => {
                            return (
                                <Card item={item} key={item.uid} category="characters" uid={item.uid} />
                            );
                        })}
                    </div>
                </div>
				<div className="d-flex justify-content-end m-3">
					<Link to="/all/characters/">
						<Button label="See all Characters" color="secondary" />
					</Link>
					</div>
                <div className="d-flex flex-column w-100 mt-3 align-item-center">
                    <h1 className="text-danger my-3">Planets</h1>
                    <div id="cardDiv" className="d-flex flex-nowrap overflow-auto align-items-stretch">
                        {store.planets.map((item) => {
                            return (
                                <Card item={item} id={item.uid} key={item.uid} category="planets" />
                            );
                        })}
                    </div>
					<div className="d-flex justify-content-end m-3">
					<Link to="/all/planets/">
						<Button label="See all Planets" color="secondary" />
					</Link>
					</div>
                </div>
                <div className="d-flex flex-column w-100 mt-3 align-item-center">
                    <h1 className="text-danger my-3">Starships</h1>
                    <div id="cardDiv" className="d-flex flex-nowrap overflow-auto align-items-stretch">
                        {store.spaceships.map((item, index) => {
                            return (
                                <Card item={item} index={index} key={index} category="starships" />
                            );
                        })}
                    </div>
                </div>
				<div className="d-flex justify-content-end m-3">
					<Link to="/all/starships/">
						<Button label="See all Starships" color="secondary" />
					</Link>
					</div>
            </div>
        </div>
    );
};