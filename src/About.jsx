import React from "react";
import { NavLink } from "react-router-dom";
    const About = () => {
        return(
            <>
          
            <div className="my-5 mt-5 bg-black" >
          <h1 className="text-center">About us</h1>
         </div>
            <section id="header" >
            
            
              <div className="container-fluid ">
                <div className="row">
                <div className="col-10 mx-auto">
                <div className="row mt-4">
                    <div className="col-md-6 
                      order-1 order-lg-1  ">                            
                    <img src="https://labhansh-website-reactjs-01.herokuapp.com/images/img-2.png"
                    
                    className="img-fluid" 
                     alt="image" />            
                                   
                     </div>
                               
                    <div className="col-md-6 
                                    pt-5 pt-lg-0
                             order-2 
                          order-lg-2 
                          mt-1">  
                        <h2 className="text-primary">Who are we ? </h2>          
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
                        ipsa aspernatur id necessitatibus exercitationem cum et dolorem</p>
                        <h2 className="mt-4 text-primary">Who are we ? </h2>          
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
                        ipsa aspernatur id necessitatibus exercitationem cum et dolorem</p>
                     <div className="my-4">
                     <NavLink exact to="/" 
                     className="btn-get-Started">
                        Learn more</NavLink>
                        </div>
                        
                         </div>
                         </div>

                </div>
                </div>
                </div>
               
                </section>


            </>
        );
    };
export default About;    