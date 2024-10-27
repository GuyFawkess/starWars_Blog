import React from "react";



const Button = (props) => {

    return (

        <div className="">
            <button type="button" className={`btn btn-${props.color} btn-lg`}>{props.label}</button>
        </div>
    )

}



export default Button;