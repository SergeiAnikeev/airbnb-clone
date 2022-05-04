import React from "react"
import star from '../images/star.png';


export default function Card(props) {
    //console.log(props)
    return (
        <div className="card">
        <img src={props.img} className="card-image" />
        <div className="card-stats">
            <img src={star} className="card-star" />
            <span>{props.rating}</span>
            <span className="grey">({props.reviewCount}) • </span>
            <span className="grey">{props.location}</span>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    </div>

    )
}