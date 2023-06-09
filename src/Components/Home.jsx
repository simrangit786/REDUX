import React from "react";
import img from "../image1.jpeg";
import cart from "../cart-img.png"

const Home = (props) => {
    console.log(props,"props data")
    return (
        <>
        <div className="add-to-cart">
            <img src={cart}></img>
        </div>
        <h1>Home Component</h1>
        <div className="main-div">
        <img src= {img} className="main-img"></img>
        <h4>I Phone Price : $1000.00</h4>
        <button className="button" onClick={() => props.addToCartHandler({price: '1000', name: 'iphone'})}>ADD TO CART</button>
        </div>
        </>
    )
}

export default Home;