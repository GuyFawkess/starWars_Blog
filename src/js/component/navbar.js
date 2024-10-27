import React, { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { IoTrashOutline } from "react-icons/io5";

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	const navigate = useNavigate();


	return (
		<nav className="navbar navbar-dark navbar-background">
			<div className="container d-flex justify-content-between">
				<div className="iconStarWars d-flex w-1">
					<Link to={"/"}>
						<img src="https://img.icons8.com/color/200/star-wars.png" style={{width: "5em"}}/>
					</Link>
				</div>
				<div className="">
					<div className="dropdown d-flex">
						<button className="btn btn-primary d-flex flex dropdown-toggle align-item-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
							<i className="mx-2 px-1 rounded"style={{color: "white", background: "gray"}}>{store.favorites.length}</i>
						</button>
												
						<ul className="dropdown-menu dropdown-menu-end">
							{store.favorites.length == 0 ? (
									<p className="d-flex flex justify-content-center text-secondary p-1">Favorites empty</p>
							) : (
								store.favorites.map((favorite, index) => (
									<li key={index} className="dropdown-item favoriteName d-flex justify-content-between align-item-center border">
										<span className="dropdown-item" role="button" onClick={() => navigate(`details/${favorite.type}/${favorite.uid}`)}>{favorite.name}</span>
          								<i role="button" onClick={(e) => {
												e.stopPropagation()
												actions.deleteFavorite(favorite)
												}}><IoTrashOutline />
										</i>
									</li>
								))
							)}

						</ul>
					</div>
				</div>
			</div>
			
		</nav>
	);
};
