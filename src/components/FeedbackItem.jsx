import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/Card";

function FeedbackItem({ item }) {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={() => deleteFeedback(item.id)}>
                X{/* <FaTimes /> */}
            </button>
            <button className="edit" onClick={() => editFeedback(item)}>
                edit{/* <FaEdit /> */}
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
}

export default FeedbackItem;
