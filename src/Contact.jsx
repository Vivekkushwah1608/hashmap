import React from "react";
import Card2 from "./Footer"
import Cdata3 from "./Cdata3"
    const Contact = () => {
        return (<>
            <div className="my-5" >
          <h1 className="text-center">Contact us</h1>
         </div>
         <div className="container mt-4 contact_div">
             <div className="row">
                 <div className="col-6 col-10 mx-auto">
                 <h2 className='mb-0 text-primary'>Send us Message</h2>
               
                     <form>
                     <div className="row mt-2">
                                <div className="col-md-6 pt-5
                                                pt-lg-0 order-1
                                                d-block 
                                                order-lg-1 d-flex 
                                                justify-content-center 
                                                flex-column">
                          <p className="mb-4 mt-0 text-info">
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, provident? 
                 Eos unde perspiciatis quam quo accusantium.
                 </p>                        
                                               
                    <div class="mb-3">
                    
                        <label for="exampleInputEmail1" 
                              class="form-label">
                              FullName</label>
                        <input type="text" 
                        class="form-control" 
                        id="exampleInputEmail1"
                         placeholder="Enter you name"/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" 
                              class="form-label">
                              Phone</label>
                        <input type="number" 
                        class="form-control" 
                        id="exampleInputEmail1"
                        placeholder="mobile number"/>
                    

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" 
                              class="form-label">
                              Email address</label>
                        <input type="email" 
                        class="form-control" 
                        id="exampleInputEmail1"
                         aria-describedby="emailHelp"/>
                        <div id="emailHelp" 
                        class="form-text">We'll never share
                         your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" 
                        class="form-label">Message</label>
                        <textarea 
                        class="form-control" 
                        id="exampleInputPassword1"
                        rows="3"></textarea>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" 
                        class="form-check-input" 
                        id="exampleCheck1"/>
                        <label class="form-check-label" 
                        for="exampleCheck1">Check me out</label>
                    </div>
                    
                    </div>
                    </div>
                    <button type="submit" 
                    class="btn btn-primary mb-5">Submit</button>
                    </form>
                 </div>
             </div>
         </div>
         
        </>);
    };
export default Contact;    