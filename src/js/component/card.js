import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import starwars404 from "../../img/starwars404.png"


const Card = ({ item, category }) => {
    const { store, actions } = useContext(Context);
    const [imgErr, setImgErr] = useState(false);

    const handleImgErr = () => setImgErr(true);
    // https://starwars-visualguide.com/assets/img/.jpg

    const guidIMG_URL = " https://starwars-visualguide.com/assets/img/";

    const getImgURL = `${guidIMG_URL}${category}/${item.uid}.jpg`;
    const favorite = { name: item.name, uid: item.uid, type: category };
    
    const isFavorite = store.favorites.some(
        fav => fav.uid === item.uid && fav.type === category
    );
    const handleFavorites = () => {
        actions.addFavorites(favorite);  
    }

       

    return (
        <div className="card mx-2 mb-3" style={{ minWidth: '300px', background: 'rgba(255, 255, 255, 0.3)' }}>
            <img 
                src={imgErr ? starwars404 : getImgURL} 
                onError={handleImgErr} 
                className="card-img-top" 
                alt="imagen"
                style={{ minHeight: '300px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column ">
                <h5 className="card-title fw-bold text-white">{item.name}</h5>
                
                <div id="cardBtnGroup" className="d-flex justify-content-between mt-5">
                    <Link to={`/details/${category}/${item.uid}`}>
                        <button className="btn btn-secondary" type="button">Learn more!</button>
                    </Link>
                    <button className="btn btn-outline-dark" onClick={handleFavorites} type="button">
                        <i style={{ color: isFavorite ? "red" : "white" }}><FaHeart /></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;