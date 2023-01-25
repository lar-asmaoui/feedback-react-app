import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

const API_URI = "http://localhost:5000";

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchFeedback();
    }, []);

    const fetchFeedback = async () => {
        const res = await fetch(`${API_URI}/feedback`);
        const data = await res.json();
        setFeedback(data);
        setIsLoading(false);
    };

    const deleteFeedback = async (id) => {
        if (window.confirm("Are you sure to delete?")) {
            await fetch(`${API_URI}/feedback/${id}`, { method: "DELETE" });
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    const addFeedback = async (newFeedback) => {
        const res = await fetch(`${API_URI}/feedback`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFeedback),
        });
        const data = await res.json();
        setFeedback([data, ...feedback]);
    };

    const updateFeedback = async (id, updItem) => {
        const res = await fetch(`${API_URI}/feedback/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updItem),
        });

        const data = await res.json();
        setFeedback(
            feedback.map((item) =>
                item.id === id ? { ...item, ...data } : item
            )
        );
    };

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        });
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                isLoading,
                setFeedbackEdit,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
