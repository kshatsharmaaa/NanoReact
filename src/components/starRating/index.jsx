import {FaStar} from "react-icons/fa"
import "./style.css";
import { useState } from "react";

export default function StarRating({noOfStars = 5}) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex)
    }

    function handleMouseLeave() {
        setHover(rating); // while leaving set it to last rating index
    }

    return (
    <div className="conatiner">
        <h3>#3 Star Rating</h3>
        {
            [...Array(noOfStars)].map((_, index) => {
                index += 1;
                return <FaStar key={index}
                className={index <= (hover || rating) ? "active" : "inactive"}
                onClick={() => handleClick(index)}
                onMouseMove={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                size={40}/>
            })
        }
    </div>
    )
}