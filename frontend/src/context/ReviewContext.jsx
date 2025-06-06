import React, { createContext, useState, useEffect } from 'react';

export const ReviewContext = createContext();

const ReviewProvider = ({ children }) => {
    const [reviews, setReviews] = useState(() => {
        return JSON.parse(localStorage.getItem('reviews')) || {};
    });

    useEffect(() => {
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }, [reviews]);

    const addReview = (productId, newReview) => {
        setReviews((prevReviews) => ({
            ...prevReviews,
            [productId]: [...(prevReviews[productId] || []), newReview]
        }));
    };

    return (
        <ReviewContext.Provider value={{ reviews, addReview }}>
            {children}
        </ReviewContext.Provider>
    );
};

export default ReviewProvider;
