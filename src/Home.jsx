import React from "react";
import { NavLink } from "react-router-dom";

   
const Home = () => {
        return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row mt-5">
                                <div className="col-md-6 pt-5
                                                pt-lg-0 order-1
                                                d-block 
                                                order-lg-1 d-flex 
                                                justify-content-center 
                                                flex-column">
                                    <h1 >
                                    Better Solution for 
                                    <strong className="brand-name"> Your Business</strong>
                                    
                                    </h1>
                                    <h2 className="my-3 text-primary">
                                    Lorem ipsum dolor sit amet 
                                    consectetur adipisicing elit.
                                    </h2>
                                    <p>
                                    Mollitia voluptates excepturi possimus
                                    cupiditate aperiam accusamus, corrupti
                                    eveniet sapiente.Lorem ipsum dolor sit
                                    amet consectetur adipisicing elit.
                                    </p>
                                    <div className="mt-3">
                                        <NavLink exact to="/services" 
                                        className="btn-get-Started mx-3">
                                        Get Started</NavLink>
                                        <NavLink exact to="/contact" 
                                        className="btn-get-Started mt-3 mx-3">
                                        Contact us</NavLink>
                                    </div>
                                </div>
                                <div className="col-md-6 
                                                order-2 
                                                order-lg-2 
                                                header-img mt-1">  
                                    <img src="https://labhansh-website-reactjs-01.herokuapp.com/images/img-1.png"
                                    className="img-fluid animated" 
                                    alt="image" />
                                </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
        );
    };
export default Home;    