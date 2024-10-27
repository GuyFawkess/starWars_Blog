import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams, useLocation } from "react-router";
import { Link } from "react-router-dom";

import Button from "../component/button";

import starwars404 from "../../img/starwars404.png"

const ItemDetail = ({ category }) => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const location = useLocation();
    const [imgErr, setImgErr] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setImgErr(false);
        const fetchData = async () => {
            setLoading(true);
            if (location.pathname.includes("characters")) {
                await actions.detailCharacter(params.theid);
            } else if (location.pathname.includes("planets")) {
                await actions.detailPlanet(params.theid);
            } else if (location.pathname.includes("starships")) {
                await actions.detailSpaceship(params.theid);
            }
            setLoading(false);
        };
        fetchData();
    }, [location, params.theid]);

    const character = store.detailCharacter;
    const planet = store.detailPlanet;
    const starship = store.detailSpaceship;

    const handleImgErr = () => setImgErr(true);
    const GUIDE_URL = "https://starwars-visualguide.com/assets/img/";

    const getImageUrl = GUIDE_URL + category + "/" + parseInt(params.theid) + ".jpg";



    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="background-container">
            {/* Background element */}
            <div className="background"></div>
            {/* Main content */}
            <div className="d-flex justify-content-center flex-column align-items-center">
                <div className="card bg-dark text-light my-5"
                    style={{ minWidth: "75%", maxWidth: "75%", boxShadow: "0 8px 12px rgba(255, 255, 255, 0.2)" }}
                >
                    <div className="row g-0">
                        <div className="col-md-4 p-3 d-flex align-items-center justify-content-center">
                            <img
                                src={imgErr ? starwars404 : getImageUrl}
                                onError={handleImgErr}
                                className="img-fluid rounded"
                                alt={
                                    category == "characters" ? character.name :
                                        category == "planets" ? planet.name :
                                            starship.name
                                }
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body p-5">
                                <h2 className="card-title text-center mb-5"
                                    style={{ fontSize: "3rem" }}
                                >
                                    <u>
                                        {
                                            category == "characters" ? character.name :
                                                category == "planets" ? planet.name :
                                                    starship.name
                                        }
                                    </u>
                                </h2>


                                {/* detail 1 */}
                                <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                                    <u className="w-50 text-end pe-2">
                                        {
                                            category == "characters" ? "Birth Year:" :
                                                category == "planets" ? "Terrain:" :
                                                    "Manufacturer:"
                                        }
                                    </u>
                                    <p className="ps-2">
                                        {
                                            category == "characters" ? character.birth_year :
                                                category == "planets" ? planet.terrain :
                                                    starship.manufacturer
                                        }
                                    </p>
                                </div>


                                {/* detail 2 */}

                                <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                                    <u className="w-50 text-end pe-2">
                                        {
                                            category == "characters" ? "Hair color:" :
                                                category == "planets" ? "Gravity:" :
                                                    "Passengers:"
                                        }
                                    </u>
                                    <p className="ps-2">
                                        {
                                            category == "characters" ? character.hair_color :
                                                category == "planets" ? planet.gravity :
                                                    starship.passengers
                                        }
                                    </p>
                                </div>




                                {/* Detail 3 */}



                                <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                                    <u className="w-50 text-end pe-2">
                                        {
                                            category == "characters" ? "Height:" :
                                                category == "planets" ? "Climate:" :
                                                    "Crew limit:"
                                        }
                                    </u>
                                    <p className="ps-2">
                                        {
                                            category == "characters" ? character.height :
                                                category == "planets" ? planet.climate :
                                                    starship.crew
                                        }
                                    </p>
                                </div>


                                {/* Detail 4 */}

                                <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                                    <u className="w-50 text-end pe-2">
                                        {
                                            category == "characters" ? "Gender:" :
                                                category == "planets" ? "Diameter:" :
                                                    "Atmospheric top speed:"
                                        }
                                    </u>
                                    <p className="ps-2">
                                        {
                                            category == "characters" ? character.gender :
                                                category == "planets" ? planet.diameter :
                                                    starship.max_atmosphering_speed
                                        }
                                    </p>
                                </div>



                                {/* detail 5 */}


                                <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                                    <u className="w-50 text-end pe-2">
                                        {
                                            category == "characters" ? "Eye color:" :
                                                category == "planets" ? "Population:" :
                                                    "Price:"
                                        }
                                    </u>
                                    <p className="ps-2">
                                        {
                                            category == "characters" ? character.eye_color :
                                                category == "planets" ? planet.population :
                                                    starship.cost_in_credits
                                        }
                                    </p>
                                </div>



                                {/* detail 6 */}



                                <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                                    <u className="w-50 text-end pe-2">
                                        {
                                            category == "characters" ? "Weight:" :
                                                category == "planets" ? "Rotational period:" :
                                                    "Food reserves:"
                                        }
                                    </u>
                                    <p className="ps-2">
                                        {
                                            category == "characters" ? character.mass :
                                                category == "planets" ? planet.rotation_period :
                                                    starship.consumables
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
               </div> {/*  NOSE COMO COLOCAR EL BOTON ALFINAL A LA MISMA ALTURA DE LA TARJETA... */}
                <div className="d-flex justify-content-end" >
                    <Link to="/">
                        <Button label="Home" color="danger" />
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;
