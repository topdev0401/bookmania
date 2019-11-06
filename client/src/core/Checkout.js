import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

const Checkout = ({ products }) => {
    const getTotal = () => {
        return products.reduce((accumulatedValue, nextValue) => { // accumatedValue grabs all the sums of nextValue
            return accumulatedValue + nextValue.count * nextValue.price;
        }, 0);
    };

    const showCheckout = () => {
        // Check if the user is authenticated to show login or checkout btn
        return isAuthenticated() ? (
            <button className="btn btn-success">Checkout</button>
        ) : (
            <Link to="/signin">
                <button className="btn btn-primary">Sign in to checkout</button>
            </Link>
        );
    };

    return (
        <div>
            <h2>Total: ${getTotal()}</h2>

            {showCheckout()}
        </div>
    );
};

export default Checkout;