import React from "react";
import { NavLink } from "react-router-dom";
    const Footer = () => {
        return (
        <>
         <footer className="w-100 p-3 mb-2 bg-secondary text-white mt-5 ">
            <div className="container text-left">
            <br/>
                <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-6 text-left">
                        <h4 className="text-dark">Example</h4>
                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Reiciendis provident
                        rerum ipsa vero sapiente dolore, qui voluptatibus.</p>
                        <hr/>

                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <ul className="list-unstyled mx-auto">
                        <li className="d-block">
                        <NavLink exact to="/services" 
                            className="card-link text-dark">
                            <h4>Services</h4>
                        </NavLink>
                        </li>
                        <li className="d-block">
                        <NavLink exact to="/" className="card-link text-dark">Web Development</NavLink>
                        </li>
                        <li className="d-block">
                        <NavLink exact to="/" className="card-link text-dark">
                        Data Analytics</NavLink>
                        </li>
                        <li className="d-block">
                        <NavLink exact to="/" className="card-link text-dark">
                        Software Development</NavLink>
                        </li>
                        <li className="d-block">
                        <NavLink exact to="/" className="card-link text-dark">
                        App Development</NavLink>
                        </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <ul className="list-unstyled mx-auto">
                        <li className="d-block">
                        <NavLink exact to="/About" className="card-link text-dark">
                        <h4>About</h4>
                        </NavLink>
                        </li>
                        <li className="d-block">
                        <NavLink exact to="/" className="card-link text-dark">Who are we ?</NavLink>
                        </li>
                        <li className="d-block">
                        <NavLink exact to="/" className="card-link text-dark">Why us ?</NavLink>
                        </li>
                        <li className="d-block">
                        <NavLink exact to="/" className="card-link text-dark">
                        Wordpress Development</NavLink>
                        </li>
                        <li className="d-block"><NavLink exact to="/" className="card-link text-dark">
                        Graphics Designing</NavLink>
                        </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <ul className="list-unstyled mx-auto">
                        <li className="d-block">
                        <NavLink exact to="/AboutSection" className="card-link text-dark">
                        <h4>Terms</h4>
                        </NavLink>
                        </li>
                        <li className="d-block">
                        <NavLink exact to="/" className="card-link text-dark">
                        Terms and condition</NavLink>
                        </li>
                        <li className="d-block">
                        <NavLink exact to="/" className="card-link text-dark">Privacy Policy</NavLink>
                        </li>
                        <li className="d-block">
                        <NavLink exact to="/" className="card-link text-dark">
                        Team</NavLink>
                        </li>
                        <li className="d-block">
                        <NavLink exact to="/" className="card-link text-dark">
                        Contact us</NavLink>
                        </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-6">
                        <h4 className="text-dark">Subscribtion </h4>
                        <p className="text-dark">Get news letters and updates</p>
                        <form className="input-group-append">
                        <input type="email" className="input-group-text
                        bg-white text-left text-dark rounded-0 w-75"
                        placeholder="Enter Email"/>
                        <button type="button" class="btn btn-dark">Submit</button>
                        </form>
                        <p className="text-dark d-inline-block  ">Follow us : </p>
                        <NavLink exact to="/" className="my-3 mx-1 d-inline-block">
                        <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png" 
                        className="text-dark"
                        width="50px"
                        height="50px"
                        alt="facebook-img"/>
                        </NavLink>
                        <NavLink exact to="/" className="my-3 mx-1 d-inline-block">
                        <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png" 
                          width="50px"
                        height="50px"
                        className="text-dark " 
                        alt="twitter-img"/>
                        </NavLink>
                        <NavLink exact to="/" className="my-3 mx-1 d-inline-block">
                        <img src="https://i.pinimg.com/originals/05/da/34/05da3431471058c803afacb2f5483f7b.png"
                         className="text-dark"  width="50px"
                        height="50px" alt="linkedin-img"/>
                        </NavLink>
                    </div>
                </div>
                 <br/>
            <div className="text-center">
                    <p className="text-dark d-inline-block mx-2">

                    Copyright @Exapmle 2021-2030</p>
                   
            </div>
        </div>
    </footer>
                </>);
    };
export default Footer;    