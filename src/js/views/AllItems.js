import React, { useContext, useEffect, useState } from "react";
import Card from "../component/card";
import { Context } from "../store/appContext";
import { useLocation } from "react-router";

const AllItems = () => {
    const { store, actions } = useContext(Context);
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            if (location.pathname.includes("all/characters")) {
                await actions.getAllCharacters();
            } else if (location.pathname.includes("all/planets")) {
                await actions.getAllPlanets();
            } else if (location.pathname.includes("all/starships")) {
                await actions.getAllSpaceships();
            }
            setLoading(false);
        };
        fetchData();
    }, [location]);

    // Determine the correct data and heading based on the path
    const currentCategory = location.pathname.includes("all/characters")
        ? { title: "Characters", items: store.allCharacters }
        : location.pathname.includes("all/planets")
            ? { title: "Planets", items: store.allPlanets }
            : { title: "Starships", items: store.allSpaceships };

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <div className="background-container" style={{background: "black", color: "white"}}>
            {/* Background element */}
            <div className="background"></div>
            {/* Main content */}
            <div className="container text-center mt-5">
                <h1 className="text-danger mb-3">{currentCategory.title}</h1>
                <div className="container">
                    <div className="row">
                        {currentCategory.items.map((item) => {
                            return (
                                <div className="col-md-4 mb-4" key={item.uid}>
                                    <Card item={item} index={item.uid} category={currentCategory.title.toLowerCase()} uid={item.uid} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllItems;
